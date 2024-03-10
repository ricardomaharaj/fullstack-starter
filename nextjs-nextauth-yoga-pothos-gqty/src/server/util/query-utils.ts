export function nonNull<T>(val: T): NonNullable<T> | undefined {
  if (val === null) return undefined
  if (typeof val === 'undefined') return undefined
  return val
}

/** `true === desc`, `false === asc` */
export function boolSort(val: boolean | null | undefined) {
  val = nonNull(val)
  return val ? 'desc' : 'asc'
}

export function strContains(val: string | null | undefined) {
  val = nonNull(val)
  return { contains: val }
}
