import "./hero.scss";
// import { Link } from 'react-router-dom';

function Hero() {

  return (
    <>
      <div className="hero-image">
        <div className="hero-container container">

          <div className='wrapper-left'>
            <h1>RESPONSIVE, MODERN, SEO OPTIMIZED WEBSITES</h1>
            <p>Let's make your website stand out!</p>
            <div className='button-container'>
              <a href="#intro">
                <button className="btn">
                GET STARTED
              </button>
            </a>
            </div>
          </div>
          
          <div className='wrapper-right'>
            <div className='skewer'>
              {/* <img src={ smallLeft } alt="front-mockup" className='skewer__image1' />
              <img src={ smallRight } alt="front-mockup"  className='skewer__image2'/>
              <img src={ mockup } alt="front-mockup"  className='skewer__image3'/> */}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Hero;