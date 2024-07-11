export const queryHelpers = {
  nonNull: <T>(val: T | null | undefined) => {
    if (!val) return undefined

    return val
  },
  boolSort: (bool: boolean | null | undefined) => {
    if (typeof bool === 'undefined') return undefined
    if (bool === null) return undefined

    return bool ? 'desc' : 'asc'
  },
  strContains: (str: string | null | undefined) => {
    if (!str) return undefined

    return {
      contains: str,
      mode: 'insensitive',
    } as const
  },
}
