import * as fs from 'fs'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { cookies } from 'next/headers'
import { cleanUpJsonFiles, getDatabaseDir, getFiles, getStubCookie } from './helpers'
import { ApiTypes, CookieTypes } from './interfaces'

jest.mock('next/headers', () => ({
  cookies: jest.fn()
}))

jest.mock('fs', () => ({
  promises: {
    unlink: jest.fn()
  },
  existsSync: jest.fn(),
  mkdirSync: jest.fn(),
  readdirSync: jest.fn()
}))

describe('getDatabaseDir', () => {
  const originalEnv = process.env
  const setMockEnv = (env: 'development' | 'production' | 'test') => {
    process.env = {
      ...originalEnv,
      NODE_ENV: env
    }
  }

  beforeEach(() => {
    jest.resetModules()
  })

  afterEach(() => {
    process.env = originalEnv
    jest.clearAllMocks()
  })

  it('should return production directory', () => {
    setMockEnv('production')
    const prodDir = `/tmp/${ApiTypes.WISHLIST}`
    ;(fs.existsSync as jest.Mock).mockReturnValue(false)

    const result = getDatabaseDir(ApiTypes.WISHLIST)

    expect(result).toBe(prodDir)
    expect(fs.existsSync).toHaveBeenCalledWith(prodDir)
    expect(fs.mkdirSync).toHaveBeenCalledWith(prodDir)
  })

  it('should return dev directory in local development', () => {
    setMockEnv('development')
    const localDir = `${process.cwd()}/src/app/api/stubApp/database/${ApiTypes.WISHLIST}/`

    const result = getDatabaseDir(ApiTypes.WISHLIST)

    expect(result).toBe(localDir)
  })
})

describe('getStubCookie', () => {
  let mockCookieStore: ReadonlyRequestCookies

  beforeEach(() => {
    mockCookieStore = {
      get: jest.fn(),
      set: jest.fn(),
      delete: jest.fn(),
      getAll: jest.fn(),
      has: jest.fn(),
      [Symbol.iterator]: jest.fn(),
      size: 0
    }
    ;(cookies as jest.Mock).mockReturnValue(mockCookieStore)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return existing cookie value if it exists', async () => {
    const existingValue = 'existingStubCookie'
    ;(mockCookieStore.get as jest.Mock).mockReturnValue({ value: existingValue })

    const result = await getStubCookie()

    expect(result).toBe(existingValue)
    expect(mockCookieStore.get).toHaveBeenCalledWith(CookieTypes.STUB_COOKIE)
    expect(mockCookieStore.set).not.toHaveBeenCalled()
  })

  it('should set and return new cookie value if it does not exist', async () => {
    ;(mockCookieStore.get as jest.Mock).mockReturnValue(undefined)

    const result = await getStubCookie()

    expect(result).toMatch(/^stub\d+$/)
    expect(mockCookieStore.get).toHaveBeenCalledWith(CookieTypes.STUB_COOKIE)
    expect(mockCookieStore.set).toHaveBeenCalledWith(CookieTypes.STUB_COOKIE, result)
  })
})

describe('cleanUpJsonFiles', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should delete expired JSON files and remove stub cookie if necessary', async () => {
    const stubCookie = 'stub123'
    const files = [`stub1234.json`, `stub12345.json`] // 2 expired files
    ;(fs.readdirSync as jest.Mock).mockReturnValue(files)

    await cleanUpJsonFiles(stubCookie)

    expect(fs.promises.unlink).toHaveBeenCalledTimes(2)
  })

  it('should not delete non-expired JSON files', async () => {
    const stubCookie = 'stub123'
    const files = [`stub${Date.now()}.json`] // 1 non-expired file
    ;(fs.readdirSync as jest.Mock).mockReturnValue(files)

    await cleanUpJsonFiles(stubCookie)

    expect(fs.promises.unlink).not.toHaveBeenCalled()
  })
})

describe('getFiles', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return list of files in the directory', () => {
    const apiType = ApiTypes.WISHLIST
    const files = ['file1.json', 'file2.json']
    ;(fs.readdirSync as jest.Mock).mockReturnValue(files)

    const result = getFiles(apiType)

    expect(result).toEqual(files)
    expect(fs.readdirSync).toHaveBeenCalledWith(getDatabaseDir(apiType))
  })
})
