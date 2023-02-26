import { SocialItems } from './SocialItems'
import "./socials.scss"

function Socials() {
  return (
    <>
      <div className="social-container">
        { SocialItems.map((item, index) => (
          <ul key={index}>
            <li className="social-items">
              <a href={ item.link } target="_blank" rel="noreferrer">
                <img src={ item.cName } alt={ item.title }/>
              </a>
            </li>
          </ul>
        )) }
      </div>
    </>
  )
}

export default Socials;