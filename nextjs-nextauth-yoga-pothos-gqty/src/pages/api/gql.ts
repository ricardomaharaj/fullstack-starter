import { PageConfig } from 'next'
import { yoga } from '~/server/yoga'

export const config: PageConfig = { api: { bodyParser: false } }

export default yoga
