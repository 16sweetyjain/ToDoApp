import React from 'react';

export default function TodoForm(){

    return(
        <form onSubmit={e=>e.preventDefault()}>
            <label htmlFor='description'>Description</label>
            <input type='text' id='description'/>
            <button>Add</button>
        </form>
    );
}
