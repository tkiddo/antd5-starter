import React from 'react'
import { Button, Radio } from 'antd'

const Home = () => {
  return (
    <>
      <Button type="primary">primary button</Button>
      <Radio.Group>
        <Radio value={1}>A</Radio>
      </Radio.Group>
    </>
  )
}

export default Home
