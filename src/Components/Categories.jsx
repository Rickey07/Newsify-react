import React from 'react'
import { useNavigate } from 'react-router'

export default function Categories() {
    const navigate = useNavigate();

    const valueChange = (e) => {
        navigate(`${e.target.value}`);
    }
  return (
    <>
    <h3 className='text-center my-3'>Select From Below Categories</h3>
    <select class="form-select" aria-label="Default select example" onChange={valueChange}>
          <option value="/">General</option>
          <option value="/sports">sports</option>
          <option value="/business">business</option>
          <option value="/health">health</option>
          <option value="/science">science</option>
    </select>
    </>
  )
}
