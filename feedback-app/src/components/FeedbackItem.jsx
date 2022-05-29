// import {useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({item, handleDelete}) {
     //component state
  //const[rating, setRating] = useState(7)
 // const[text, setText] = useState('This is the default text set by the State')

  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className='close'>
            <FaTimes color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackItem
