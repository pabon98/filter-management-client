import React from 'react'
import {AiOutlineReload} from 'react-icons/ai'

export const TopHeading = ({children}) => {
  return (
    <div>
        <h3 style={{ margin:'15px 20px', textAlign:'left'}} className="shadow-sm p-3 mb-5 bg-body rounded">
        {children} <AiOutlineReload/>
      </h3>
    </div>
  )
}
