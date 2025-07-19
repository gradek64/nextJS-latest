import { Display1, Display4 } from '@sainsburys-tech/fable'

export default function About() {
  return (
    <div className='ds-container ds-mx-auto ds-px-4 ds-py-8'>
      <Display4 className='ds-mb-6'>About Our App</Display4>
      <div className='ds-max-w-4xl'>
        <Display1 className='ds-mb-4'>Welcome to our Next.js Application</Display1>
        <p className='ds-mb-4 ds-text-lg'>
          This is a modern web application built with Next.js 15, featuring a responsive navigation menu and various
          pages to showcase different functionality.
        </p>
        <div className='ds-mt-8 ds-grid ds-grid-cols-1 ds-gap-6 md:ds-grid-cols-2'>
          <div className='ds-rounded-lg ds-border ds-p-6'>
            <h3 className='ds-mb-2 ds-text-xl ds-font-semibold'>Features</h3>
            <ul className='ds-space-y-2'>
              <li>• Responsive navigation menu</li>
              <li>• Mobile-friendly hamburger menu</li>
              <li>• Multiple page navigation</li>
              <li>• Component library integration</li>
            </ul>
          </div>
          <div className='ds-rounded-lg ds-border ds-p-6'>
            <h3 className='ds-mb-2 ds-text-xl ds-font-semibold'>Technologies</h3>
            <ul className='ds-space-y-2'>
              <li>• Next.js 15</li>
              <li>• React 19</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
