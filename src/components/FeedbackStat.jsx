import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStat( ) {

        const {feedback} = useContext(FeedbackContext)

    let Average = feedback.reduce((acc,curr) => {
 
            return acc + curr.rating 

    } ,0) / feedback.length ; 

        Average = Average.toFixed(1);
    
  return (
    <div className="feedback-stats"> 

            <h4> {feedback.length} Reviews </h4>
            <h4> Average rating : {isNaN(Average) ? 0 : Average }</h4>


    </div>
  )
}

export default FeedbackStat