export enum Brands {
  argos = 'argos',
  habitat = 'habitat'
}

/* This is a temporary way to switch between brands.
  In the long run, instead of relying on an environment variable, 
  the app would retrieve the brand from the brand header and 
  likely store it in context state.
*/
export const brand: Brands = process.env.BRAND ?? 'argos'
