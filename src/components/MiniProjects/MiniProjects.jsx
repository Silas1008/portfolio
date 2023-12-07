import './MiniProjects.css'
import calculator from '../../assets/calculators.png';
import ball from '../../assets/ball.png'
import qrcode from '../../assets/qrcode.png'
import weather from '../../assets/weather.png'
import coding from '../../assets/coding.png';
import github from '../../assets/github.png';

const MiniProjects = () => {
  return (
    <div className='mini-projects'>
      <div className='project-one'>
        <div className='project-one-left'>
          <img src={calculator} alt=''/>
        </div>
        <div className='project-one-right'>
          <h1>Calculators-Mini Projects</h1>
          <p>
          "Discover a versatile suite of calculators on our app, offering systematic solutions for various needs. Calculate with precision using our standard calculators, monitor your health with the BMI calculator, plan your finances with the tip calculator, and explore the fun side with our love calculator. Your all-in-one tool for practical and playful calculations."
          </p>
          <div className='links'>
            <a href='https://calculators-inky.vercel.app/' className='link'>
              <img src={coding} alt='Coding Icon' />
              Website
            </a>
            <a href='https://github.com/Silas1008/calculators' className='link'>
              <img src={github} alt='GitHub Icon' />
              GitHub
            </a>
          </div>
        </div>
      </div>


      <div className='project-two'>
      <div className='project-two-left'>
        <img src={ball} alt=''/>
      </div>
      <div className='project-two-right'>
        <h1>Fast finger - Mini Projects</h1>
        <p>
        Experience the magic of our unique app where vibrant balls cascade, and with a simple tap, transform into musical notes on a virtual piano. Dive into a world of creativity as you compose melodic notes effortlessly. Embrace the joy of color and sound with our interactive and entertaining ball-to-note creation experience.
        </p>
        <div className='links'>
          <a href='https://ballgame-hrum.vercel.app/' className='link'>
            <img src={coding} alt='Coding Icon' />
            Website
          </a>
          <a href='https://github.com/Silas1008/ballgame' className='link'>
            <img src={github} alt='GitHub Icon' />
            GitHub
          </a>
        </div>
      </div>
    </div>

    <div className='project-three'>
    <div className='project-three-left'>
        <img src={qrcode} alt=''/>
      </div>
      <div className='project-three-right'>
        <h1>QR Code Generator - Mini Projects</h1>
        <p>
        Elevate your efficiency with our QR Code Generator app. Seamlessly create dynamic QR codes for websites, contacts, or custom information. Tailor your codes with diverse styles and colors. Whether for business or personal use, simplify data sharing and enhance connectivity. Unlock the power of instant information transfer with our user-friendly QR Code Generator
        </p>
        <div className='links'>
          <a href='https://qr-code-ten-wheat.vercel.app/' className='link'>
            <img src={coding} alt='Coding Icon' />
            Website
          </a>
          <a href='https://github.com/Silas1008/qrCode' className='link'>
            <img src={github} alt='GitHub Icon' />
            GitHub
          </a>
        </div>
      </div>
    
    </div>


    <div className='project-four'>
    <div className='project-four-left'>
        <img src={weather} alt=''/>
      </div>
      <div className='project-four-right'>
        <h1>Weather App - Mini Projects</h1>
        <p>
        Step into a world of weather precision with our intuitive Weather App. Stay informed with real-time forecasts, detailed conditions, and interactive maps. Personalize your experience with customizable locations and receive timely updates. Empower your day with accurate weather insights, making every plan seamless. Your go-to companion for weather confidence.
        </p>
        <div className='links'>
          <a href='https://weather-app-eight-beta-53.vercel.app/' className='link'>
            <img src={coding} alt='Coding Icon' />
            Website
          </a>
          <a href='https://github.com/Silas1008/weatherApp' className='link'>
            <img src={github} alt='GitHub Icon' />
            GitHub
          </a>
        </div>
      </div>
    
    </div>
    

    </div>
  );
};

export default MiniProjects;
