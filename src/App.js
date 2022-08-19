import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStat from './components/FeedbackStat'
import {FeedbackProvider} from './context/FeedbackContext'
import AboutPage from './components/AboutPage'
function App() {

  // const [feedback, setfeedback] = useState(FeedbackData)

 
  return (
    <>
        <FeedbackProvider>
      < Header />
      <Router >
        <div className='container'>




          <FeedbackForm  />

          <FeedbackStat  />


          <FeedbackList  />







          <Routes>
            <Route path='/about' element={<AboutPage />}>   </Route>
          </Routes>


        </div>
      </Router>




      </FeedbackProvider>

    </>
  )
}

export default App