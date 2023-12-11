import Gray from '../../assets/gray.png'
import coding from '../../assets/coding.png';
import Crush from '../../assets/crush.png'
import './Framer.css'

const Framer = () => {
  return (
    <div className='framer'>
      <div className='project-one'>
        <div className='project-one-left'>
          <img src={Gray} alt=''/>
        </div>
        <div className='project-one-right'>
          <h1>Gray Bank</h1>
          <p>
          Elevating financial experiences with exclusive services, sophistication, and unwavering trust in every transaction
          </p>
          <div className='links'>
            <a href='https://trusting-fact-997301.framer.app/' className='link'>
              <img src={coding} alt='Coding Icon' />
              Website
            </a>
          </div>
        </div>
      </div>


      <div className='project-two'>
      <div className='project-two-left'>
        <img src={Crush} alt=''/>
      </div>
      <div className='project-two-right'>
        <h1>Git Crush</h1>
        <p>
        A fizzy burst of refreshment, blending fruity flavors to create a delightful, thirst-quenching beverage for all occasions
        </p>
        <div className='links'>
          <a href='https://gracious-outcomes-949153.framer.app/' className='link'>
            <img src={coding} alt='Coding Icon' />
            Website
          </a>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Framer
