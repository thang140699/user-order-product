import React, { useEffect, useRef, useState } from 'react'
import { fake_class, User } from 'src/models/user'
import { Button, Table, TableProps } from 'antd'
import Page from '@components/Page'
import { UserApi } from '@apis/user'
import { useUserList } from '@hooks/user'
import ModalForm, { ModalFormMethod } from './components/ModalForm'

type UserPageProps = {}

const UserPage: React.FC<UserPageProps> = () => {
  const { loading, error, data, page, fetch } = useUserList()

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
  const modal = useRef<ModalFormMethod>(null)
  const onCreate = () => {
    modal.current?.setVisible(true)
  }
  const onFinished = () => {
    fetch()
  }
  return (
    <Page inner>
      <div className="view-create">
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

export default UserPage
