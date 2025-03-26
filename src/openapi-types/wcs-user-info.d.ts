/**
 * This was manually created as there is no swagger/openapi file to generate from.
 */

export interface paths {
  '/webapp/wcs/stores/servlet/GetUserInfo': {
    parameters: {
      query?: {
        langId?: number
        storeId?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    get: operations['getUserInfo']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export interface components {
  schemas: {
    GetUserInfo: {
      userId?: string
      /** @enum {string} */
      userState?: 'GUEST' | 'LOGGEDIN' | 'RECOGNISED'
      emailAddress?: string
      firstName?: string
      postCode?: string
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export interface operations {
  getUserInfo: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Success */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          '*/*': components['schemas']['GetUserInfo']
        }
      }
    }
  }
}
