import { createContext, useState  , useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {


    const [feedback,setfeedback] = useState([]);

    // update feedback Check 

    useEffect(() => {
      fetchFeedback();

    }, [])

    const fetchFeedback = async () => {

      const response = await fetch(`http://localhost:5000/feedback`)

      const data = await response.json()

      setfeedback(data);



    }
    
    const [feedbackEdit , setfeedbackEdit] = useState([{
      item : {} ,
      edit : false 
    }])

    const deleteFeedback = async ( id) => {
      if(window.confirm(' Are You Sure To Delete Feedback ? ')) 
      {
          await fetch(`http://localhost:5000/feedback/${id}`, {
            method :'DELETE',
            
          })


            setfeedback(feedback.filter(( item )=> item.id !== id))
      }

    } 

    const addFeedback = async (newFeedback) => {
      const response = await fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      })
  
      const data = await response.json()
  
      setfeedback([data, ...feedback])
    }

    const editFeedback = (item) => {

      setfeedbackEdit({
        item ,
        edit : true 
      })

    }
    return (
            <>
              <FeedbackContext.Provider value={ {
                feedback , 
                deleteFeedback , 
                addFeedback ,
                editFeedback ,
                feedbackEdit
                }}>
                    {children}
            </FeedbackContext.Provider>
            </>
          )

}

export default FeedbackContext 