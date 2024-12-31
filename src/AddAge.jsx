import { useState } from 'react'

export const AddAge = ( {onNewAge} ) => {

    const [inputValue, setInputValue] = useState('') ;

    const onInputChange = (event) => {
        setInputValue ( event.target.value );        
        onNewAge ( event.target.value );    
    }

    const onSubmit = (event) => {
        event.preventDefault();                     
        onNewAge (inputValue.trim());
        console.log(inputValue);
        setInputValue('');
        
    }


    return (
        <form onSubmit = { onSubmit }>         
            <input 
                type="text"
                placeholder ="Introduce tu edad"
                value = {inputValue}
                onChange={ onInputChange }
            />
        </form>
    ) 

}