import React, { useState } from 'react'

export const AddCategory = ({onNewValue}) => {
  const [inputValue, setinputValue] = useState('')

  const onInputChange = ( {target} ) => {
    console.log(target.value)
    setinputValue(target.value)
  }

  const onSubmit = (event) => {

    event.preventDefault()
    if (inputValue.trim().length <= 1) {
      return
    }
    console.log(inputValue)
    // setcategory(category =>[inputValue, ...category])
    onNewValue(inputValue.trim())
    setinputValue('')
  }
  return (
    <>

      <form onSubmit={onSubmit} action="">
        <input 
          type="text" 
          placeholder='CATEGORY'
          value={inputValue} 
          onChange={onInputChange}
          
        /> 
      </form>

    </>
  )
}
