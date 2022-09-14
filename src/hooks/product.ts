import React, { useEffect, useRef, useState } from 'react'
import { ProductApi } from '@apis/product'
import { Product } from '@models/product'
import { error } from 'console'

export const useProdictList = () => {
     const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean | string>(false)
  const [data, setData] = useState<Product[]>([])
  const [page, setPage] = useState<Page>({
    current: 1,
    max: 10,
  })
  const fetchProduct = () => {
     ProductApi.Listproduct().then(r => {
          setData(r.data)
          if (r.page) setPage(r.page)
          setError(false)
          setLoading(false)
     })
  }
  useEffect(() => {
     fetchProduct()
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
     fetchProduct
}
}
