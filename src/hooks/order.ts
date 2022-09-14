import React, { useEffect, useRef, useState } from 'react'
import { OrderApi } from '@apis/order'
import { Order } from '@models/order'

export const useOrderList = () => {
     const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean | string>(false)
  const [data, setData] = useState<Order[]>([])
  const [page, setPage] = useState<Page>({
    current: 1,
    max: 10,
  })
  const fetchOrder = () => {
     OrderApi.listorder().then(r => {
          setData(r.data)
          if (r.page) setPage(r.page)
          setError(false)
          setLoading(false)
     })
  }
  useEffect(() => {
     fetchOrder()
  }, [])

return {
     loading,
     setLoading,
     error,
     setError,
     data,
     setData,
     page,
     setPage,
     fetchOrder
}
}
