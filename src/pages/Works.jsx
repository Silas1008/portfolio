import '../styles/Works.css'
import coding from '../assets/coding.png';
import apps from '../assets/apps.png';
import curve from '../assets/curve.png'
import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <div className='works'>
      <div className='container'>

      <div className='coding-container'>
       <img src={coding} alt=''/>
       <Link to='/website' style={{textDecoration: "none", color: "black"}}><h1>Websites</h1></Link>
      </div>

      <div className='app-container'>
      <img src={apps} alt=''/>
      <Link to='/miniprojects'style={{textDecoration: "none", color: "black"}}>
      <h1>Mini Projects</h1>
      </Link>
      
      </div>

      <div className='curve-container'>
      <img src={curve} alt=''/>
      <Link to='/framer' style={{textDecoration: "none", color: "black"}}>
      <h1>Designs</h1>
      </Link>
     
      </div>
      </div>
    </div>
  )
}

export default Works
