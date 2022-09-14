import { Form, Input, Modal, FormInstance, DatePicker, Button } from 'antd'
import React, { useImperativeHandle, useRef, useState } from 'react'
import { ColDefaultProps, defaultFormItemLayout } from '@themes/styles'
import { on } from 'events'
import { ProductApi } from '@apis/product'
import { productId, Product } from '@models/product'

type ModalFormProps = {
  onFinished: () => void
}

export type ModalFormMethod = {
  setVisible: (visible: boolean) => void
  setData: (data?: Product) => void
}

const ModalFormProduct = React.forwardRef<ModalFormMethod, ModalFormProps>(
  ({ onFinished }, ref) => {
    const [visible, setVisible] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const form = useRef<FormInstance>(null)
    useImperativeHandle(ref, () => {
      return {
        setVisible: value => {
          setVisible(value)
          if (value) {
            form.current?.resetFields()
          }
        },
        setData: value => {},
      }
    })
    const onSubmit = value => {
      const param = {
        name: value.name,
        brand: value.brand,
        price: value.price,
        weight: value.weight,
        status: 1 as 0 | 1,
      }
      setLoading(true)
    }
    const onOke = () => {
      const param = {
        id: productId,
        name: form.current?.getFieldValue('name') ?? '',
        brand: form.current?.getFieldValue('brand') ?? '',
        price: form.current?.getFieldValue('price') ?? '',
        weight: form.current?.getFieldValue('weight') ?? '',
        status: 1 as 0 | 1,
      }
      setLoading(true)
      ProductApi.createProduct({ input: param }).then(r => {
        setLoading(false)
        setVisible(false)
      })
      onFinished()
    }
    return (
      <Modal
        visible={visible}
        onCancel={() => {
          setVisible(false)
        }}
        confirmLoading={loading}
        onOk={onOke}
      >
        <Form onFinish={onSubmit} ref={form}>
          <Form.Item {...defaultFormItemLayout} label="name">
            <input placeholder="name" />
          </Form.Item>
          <Form.Item {...defaultFormItemLayout} label="brand">
            <input placeholder="brand" />
          </Form.Item>
          <Form.Item {...defaultFormItemLayout} label="price">
            <input placeholder="price" />
          </Form.Item>
          <Form.Item {...defaultFormItemLayout} label="weight">
            <input placeholder="weight" />
          </Form.Item>
        </Form>
      </Modal>
    )
  },
)

export default ModalFormProduct
