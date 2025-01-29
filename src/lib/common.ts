export enum Brands {
  argos = 'argos',
  habitat = 'habitat'
}

export const brand: Brands = process.env.BRAND ?? 'argos'
