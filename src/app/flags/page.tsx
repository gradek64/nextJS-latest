import { Button, ButtonGroup, Display1, Display3, Display4, Select } from '@sainsburys-tech/fable'
import { Container } from '@sainsburys-tech/grid'
import { config } from './config'
import { flags } from '@/flags'
import { Flags as FlagTypes } from '@/lib/common'
import { getOverride, setOverride } from '@/lib/flags/common'
import { nextStorage } from '@/lib/flags/server'
import SetWishlistLocalStorage from '@/lib/localWishlist/setWishlist'

const flatFlags = Object.keys(config).flatMap((key) => config[key])

const defaultValue = 'Default'

export default async function Flags() {
  const wishlistType = await flags[FlagTypes.WISHLIST_LOCAL_STUB]()
  const currentValues: Record<string, { override: unknown; value: unknown }> = {}

  for (const flag of flatFlags) {
    currentValues[flag.key] = { override: await getOverride(flag.key, nextStorage), value: await flag() }
  }

  async function submit(formData: FormData) {
    'use server'

    await setOverride(FlagTypes.HAS_FLAG_UPDATES, 'true', nextStorage)

    for (const flag of flatFlags) {
      if (formData.has(flag.key)) {
        let value = formData.get(flag.key)
        const isBoolean = value !== defaultValue && flag.values.every((value) => typeof value === 'boolean')
        value = isBoolean ? (JSON.parse(value as string) as string) : value
        await setOverride(flag.key, value === defaultValue ? undefined : value, nextStorage)
      }
    }
  }

  async function clear() {
    'use server'

    await setOverride(FlagTypes.HAS_FLAG_UPDATES, 'true', nextStorage)

    for (const flag of flatFlags) {
      await setOverride(flag.key, undefined, nextStorage)
    }
  }

  if (process.env.OVERRIDE_FLAGS !== 'true') {
    return (
      <div className='ds-p-8'>
        <Display4>Flags are disabled</Display4>
        Set the OVERRIDE_FLAGS env var to enable
      </div>
    )
  }

  return (
    <Container size='lg'>
      <SetWishlistLocalStorage wishlistType={wishlistType} />
      <form key={Math.random()} action={submit} className='ds-p-8'>
        <div className='ds-sticky ds-top-2 ds-flex'>
          <Display4>Flags</Display4>
          <ButtonGroup align='right'>
            <Button formAction={clear} variant='tertiary' colourScheme='monochrome-dark'>
              Clear
            </Button>
            <Button variant='primary' colourScheme='monochrome-dark'>
              Apply
            </Button>
          </ButtonGroup>
        </div>
        <div className='ds-my-4 ds-flex ds-gap-8'>
          {Object.keys(config).flatMap((group) => {
            const children = config[group].map(({ key, description, values }) => {
              const { override, value } = currentValues[key] as { override: string; value: string }
              return (
                <div key={key} className='ds-my-6'>
                  <a href={`#${key}`}>
                    <Display1>{key}</Display1>
                  </a>
                  <Select
                    name={key}
                    key={key}
                    hasHiddenLabel
                    label={`${key}`}
                    defaultValue={`${override}`}
                    options={[...values.map((value) => ({ label: `${value as string}`, value: `${value as string}` }))]}
                    supportingText={description}
                  />
                  <div>current value: {`${value}`}</div>
                </div>
              )
            })
            return (
              <div key={group}>
                <a href={`#${group}`}>
                  <Display3 className='ds-capitalize'>{group}</Display3>
                </a>
                <div className='ds-max-w-lg'>{children}</div>
                <hr aria-orientation='horizontal' className='ds-my-8' />
              </div>
            )
          })}
        </div>
        <Display1>URL</Display1>
        <pre className='ds-text-wrap'>
          __flags=
          {encodeURIComponent(
            JSON.stringify(currentValues, (_key, value: { value: string; override: string }) => {
              const valueWithFlagUpdate = { ...value, 'has-flag-updates': { override: 'true', value: 'true' } }
              if (valueWithFlagUpdate?.value !== undefined || valueWithFlagUpdate?.override !== undefined) {
                return valueWithFlagUpdate?.override
              }
              return valueWithFlagUpdate
            })
          )}
        </pre>
      </form>
    </Container>
  )
}
