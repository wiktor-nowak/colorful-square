import React from 'react'

const Box = ({colorName}) => {

    return (
        <section
            className='displayBox'
            style={{backgroundColor: colorName}}>
        </section>
  )
}

export default Box
