import { PropsWithChildren } from 'react'
import { unstable_cache as cache, revalidateTag } from 'next/cache'
import dynamic from 'next/dynamic'
import config from './config'
import Footer from './footer'
import Header from './header'
import { flags } from '@/flags'
import { Brands } from '@/lib/common'

const CACHE_TIME_IN_SECONDS = 60 * 60 // 1 hour

const propTypesScript = `<script crossorigin src="https://cdn.tu.co.uk/assets/react/prop-types.min.js"></script>`

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, no-console  */
const getShell = async (brand: Brands) => {
  try {
    const env = process.env.SHELL_ENV ?? 'production'
    const { baseUrl, path } = config[brand][env]
    const res = await fetch(`${baseUrl}${path}`)
    const json = await res.json()
    switch (brand) {
      case Brands.tu:
        return {
          header: {
            html: `${json.markup.header}`
          },
          footer: {
            html: `${json.markup.footer}`
          },
          global: {
            html: `${json.assets.styles}${json.assets.scripts}${propTypesScript}`
          }
        }
      case Brands.habitat:
        return {
          header: {
            html: `${json.styleTags}${json.markup}${json.assets}`
          }
        }
      default:
        return {
          header: {
            html: json.html as string,
            styles: `${json.styles}`,
            bundle: `${json.bundle}`
          }
        }
    }
  } catch (error) {
    console.error('Error fetching shell')
    console.error(error)
    return null
  }
}
/* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, no-console */

const boltClasses = {
  [Brands.argos]: 'bolt-v2',
  [Brands.habitat]: 'bolt-habitat',
  [Brands.tu]: 'bolt-tu'
} as const

const getCachedShell = cache(async (brand: Brands) => getShell(brand), ['shell'], {
  revalidate: CACHE_TIME_IN_SECONDS,
  tags: ['shell']
})

export const Shell = async ({ children }: PropsWithChildren) => {
  const brand = await flags.brand()
  const shell = await getCachedShell(brand)
  if (!shell) {
    revalidateTag('shell')
    return <div>{children}</div>
  }

  const BoltStyles = dynamic(() =>
    import(`@sainsburys-tech/boltui-style/dist/bolt-${brand}.min.css`).then(() => () => undefined)
  )

  const { header, footer, global } = shell
  return (
    <div className='ds-grid'>
      {global && <div dangerouslySetInnerHTML={{ __html: global.html }} suppressHydrationWarning></div>}
      <div className={`${boltClasses[brand]}`}>
        <Header bundle={header.bundle} html={header.html} stylesheet={header.styles} brand={brand} />
      </div>
      <div className='ds-min-h-[50vh]'>{children}</div>
      <div className={`${boltClasses[brand]}`}>
        <Footer html={footer?.html} brand={brand} />
        <BoltStyles />
      </div>
    </div>
  )
}

export default Shell
