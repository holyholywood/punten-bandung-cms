import React from 'react'
import { Input as AntdInput } from 'antd'
const Input = ({
  helperText,
  name,
  label,
  register,
  required = false,
  errMessage = 'Field ini tidak boleh kosong',
  type = 'text',
  styleOpt = { rounded: false, size: 'md', variant: '' },
  errors,
  ...rest
}) => {
  return <> {errors && <AntdInput status={errors && 'error'} />}</>
}

export default Input
