import { Brands } from '@/lib/common'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BRAND: Brands
    }
  }
}

export {}
