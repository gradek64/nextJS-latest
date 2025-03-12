import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { getDatabaseDir } from '../helpers'
import { ApiTypes } from '../interfaces'
import { hasItems } from './wishlist/datasets/wishlistdata'
import { Wishlists } from '@/app/api/stubApp/interfaces/wishlistTypes'

const createDatabase = (stubCookie: string, api: ApiTypes) => {
  const directory = getDatabaseDir(api)

  const defaultData = { ...hasItems }
  const file = `${directory}/${stubCookie}.json`

  const adapter = new JSONFile<Wishlists>(file)
  const db = new Low(adapter, defaultData)
  return db
}
export default createDatabase
