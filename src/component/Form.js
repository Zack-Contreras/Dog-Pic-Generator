import React from 'react';
import { Button } from 'react-mdl';

const Form = (props) => {
  return(
    <form className='formClass' onSubmit={props.breedHandler}>
      <input type='text' name='breed' placeholder='Type breed here...' />
      <Button raised colored ripple>Find Breed</Button>
    </form>
  );
}

export default Form;
