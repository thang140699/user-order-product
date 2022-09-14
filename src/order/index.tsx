import React, { useState, useRef, useEffect } from 'react'
import { fake_order, Order } from 'src/models/order'
import { Button, Modal, Table, TableProps } from 'antd'
import Page from '@components/Page'
import { OrderApi } from '@apis/order'
import { useOrderList } from '@hooks/order'
import ModalForm, { ModalFormMethod } from '@Pages/user/components/ModalForm'

type OrderPageProps = {}
const OrderPage: React.FC<OrderPageProps> = () => {
  const { loading, error, data, page, fetchOrder } = useOrderList()

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
  const modal = useRef<ModalFormMethod>(null)
  const onCreate = () => {
    modal.current?.setVisible(false)
  }
  const onFinished = () => {}
  return (
    <Page inner>
      <div className="viewCreate">
        <Button onClick={onCreate}>Create</Button>
      </div>
      <Table
        rowKey={item => item.id}
        loading={loading}
        dataSource={data}
        columns={columns.current}
      />
      <ModalForm ref={modal} onFinished={onFinished} />
    </Page>
  )
}

export default OrderPage
