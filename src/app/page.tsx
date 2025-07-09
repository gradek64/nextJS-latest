import { Display1, Display4 } from '@sainsburys-tech/fable'

const Card = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a href={href} rel='noreferrer'>
    <div className='ds-p-4 ds-shadow hover:ds-bg-blue hover:ds-text-white'>
      <Display1>{children}</Display1>
      <p className='ds-m-0 ds-text-sm'>{href}</p>
    </div>
  </a>
)

export default function Index() {
  return (
    <div className='ds-grid ds-grid-cols-[500px] ds-items-center ds-justify-center ds-gap-4'>
      <Display4 className='ds-mb-4 ds-mt-12'>Pages</Display4>
      <Display1>Customer facing</Display1>
      <Card href='/wishlist'>Wishlist</Card>
      <hr aria-orientation='horizontal' className='ds-my-2' />

      <Display1>Dev only</Display1>
      <Card href='/flags'>Flag overrides</Card>
      <Card href='/customs-demo'>Customs Component Library Demo</Card>
    </div>
  )
}
