import './Form.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { submit } from '../../actions/formActions'


function Form() {

    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    function handleChange(event) {
        const value = event.target.value
        setInput(value)
    }

    function handleDispatch(event) {
        event.preventDefault()
        dispatch(submit(input)) 
    }

    return (
        <form >
            <input onChange={ handleChange } type="text" placeholder="Type your name" />
            <button onClick={ () => handleDispatch(event) }>Submit</button>
        </form>
    )
}

export default Form