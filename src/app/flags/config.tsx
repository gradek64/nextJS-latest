import { flags } from '@/flags'
import { FlagReturnType } from '@/lib/flags/common'

export const config: Record<string, FlagReturnType[]> = {
  general: [flags.brand, flags['app-shell']],
  stub: [flags.stub, flags['wishlist-stub']]
}
