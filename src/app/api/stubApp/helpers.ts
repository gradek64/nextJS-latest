import * as fs from 'fs'
import { cookies } from 'next/headers'
import { ApiTypes, CookieTypes } from './interfaces'
import logger from '@/lib/logger'

const deleteFile = async (filePath: string) => {
  const databaseDir = getDatabaseDir(ApiTypes.WISHLIST)
  try {
    await fs.promises.unlink(databaseDir + filePath)
    logger.info(`Successfully removed ${filePath}`)
  } catch (err) {
    logger.error(`Error removing ${filePath}`, err)
  }
}

const daysToMilliseconds = (days: number) => {
  return days * 24 * 60 * 60 * 1000
}

export const getDatabaseDir = (api: ApiTypes) => {
  if (process.env.NODE_ENV === 'production') {
    const prodDir = `/tmp/${api}`
    if (!fs.existsSync(prodDir)) {
      fs.mkdirSync(prodDir)
    }
    return prodDir
  }

  return `${process.cwd()}/src/app/api/stubApp/database/${api}/`
}

export function getStubCookie() {
  const cookieStore = cookies()
  const cookieValue = cookieStore.get(CookieTypes.STUB_COOKIE)?.value

  if (!cookieValue) {
    const value = `stub${Date.now()}`
    cookieStore.set(CookieTypes.STUB_COOKIE, value)
    return value
  }

  return cookieValue
}

export async function cleanUpJsonFiles(stubCookie: string) {
  const cache = daysToMilliseconds(5) // 5 days
  const databaseDir = getDatabaseDir(ApiTypes.WISHLIST)
  const directory = fs.readdirSync(databaseDir)
  const timestampPattern = /(?<=b)(\d+)(?=\.json)/g

  for (const file of directory) {
    const fileCreatedTime = Number(file.match(timestampPattern))
    const expiryTime = fileCreatedTime + cache
    const isJsonFile = fileCreatedTime !== 0 || file === '.json'

    if (expiryTime < Date.now() && isJsonFile) {
      await deleteFile(file)

      if (file === `${stubCookie}.json`) {
        const cookieStore = cookies()
        cookieStore.delete(CookieTypes.STUB_COOKIE)
      }
    }
  }
}

export function getFiles(api: ApiTypes) {
  const databaseDir = getDatabaseDir(api)
  return fs.readdirSync(databaseDir)
}
