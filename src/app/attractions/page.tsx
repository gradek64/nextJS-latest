import { Display1, Display4 } from '@sainsburys-tech/fable'

export default function Attractions() {
  const attractions = [
    {
      name: 'Interactive Components',
      description: 'Explore our interactive UI components with real-time feedback.',
      icon: '🎮'
    },
    {
      name: 'Responsive Design',
      description: 'Experience seamless navigation across all device sizes.',
      icon: '📱'
    },
    {
      name: 'Modern Architecture',
      description: 'Built with the latest Next.js and React technologies.',
      icon: '🏗️'
    },
    {
      name: 'Performance Optimized',
      description: 'Fast loading times with optimized bundle sizes.',
      icon: '⚡'
    }
  ]

  return (
    <div className='ds-container ds-mx-auto ds-px-4 ds-py-8'>
      <Display4 className='ds-mb-6'>Attractions & Features</Display4>
      <Display1 className='ds-mb-8'>Discover what makes our app special</Display1>

      <div className='ds-grid ds-grid-cols-1 ds-gap-6 md:ds-grid-cols-2'>
        {attractions.map((attraction, index) => (
          <div
            key={index}
            className='ds-border-gray-200 ds-rounded-lg ds-border ds-p-6 ds-shadow-sm ds-transition-shadow hover:ds-shadow-md'
          >
            <div className='ds-mb-4 ds-text-4xl'>{attraction.icon}</div>
            <h3 className='ds-mb-2 ds-text-xl ds-font-semibold'>{attraction.name}</h3>
            <p className='ds-text-gray-600'>{attraction.description}</p>
          </div>
        ))}
      </div>

      <div className='ds-mt-12 ds-text-center'>
        <div className='ds-bg-blue-50 ds-rounded-lg ds-p-8'>
          <Display1 className='ds-mb-4'>Ready to Explore?</Display1>
          <p className='ds-text-gray-700 ds-text-lg'>
            Navigate through the menu to explore different sections of our application.
          </p>
        </div>
      </div>
    </div>
  )
}
