import { flags } from '@/flags'
import { Flags as FlagTypes } from '@/lib/common'
import { FlagReturnType } from '@/lib/flags/common'

export const config: Record<string, FlagReturnType[]> = {
  general: [flags[FlagTypes.BRAND], flags[FlagTypes.APP_SHELL]],
  stub: [flags[FlagTypes.STUB], flags[FlagTypes.WISHLIST_STUB]]
}
