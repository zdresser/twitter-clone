import React from 'react'

interface iSidebarLink {
  text: string
  active?: boolean
  Icon: any
}

const SidebarLink: React.FC<iSidebarLink> = ({ text, Icon, active }) => {
  return (
    <div
      className={`hoverAnimation flex items-center justify-center space-x-3 text-xl text-[#d9d9d9] xl:justify-start ${
        active && 'font-bold'
      }`}
    >
      <Icon className="h-7 text-white" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  )
}

export default SidebarLink
