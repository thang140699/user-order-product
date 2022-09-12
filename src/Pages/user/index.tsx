import React, { useEffect, useRef, useState } from 'react'
import { fake_class, User } from 'src/models/user'
import { Table, TableProps } from 'antd'
import Page from '@components/Page'
import { UserApi } from '@apis/user'

type UserPageProps = {}

const UserPage: React.FC<UserPageProps> = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean | string>(false)
  const [data, setData] = useState<User[]>([])
  const [page, setPage] = useState<Page>({
    current: 1,
    max: 1,
  })

  useEffect(() => {
    UserApi.list().then(r => {
      setData(r.data)
      setError(false)
      if (r.page) setPage(r.page)
      setLoading(false)
    })
  }, [])
  //     setTimeout(() => {
  //       setData(fake_class)
  //       setError(false)
  //       setPage({
  //         current: 1,
  //         max: 10,
  //       })
  //       setLoading(false)
  //     }, 10000)
  //   }, [])
  const columns = useRef<TableProps<User>['columns']>([
    {
      key: 'id',
      dataIndex: 'id',
      width: '60px',
      title: 'Id',
    },
    {
      key: 'first_name',
      dataIndex: 'first_name',
      title: 'First Name',
    },
    {
      key: 'last_name',
      dataIndex: 'last_name',
      title: 'Last Name',
    },
    {
      key: 'email',
      dataIndex: 'email',
      title: 'Email',
    },
    {
      key: 'birthday',
      dataIndex: 'birthday',
      title: 'birthday',
    },
    {
      key: 'gender',
      dataIndex: 'gender',
      width: '60px',
      render: value => {
        return <span>{value === 1 ? 'Nam' : 'Nu'}</span>
      },
    },
  ])

  return (
    <Page inner>
      <Table dataSource={fake_class} columns={columns.current} />
    </Page>
  )
}

export default UserPage
