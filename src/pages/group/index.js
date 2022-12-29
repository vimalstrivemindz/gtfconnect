import React from 'react'
import ChatContent from '../../Component/chatContent';
import ChatLeft from '../../Component/chatLeft';
import Sidebar from '../../Component/sidebar';

const Group = () => {
  return (
    <div className='d-flex'>
    <Sidebar />
    <ChatLeft title="Group" />
    <ChatContent />
  </div>
  )
}

export default Group;