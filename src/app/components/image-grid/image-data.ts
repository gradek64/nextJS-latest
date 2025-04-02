import styles from './image-grid.module.css'

const portraitDimensions = {
  rowSpan: 2,
  width: 720,
  height: 940
}

const landscapeDimensions = {
  rowSpan: 1,
  width: 720,
  height: 488
}

export const items = [
  {
    src: 'https://media.4rgos.it/i/Argos/NinjaAirfryer?w=auto&qlt=75&fmt=avif&noiser=0&',
    alt: 'air fryer',
    imgStyles: styles.portraitStyles,
    itemStyles: '',
    ...portraitDimensions
  },
  {
    src: 'https://media.4rgos.it/i/Argos/MadeToOrder?w=auto&qlt=75&fmt=avif&noiser=0&',
    alt: 'orange sofa',
    imgStyles: styles.landscapeStyles + ' ds-object-left',
    itemStyles: '',
    ...landscapeDimensions
  },
  {
    src: 'https://media.4rgos.it/i/Argos/Lego_3?w=auto&qlt=75&fmt=avif&noiser=0&',
    alt: 'Lego set',
    imgStyles: styles.portraitStyles + ' ds-object-right',
    itemStyles: '',
    ...portraitDimensions
  },
  {
    src: 'https://media.4rgos.it/i/Argos/TV?w=auto&qlt=75&fmt=avif&noiser=0&',
    alt: 'TV',
    imgStyles: styles.landscapeStyles + ' ds-object-left',
    itemStyles: '',
    ...landscapeDimensions
  },
  {
    src: 'https://media.4rgos.it/i/Argos/Blender?w=auto&qlt=75&fmt=avif&noiser=0&',
    alt: 'blender',
    imgStyles: styles.portraitStyles,
    itemStyles: 'ds-hidden md:ds-block',
    ...portraitDimensions
  },
  {
    src: 'https://media.4rgos.it/i/Argos/Bedframe?w=auto&qlt=75&fmt=avif&noiser=0&',
    alt: 'green bedframe',
    imgStyles: styles.landscapeStyles,
    itemStyles: '',
    ...landscapeDimensions
  },
  {
    src: 'https://media.4rgos.it/i/Argos/Summerhouse?w=auto&qlt=75&fmt=avif&noiser=0&',
    alt: 'wooden summerhouse',
    imgStyles: styles.landscapeStyles,
    itemStyles: '',
    ...landscapeDimensions
  }
]
