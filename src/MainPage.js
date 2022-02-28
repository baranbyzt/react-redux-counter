
// we are importing our module css
import style from './style/Our.module.css'


const MainPage = () => {

    let arttir = () => {
        alert('arttir')
    }
    let eksilt = () => {
        alert('eksilt')
    }

    return (  
      
         <div className={style.wrapper}>
      
  <div>
  <p className={style.textSection}>Counter: 12</p>

<div className={style.innerDive}>
<button className={style.buttonSection} onClick={arttir}>+</button>
<button className={style.buttonSection} onClick={eksilt}>-</button>
</div>
  </div>
         </div>
        
    );
}
 
export default MainPage;