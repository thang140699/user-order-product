import { Form, Input, Modal, FormInstance, DatePicker, Button } from 'antd'
import React, { useImperativeHandle, useRef, useState } from 'react'
import { ColDefaultProps, defaultFormItemLayout } from '@themes/styles'
import { generateId, User } from '@models/user'
import { on } from 'events'
import { UserApi } from '@apis/user'

type ModalFormProps = {
  onFinished: () => void
}

export type ModalFormMethod = {
  setVisible: (visible: boolean) => void
  setData: (data?: User) => void
}

const ModalForm = React.forwardRef<ModalFormMethod, ModalFormProps>(({ onFinished }, ref) => {
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
      // getVisible: () => visible,
    }
  })
  // forwardref ??
  const onSubmit = value => {
    const param = {
      first_name: value.first_name,
      last_name: value.last_name,
      gender: 1 as 0 | 1,
      birthday: '5/5/2000',
      email: value.email,
      address: value.address,
    }
    setLoading(true)
  }
  const onOK = () => {
    const param = {
      id: generateId(),
      first_name: form.current?.getFieldValue('first_name') ?? '',
      last_name: form.current?.getFieldValue('last_name') ?? '',
      gender: 1 as 0 | 1,
      birthday: form.current?.getFieldValue('birthday') ?? '',
      email: form.current?.getFieldValue('email') ?? '',
      address: form.current?.getFieldValue('address') ?? '',
      phone: form.current?.getFieldValue('phone') ?? '',
    }
    setLoading(true)
    UserApi.create({ input: param }).then(r => {
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
        <Form.Item {...defaultFormItemLayout} label="First Name">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item {...defaultFormItemLayout} label="Last Name">
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item {...defaultFormItemLayout} label="email">
          <Input placeholder="email" />
        </Form.Item>
        <Form.Item {...defaultFormItemLayout} label="phone">
          <Input placeholder="phone" />
        </Form.Item>
        <Form.Item {...defaultFormItemLayout} label="birthday">
          <DatePicker />
        </Form.Item>
        <Form.Item {...defaultFormItemLayout} label="address ">
          <Input placeholder="address" />
        </Form.Item>
      </Form>
    </Modal>
  )
})

export default ModalForm
