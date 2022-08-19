import React, { useContext, useState , useEffect } from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect' 
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';
function FeedbackForm( ) {

    const [text , setText] =useState();
    const [rating , setRating]  = useState();

    const {addFeedback , feedbackEdit } = useContext(FeedbackContext);

      useEffect(() => {
        if(feedbackEdit.edit===true)
        {
          setText(feedbackEdit.item.text)
          setRating(feedbackEdit.item.rating) 
        }
        

      }, [feedbackEdit])
      
    const handlerOnCHange = (e) => {

        setText(e.target.value) 
        // console.log(text)

    }



    const  handlerOnSubmit = (e) => {

          e.preventDefault() 

          const newFeedback = {
            text ,
            rating 
          }

          addFeedback(newFeedback);

          //console.log(newFeedback)
          // setText(' ');



    }

  return (
    <>
        <Card > 
        <form onSubmit={handlerOnSubmit}>
            <h2> How Would You rate Our Service  ? </h2>   
             {/* Rating Select  */}
             <RatingSelect select={ (rating) => setRating(rating) } />
             
            <div className="input-group">
            <input type='text' onChange={handlerOnCHange} placeholder=' Write Something ' />
            <button type='submit' className='btn btn-primary'> Send </button>
            </div>
          
        </form>
        </Card>
    
    
        


    
    </>
  )
}

export default FeedbackForm