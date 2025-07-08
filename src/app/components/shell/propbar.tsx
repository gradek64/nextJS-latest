'use client'

import { Brands } from '@/lib/common'

const Propbar = ({ brand }: { brand: Brands }) => {
  switch (brand) {
    case Brands.tu:
      // we will implement the Tu propbar when needed
      return null
    case Brands.habitat:
      return null
    case Brands.argos:
      return null
  }
}

export default Propbar
