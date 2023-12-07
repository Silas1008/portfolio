import React from 'react';
import mood from '../../assets/moodboard.jpg';
import coding from '../../assets/coding.png';
import './Websites.css';
import caseFile from '../../assets/case-file.png';
import github from '../../assets/github.png';
import cryptobuy from '../../assets/cryptobuy.png';

const Websites = () => {
  return (
    <div className='websites'>
      <div className='sage'>
        <div className='sage-left'>
          <img src={mood} alt='' />
        </div>
        <div className='sage-right'>
          <h1>Sage</h1>
          <p>
            Rooted in the ancient land of Lebanon, adds an extra layer of cultural richness to its
            narrative. By sourcing pure olive oil from this historical region, the venture not only
            embraces a legacy of two centuries but also taps into the authentic essence of Lebanese
            craftsmanship and tradition. Lebanon, known for its centuries-old olive groves and
            expertise in olive oil production, provides a unique geographical and cultural backdrop
            that further enhances the brand's story.
          </p>
          <div className='links'>
            <a href='https://sage-email.vercel.app/' className='link'>
              <img src={coding} alt='' />
              Website
            </a>

            <a href='https://sage-case-study.vercel.app/' className='link'>
              <img src={caseFile} alt='' />
              Case File
            </a>

            <a href='https://github.com/Silas1008/sage' className='link'>
              <img src={github} alt='' />
              GitHub
            </a>
          </div>
        </div>
      </div>


      <div className='cryptobuy'>
       <div className='cryptobuy-left'>
          <img src={cryptobuy} alt='' />
        </div>
        <div className='cryptobuy-right'>
          <h1>CryptoBuy</h1>
          <p>
          Cryptobuy is your go-to platform for real-time cryptocurrency updates. Easily track prices, rankings, and trends with our user-friendly interface and intuitive charts. Our integrated buying feature ensures seamless transactions, empowering both beginners and seasoned traders to make informed decisions and stay ahead in the dynamic crypto market.
          </p>
          <div className='links'>
            <a href='https://cryptobuy-two.vercel.app/' className='link'>
              <img src={coding} alt='' />
              Website
            </a>

            <a href='https://github.com/Silas1008/cryptobuy' className='link'>
              <img src={github} alt='' />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Websites;
