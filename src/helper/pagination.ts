import { InfiniteData } from "react-query"

export interface Paginated<T> {
  data: T
  links: {
    first: string
    last: string
    prev: null
    next: null | string
  }
  current_page: number
  from: number
  last_page: number
  path: string
  per_page: number
  to: number
  total: number
}

export function dataFromPaginated<T extends Array<any>>(
  paginationData: InfiniteData<Paginated<T>>,
): T {
  if (!paginationData) return null
  // @ts-ignore
  return paginationData?.pages.reduce(
    (acc, group) => [...acc, ...group.data],
    [],
  )
}

export const handlePaginationFetch = (lastQuery: Paginated<any>) => {
  // Error
  if (lastQuery === undefined) {
    return false
  }
console.log(lastQuery,'test')
  const currentPage = lastQuery.current_page
  const lastPage = lastQuery.last_page
  if (currentPage === lastPage) return false
  return currentPage + 1
}

export const standardExtraQueryParam = {
  getNextPageParam: handlePaginationFetch,
}
