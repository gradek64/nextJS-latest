import { GetUserInfoService } from '../services'
import logger from '@/lib/logger'

export default class GetUserInfoController {
  public GetUserInfoService: GetUserInfoService

  constructor() {
    this.GetUserInfoService = new GetUserInfoService()
  }

  public get = async () => {
    try {
      const response = await this.GetUserInfoService.get()
      if (!response) logger.error('Error getting userinfo')
      return response
    } catch {
      return { error: 'Error getting userinfo' }
    }
  }
}
