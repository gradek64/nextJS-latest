'use server'

import { cookies } from 'next/headers'
import createClient from 'openapi-fetch'
import { flags } from '@/flags'
import type { paths as wcsUserInfoPaths } from '@/openapi-types/wcs-user-info'

export const services = async () => {
  await flags.stub()
  return {
    wcsUserInfo: createClient<wcsUserInfoPaths>({
      baseUrl: process.env.APP_BASE_URL
    })
  }
}

export const getWcsUserInfoData = async () => {
  const { wcsUserInfo } = await services()
  const cookiesList = cookies()
  const { data, response } = await wcsUserInfo.GET('/webapp/wcs/stores/servlet/GetUserInfo', {
    headers: {
      Cookie: cookiesList.toString()
    }
  })

  if (response.status !== 200 || !data) {
    throw new Error('failed to fetch return')
  }
  return data
}
