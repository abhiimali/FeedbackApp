import { useContext } from 'react'
import { FaEdit, FaTimes} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'

const FeedbackItem = ( { item } ) => {  

    const {deleteFeedback} = useContext(FeedbackContext) 
    const {editFeedback} = useContext(FeedbackContext);
    const {feedback} = useContext(FeedbackContext);
    
  return (
    <Card> 

       <div className='num-display'> {item.rating} </div>
        <button className='close' onClick={ () => deleteFeedback(item.id)}>
         <FaTimes color='red' ></FaTimes>
        </button>
        <button className='edit' onClick={ () => editFeedback(item.id)}>
         <FaEdit color='purple' ></FaEdit>
        </button>
       <div className='text-display'>{item.text} </div>

   
     
    </Card>
  )
}

export default FeedbackItem