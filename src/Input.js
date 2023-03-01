import React from 'react'

const Input = (props) => {
  return (
    <form
        className='searchForm'
        onSubmit={(e) => e.preventDefault()}
    >
        <label
            htmlFor='search'
            >SearchingPanel</label>
        <input
            autoFocus
            id='search'
            type='text'
            className='inputField'
            placeholder='Insert color name...'
            value={props.colorValue}
            onChange={(e) => props.setColorName(e.target.value)}
        />
    </form>
  )
}

export default Input
