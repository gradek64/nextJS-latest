import { flags } from '@/flags'
import { Flags as FlagTypes } from '@/lib/common'
import { FlagReturnType } from '@/lib/flags/common'

export const config: Record<string, FlagReturnType[]> = {
  general: [flags[FlagTypes.BRAND], flags[FlagTypes.APP_SHELL], flags[FlagTypes.STUB]],
  stubs: [flags[FlagTypes.WCS_USER_INFO_STUB], flags[FlagTypes.WISHLIST_LOCAL_STUB], flags[FlagTypes.WISHLIST_API_STUB]]
}
