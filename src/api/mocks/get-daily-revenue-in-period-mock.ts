import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '2024-01-01', receipt: 1000 },
    { date: '2024-02-01', receipt: 2000 },
    { date: '2024-03-01', receipt: 3000 },
    { date: '2024-04-01', receipt: 1000 },
    { date: '2024-05-01', receipt: 5000 },
    { date: '2024-06-01', receipt: 8000 },
    { date: '2024-07-01', receipt: 9000 },
  ])
})
