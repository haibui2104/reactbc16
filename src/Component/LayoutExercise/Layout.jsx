import React from 'react'
import Content from './Content'
import HeaderEx from "./HeaderEx"
import Navigation from './Navigation'

export default function Layout() {
  return (
      //Component content must be contained in a tag which covers all
  
        <section>
            <div> Layout creating</div>
            <HeaderEx/>
            <div className='d-flex' style={{height: '75vh'}}>
                <div className='w-25 h-100'>
                <Navigation />
                </div>
                <div className='w-75 h-100'>
                <Content />
                </div>
            </div>
            
        </section>
  )
}
