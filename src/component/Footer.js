import React from 'react'

//style
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.column}>
        <h1>Join the Adventure newsletter to recive our best vacation deals</h1>
        <p>You can unsubscribe at any time</p>
        <div>
          <input
            className={styles.input}
            type="email"
            placeholder="Your Email"
          />
          <button className={styles.submit}>Subscribe</button>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <h3>About Us</h3>
          <span>How it Works</span>
          <span>Testimonials</span>
          <span>Careers</span>
          <span>Investors</span>
          <span>Terms of Service</span>
        </div>

        <div className={styles.column}>
          <h3>Contact Us</h3>
          <span>Contact</span>
          <span>Support</span>
          <span>Destinations</span>
          <span>Sponsorships</span>
        </div>

        <div className={styles.column}>
          <h3>Videos</h3>
          <span>Submit Video</span>
          <span>Ambassadors</span>
          <span>Agency</span>
          <span>Influencer</span>
        </div>

        <div className={styles.column}>
          <h3>Social Media</h3>
          <span>Instagram</span>
          <span>Youtube</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      </div>

      <div className={styles.iconBar}>
        <div className={styles.iconContainer}>
          <h3>TRVL</h3>
          <i className="fa fa-plane"></i>
        </div>

        <div className={styles.itemsContainer}>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-youtube"></i>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
