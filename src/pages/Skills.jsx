import '../styles/Skills.css'
import html from '../assets/html.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';
import photoshop from '../assets/photoshop.png';
import illustrator from '../assets/illustrator.png';
import dimensions from '../assets/dimension.png';

const Skills = () => {
  return (
    <div className='skills'>
      <div>
      <p>Aspiring to contribute as a Front-End Designer, I specialize in creating visually captivating web interfaces using HTML, CSS, and JavaScript, coupled with expertise in React. Proficient in design tools such as Adobe Photoshop, Illustrator, and Dimensions, I seamlessly blend creativity with technical proficiency. My portfolio reflects a commitment to crafting aesthetically pleasing and user-friendly designs. With a keen eye for detail and a passion for staying abreast of design trends, I am poised to enhance digital experiences through innovative and responsive front-end solutions. Eager to leverage my skills in a collaborative team environment to create visually striking and impactful web designs.</p>
      </div>

      <div className='skills-links'>
      <img src={html} alt=''/>
      <img src={css} alt=''/>
      <img src={js} alt=''/>
      <img src={photoshop} alt=''/>
      <img src={illustrator} alt=''/>
      <img src={dimensions} alt=''/>
      </div>
    </div>
  )
}

export default Skills
