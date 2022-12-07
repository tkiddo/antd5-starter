import React, { useState } from 'react'
import { Button, Radio, Checkbox, Modal, Tooltip } from 'antd'

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Button type="primary" onClick={() => setModalOpen(true)}>
        primary button
      </Button>
      <Radio.Group>
        <Tooltip title="提示">
          <Radio value={1}>A</Radio>
        </Tooltip>
      </Radio.Group>
      <Checkbox>Checkbox</Checkbox>
      <Modal
        title="modal"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
      >
        content
      </Modal>
    </>
  )
}

export default Home
