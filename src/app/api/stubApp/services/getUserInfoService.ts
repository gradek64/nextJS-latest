import { guestMock, loggedInMock, recognisedMock } from '@/app/api/stubApp/database/getUserInfo/getUserInfoMocks'
import { flags } from '@/flags'
import { Flags as FlagTypes, WcsUserInfoResponseType } from '@/lib/common'
import logger from '@/lib/logger'

export default class GetUserInfoService {
  public get = async () => {
    const userInfo = await flags[FlagTypes.WCS_USER_INFO_STUB]()
    const { LOGGEDIN, RECOGNISED, GUEST } = WcsUserInfoResponseType

    switch (userInfo) {
      case LOGGEDIN:
        return loggedInMock
      case RECOGNISED:
        return recognisedMock
      case GUEST:
        return guestMock
      default:
        logger.error('Invalid user info type')
    }
  }
}
