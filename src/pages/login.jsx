// import Input from '@/components/atoms/Input'
import React from 'react'
import { Button, Checkbox, Form, Input, Typography } from 'antd'
const { Title, Text, Paragraph } = Typography
const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
const LoginPage = () => {
  return (
    <div style={loginStyle.container}>
      <Form
        name='basic'
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        style={loginStyle.formStyle}
        layout='vertical'
      >
        <div style={{ margin: '2rem 0' }}>
          <Title level={3} style={{ textAlign: 'center' }}>
            Punten Bandung
          </Title>
          <Paragraph style={{ textAlign: 'center', width: '100%', margin: 'auto' }}>
            Sistem Manajemen Konten
          </Paragraph>
        </div>
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
LoginPage.woLayout = true

export default LoginPage

const loginStyle = {
  container: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#c4c4c4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formStyle: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: '5rem 8rem',
    maxWidth: 600,
    width: '100%'
  }
}
