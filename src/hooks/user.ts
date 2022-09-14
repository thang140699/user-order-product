import React, { useEffect, useRef, useState } from 'react'
import { UserApi } from '@apis/user'
import { User } from '@models/user'

export const useUserList = () => {
    //  const { data, loading, error, page } = useUserList()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean | string>(false)
  const [data, setData] = useState<User[]>([])
  const [page, setPage] = useState<Page>({
    current: 1,
    max: 10,
  })
  const fetch = () => {
    UserApi.list().then(r => {
      setData(r.data)
      if (r.page) setPage(r.page)
      setError(false)
      setLoading(false)
    })
  }
  useEffect(() => {
    fetch()
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
     fetch,
   }
}
