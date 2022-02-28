
// we are importing our module css
import style from './style/Our.module.css'

import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const MainPage = () => {

  const counter = useSelector(state => state.myCounter.counter);
const dispatch = useDispatch();


    let arttir = () => {
      dispatch({ type: 'INCREMENT_COUNT' })
    }
    let eksilt = () => {
      dispatch({ type: 'DECREMENT_COUNT' })
    }

    return (  
      
         <div className={style.wrapper}>
      
  <div>
  <p className={style.textSection}>Counter: {counter} </p>

<div className={style.innerDive}>
<button className={style.buttonSection} onClick={arttir}>+</button>
<button className={style.buttonSection} onClick={eksilt}>-</button>
</div>
  </div>
         </div>
        
    );
}
 
export default MainPage;