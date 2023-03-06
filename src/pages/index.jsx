import { Button } from 'antd'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

export default function Home() {
  const [value, setValue] = useState('')
  return (
    <div>
      Beranda ini
      <div>
        {' '}
        <ReactQuill theme='snow' value={value} onChange={setValue} />
      </div>
      <Button onClick={() => console.log(value)}>get State</Button>
    </div>
  )
}
