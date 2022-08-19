import { useState } from "react"

function RatingSelect( { select }) {

    const [selected , setSelected] = useState(10);

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
  return (
    <div>

        <ul className="rating">
          <li>
              <input 
                type='radio'
                value='1'
                id='num1'
                name='rating'
                onChange={handleChange}
                checked={selected===1} />
                <label htmlFor="num1" > 1 </label>
          </li>

          <li>
              <input 
                type='radio'
                value='2'
                id='num2'
                name='rating'
                onChange={handleChange}
                checked={selected===2} />
                <label htmlFor="num2" > 2 </label>
          </li>
          <li>
              <input 
                type='radio'
                value='3'
                id='num3'
                name='rating'
                onChange={handleChange}
                checked={selected===3} />
                <label htmlFor="num3" > 3 </label>
          </li>
          <li>
              <input 
                type='radio'
                value='4'
                id='num4'
                name='rating'
                onChange={handleChange}
                checked={selected===4} />
                <label htmlFor="num4" > 4 </label>
          </li>
        </ul>
            
        
    </div>
  )
}

export default RatingSelect