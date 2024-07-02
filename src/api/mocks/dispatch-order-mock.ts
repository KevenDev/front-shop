import { http, HttpResponse } from 'msw'

import { DispatchOrderParams } from '../dispatch-order'

export const dispatchOrderMock = http.patch<DispatchOrderParams, never, never>(
  '/orders/:orderId/dispatch',
  async ({ params }) => {
    if (params.orderId === 'erro-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
