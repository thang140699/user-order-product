import React, { useEffect, useRef, useState } from 'react'
import { fake_product, Product } from '@models/product'
import { Table, TableProps } from 'antd'
import Page from '@components/Page'
import { ProductApi } from '@apis/product'

type ProductPageProps = {}

const ProductPage: React.FC<ProductPageProps> = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean | string>(false)
  const [data, setData] = useState<Product[]>([])
  const [page, setPage] = useState<Page>({
    current: 1,
    max: 1,
  })
  useEffect(() => {
    ProductApi.Listproduct().then(r => {
      setData(r.data)
      setError(false)
      if (r.page) setPage(r.page)
      setLoading(false)
    })
  }, [])

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
  return (
    <Page inner>
      <Table dataSource={fake_product} columns={colums.current} />
    </Page>
  )
}

export default ProductPage
