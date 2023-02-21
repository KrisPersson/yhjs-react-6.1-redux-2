import './Greet.css'

import { useSelector } from 'react-redux'

function Greet() {

    const name = useSelector((state) => {return state.name})


    return (
        <p className='greet'>Hello { name }!</p>
    )
}

export default Greet