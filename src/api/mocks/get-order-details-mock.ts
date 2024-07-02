import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from './../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '+1 202-555-0170',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Margherita' },
        quantity: 1,
      },
      {
        id: 'item-1',
        priceInCents: 2000,
        product: { name: 'Pizza Calabresa' },
        quantity: 2,
      },
    ],
  })
})
