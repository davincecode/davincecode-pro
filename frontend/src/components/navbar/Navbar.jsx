import React, { useState, useEffect } from "react"
import { MenuItems } from './MenuItems'
import { GrMenu, GrClose } from 'react-icons/gr';
import "./navbar.scss"

import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'


function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  const closeNav = () => {
    setToggleMenu(false)
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])
 

  return (
    <>
      <nav onMouseLeave={ closeNav }>
      <div className='NavbarItems container'>
        <span className='navbar-logo'><Link to="/">DAVINCECODE</Link></span>
          <div className="menu-icon" onClick={ toggleNav } >
            { toggleMenu ? <GrClose className='close-btn'/> : <GrMenu className='open-btn'/> }
        </div>
        <ul className={toggleMenu ? 'nav-menu__active' : 'nav-menu'}>
        {(toggleMenu || screenWidth > 768) && (MenuItems.map((item) => (
            <li key={ item.title }>
              <Link to={ item.link } className={ user ? item.cName : item.bName }>
                { item.title }
              </Link>
            </li>
          ))) }
          </ul>
        <ul>
        {user ? (
          <div className='login-btn' onClick={onLogout}>
              <li>
                <FaSignOutAlt /> Logout
              </li>
            </div>
        ) : (
            <>
              <div className='login-register'>
                <li>
                  <Link to='/login'>
                    <FaSignInAlt /> Login
                  </Link>
                </li>
                <li>
                  <Link to='/register'>
                    <FaUser /> Register
                  </Link>
                </li>
            </div>
          </>
        )}
      </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar