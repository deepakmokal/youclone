import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Searchbar.css';

function Searchbar( {onTerm} ) {
  const [term, setTerm] = useState('')


  //Handlers  
  const handleSearchInput = (e) => {
    setTerm(e.target.value)
  }

  const handleSearchSubmit = () => {
    onTerm(term);
  }

  return (
    <>
        <div className='search-form d-flex justify-content-center mt-4 mb-4'>
           <input className='search-input w-50' type="text" 
            placeholder='Search videos'
            onChange = {handleSearchInput}
            value = {term} />
           <button type='submit'
            onClick={handleSearchSubmit}
            className='search-btn btn btn-light ml-3'>Search</button>
         </div>

         
         
    </>
  )
}

export default Searchbar