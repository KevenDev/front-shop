import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from './../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza', amount: 1 },
    { product: 'Pizza 2', amount: 2 },
    { product: 'Pizza 3', amount: 3 },
    { product: 'Pizza 4', amount: 4 },
    { product: 'Pizza 5', amount: 5 },
  ])
})
