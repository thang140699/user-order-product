import React, { useEffect, useRef, useState } from 'react'
import { fake_product, Product } from '@models/product'
import { Button, Modal, Table, TableProps } from 'antd'
import Page from '@components/Page'
import { ProductApi } from '@apis/product'
import ModalForm, { ModalFormMethod } from '@Pages/user/components/ModalForm'
import { useProdictList } from '@hooks/product'

type ProductPageProps = {}

const ProductPage: React.FC<ProductPageProps> = () => {
  const { loading, error, data, page, fetchProduct } = useProdictList()

  const colums = useRef<TableProps<Product>['columns']>([
    {
      key: 'id',
      dataIndex: 'id ',
      title: 'ID',
      width: '60px',
    },
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
    },
    {
      key: 'price',
      dataIndex: 'price',
      title: 'Price',
    },
    {
      key: 'brand',
      dataIndex: 'brand',
      title: 'Brand',
    },
    {
      key: 'weight',
      dataIndex: 'weight',
      title: 'Weight',
    },
    {
      key: 'status',
      dataIndex: 'status',
      width: '60px',
      render: value => {
        return <span> {value === 1 ? 'Còn' : 'Hết'}</span>
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
        columns={colums.current}
      />
      <ModalForm ref={modal} onFinished={onFinished} />
    </Page>
  )
}

export default ProductPage
