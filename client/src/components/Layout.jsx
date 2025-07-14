import React from 'react'
import Sidebar from './Sidebar'

function Layout({children, showSidebar=false}) {
  return (
    <div>
      {showSidebar && <Sidebar/>}
      <div>
        <Navbar/>
        <main className='flex overflow-y-auto'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
