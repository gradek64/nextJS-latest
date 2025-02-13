import { type Flag } from '@vercel/flags/next'

const DEFAULT_OVERRIDES_NAMESPACE = 'flag-overrides'

export type OverrideStorage = {
  get: (namespace: string) => Promise<string | undefined>
  set: (namespace: string, value: string) => Promise<void>
}

export const getOverride = async (name: string, storage: OverrideStorage) => {
  try {
    const overrides = (await storage.get(DEFAULT_OVERRIDES_NAMESPACE)) ?? '{}'
    return (JSON.parse(overrides) as Record<string, unknown>)[name]
  } catch {
    return undefined
  }
}

export const setOverride = async (name: string, value: unknown, storage: OverrideStorage) => {
  const overrides = (await storage.get(DEFAULT_OVERRIDES_NAMESPACE)) ?? '{}'
  const json = JSON.parse(overrides) as Record<string, unknown>
  json[name] = value
  const payload = JSON.stringify(json)
  await storage.set(DEFAULT_OVERRIDES_NAMESPACE, payload)
}

export type ComputedFlags<Type> = {
  [Property in keyof Type]: Type[Property] extends (...args: unknown[]) => infer R ? Awaited<R> : never
}

export const createOverrides = <U extends Record<string, FlagReturnType>>() => {
  return {
    get: <S extends keyof U>(
      key: S,
      storage: OverrideStorage
    ): U[S] extends (...args: unknown[]) => infer R ? R : never => {
      return getOverride(String(key), storage) as never
    },
    set: <S extends keyof U>(
      key: S,
      value: U[S] extends (...args: unknown[]) => infer R ? Awaited<R> : never,
      storage: OverrideStorage
    ) => {
      return setOverride(String(key), value, storage)
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FlagReturnType = Flag<any> & { values: readonly unknown[] }

export const computeFlags: <T extends Record<string, FlagReturnType>>(flags: T) => Promise<ComputedFlags<T>> = async (
  flags
) => {
  const computed: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(flags)) {
    computed[key] = await value()
  }
  return computed as never
}
