import React from 'react'
import {Button, DatePicker} from "antd"
export default function AntdDemo(props) {
  return (
    <div className='container'>
        <DatePicker/>
        <Button size='large' type='primary' block="true">Button click</Button>
    </div>
  )
}
