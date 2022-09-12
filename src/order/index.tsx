import React, { useState, useRef, useEffect } from 'react'
import { fake_order, Order } from 'src/models/order'
import { Table, TableProps } from 'antd'
import Page from '@components/Page'
import { OrderApi } from '@apis/order'

type OrderPageProps = {}
const OrderPage: React.FC<OrderPageProps> = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean | string>(false)
  const [data, setData] = useState<Order[]>([])
  const [page, setPage] = useState<Page>({
    current: 1,
    max: 1,
  })

  useEffect(() => {
    OrderApi.list().then(r => {
      setData(r.data)
      setError(false)
      if (r.page) setPage(r.page)
      setLoading(false)
    })
  }, [])

  const columns = useRef<TableProps<Order>['columns']>([
    {
      key: 'id',
      dataIndex: 'id',
      width: '60px',
      title: 'ID',
    },
    {
      key: 'username',
      dataIndex: 'username',
      title: 'Username',
    },
    {
      key: 'discount',
      dataIndex: 'discount',
      title: 'Discount',
    },
    {
      key: 'city',
      dataIndex: 'city',
      title: 'City',
    },
    {
      key: 'state',
      dataIndex: 'state',
      title: 'State',
    },
    {
      key: 'phone',
      dataIndex: 'phone',
      title: 'Phone',
    },
    {
      key: 'status',
      dataIndex: 'status',
      width: '100px',
      render: value => {
        return <span>{value === 1 ? 'Đặt' : 'Chưa đặt'}</span>
      },
    },
  ])
  return (
    <Page inner>
      <Table dataSource={fake_order} columns={columns.current} />
    </Page>
  )
}

export default OrderPage
