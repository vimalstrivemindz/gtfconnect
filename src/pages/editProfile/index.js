import React from 'react'
import SettingChat from '../../Component/chatLeft/SettingChat'
import Sidebar from '../../Component/sidebar'
import EditProfileContent from './EditProfileContent'

const EditProfile = () => {
  return (
    <div className="d-flex">
    <Sidebar />
    <SettingChat title="Settings" />
    <EditProfileContent />
  </div>
  )
}

export default EditProfile