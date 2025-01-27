export enum Brands {
  argos = 'argos',
  tu = 'tu',
  habitat = 'habitat'
}

export const Styles = ({ brand }: { brand: Brands }) => {
  switch (brand) {
    case Brands.argos:
      return 'argos'
    case Brands.habitat:
      return 'argos'
    case Brands.tu:
      return 'argos'
  }
}
