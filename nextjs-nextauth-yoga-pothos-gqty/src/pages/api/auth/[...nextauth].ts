import NextAuth from 'next-auth'
import { authOpts } from '~/server/util/auth'

export default NextAuth(authOpts)
