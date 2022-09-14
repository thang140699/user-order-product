import { Form, Input, Modal, FormInstance, DatePicker, Button } from 'antd'
import React, { useImperativeHandle, useRef, useState } from 'react'
import { ColDefaultProps, defaultFormItemLayout } from '@themes/styles'
import { OrderApi } from '@apis/order'
import { orderId, Order } from '@models/order'

type ModalFormProps = {
  onFinished: () => void
}
export type ModalFormMethod = {
  setVisible: (visible: boolean) => void
  setData: (data?: Order) => void
}
const ModalFormOrder = React.forwardRef<ModalFormMethod, ModalFormProps>(({ onFinished }, ref) => {
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
      username: value.username,
      discount: value.discount,
      city: value.city,
      phone: value.phone,
      state: value.state,
      status: 1 as 0 | 1,
    }
    setLoading(true)
  }
  const onOK = () => {
    const param = {
      id: orderId,
      userName: form.current?.getFieldValue('userName') ?? '',
      discount: form.current?.getFieldValue('discount') ?? '',
      city: form.current?.getFieldValue('city') ?? '',
      phone: form.current?.getFieldValue('phone') ?? '',
      state: form.current?.getFieldValue('state') ?? '',
      status: 1 as 0 | 1,
    }
    setLoading(true)
    OrderApi.createOder({ input: param }).then(r => {
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
      onOk={onOK}
    >
      <Form onFinish={onSubmit} ref={form}>
        <Form.Item {...defaultFormItemLayout} label="userName">
          <input placeholder="userName" />
        </Form.Item>
        <Form.Item {...defaultFormItemLayout} label="discount">
          <input placeholder="discount" />
        </Form.Item>
        <Form.Item {...defaultFormItemLayout} label="city">
          <input placeholder="city" />
        </Form.Item>
        <Form.Item {...defaultFormItemLayout} label="phone">
          <input placeholder="phone" />
        </Form.Item>
        <Form.Item {...defaultFormItemLayout} label="state">
          <input placeholder="state" />
        </Form.Item>
      </Form>
    </Modal>
  )
})
export default ModalFormOrder
