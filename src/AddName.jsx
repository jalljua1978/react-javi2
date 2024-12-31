
import { useState } from 'react'

export const AddName = ( {onNewName} ) => {

    const [inputValue, setInputValue] = useState('') ;

    const onInputChange = (event) => {
        setInputValue ( event.target.value );        
        onNewName ( event.target.value );    
    }

    const onSubmit = (event) => {
        event.preventDefault();                     
        onNewName (inputValue.trim());
        console.log(inputValue);
        setInputValue('');
        
    }


    return (
        <form onSubmit = { onSubmit }>         
            <input 
                type="text"
                placeholder ="Introduce tu nombre"
                value = {inputValue}
                onChange={ onInputChange }
            /> 
        </form>
    ) 

}