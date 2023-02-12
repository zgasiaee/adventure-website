import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//style
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  window.addEventListener('resize', showButton)

  useEffect(() => {
    showButton()
  }, [])

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.iconContainer}>
        <h3>TRVL</h3>
        <i className="fa fa-plane"></i>
      </div>

      <div
        className={styles.bars}
        onClick={() => setOpen(!open)}
        style={{ opacity: show ? '1' : '0' }}
      >
        {open ? (
          <i className="fa fa-times"></i>
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </div>

      <div
        className={open ? styles.openContainer : styles.itemsContainer}
        style={{
          opacity: show && !open ? '0' : '1',
          display: show && !open ? 'none' : 'flex',
        }}
      >
        <Link to="/" className={open ? styles.smallLink : styles.link}>
          Home
        </Link>
        <Link to="/services" className={open ? styles.smallLink : styles.link}>
          Services
        </Link>
        <Link to="/" className={open ? styles.smallLink : styles.link}>
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Navbar
