export default {
  argos: {
    development: {
      path: '/header-assets/header.json',
      baseUrl: 'https://nav-pdp-argos-header-service.int.dev.jspaas.uk'
    },
    staging: {
      path: '/header-assets/header.json',
      baseUrl: 'https://nav-pdp-argos-header-service.int.stg.jspaas.uk'
    },
    production: {
      path: '/header-assets/header.json',
      baseUrl: 'https://www.argos.co.uk'
    }
  },
  tu: {
    development: {
      path: '/manifest?modules=header,footer&pageType=checkout',
      baseUrl: 'https://nav-pdp-tu-global-components.int.dev.jspaas.uk'
    },
    staging: {
      path: '/manifest?modules=header,footer&pageType=checkout',
      baseUrl: 'https://nav-pdp-tu-global-components.int.stg.jspaas.uk'
    },
    production: {
      path: '/manifest?modules=header,footer&pageType=checkout',
      baseUrl: 'https://nav-pdp-tu-global-components.int.prd.jspaas.uk'
    }
  },
  habitat: {
    development: {
      path: '/manifest?brand=habitat',
      baseUrl: 'https://nav-pdp-navigation-header-service.int.dev.jspaas.uk'
    },
    staging: {
      path: '/manifest?brand=habitat',
      baseUrl: 'https://nav-pdp-navigation-header-service.int.stg.jspaas.uk'
    },
    production: {
      path: '/manifest?brand=habitat',
      baseUrl: 'https://nav-pdp-navigation-header-service.int.prd.jspaas.uk'
    }
  }
} as const
