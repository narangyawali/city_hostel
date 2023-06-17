
import styles from './about.module.css'
import staff from '../../assets/hostel_staff.jpeg'

import AOS from 'aos'
import "aos/dist/aos.css"

function About() {

    AOS.init()
  return (<>
  <h1 id='about'>About</h1>
  <div className={styles.container}>
    <div className={styles.about_left}>
      <div className={styles.about_card_bg}></div>
      <div className={styles.about_card}>
        <img className={styles.about_img} src={staff}  alt="" />
      </div>

    </div>

    <div className={styles.about_right} style={{textAlign:'left'}}>
      <h1>About Us</h1>
      <div data-aos="fade-left">
      <p>
        Welcome to our exceptional hostel, where comfort and community converge to create an unforgettable stay. Immerse yourself in the vibrant atmosphere of our well-designed accommodations, where you can relax and connect with fellow travelers. Our dedicated team is committed to providing a memorable experience, ensuring your time with us is filled with laughter, adventure, and a sense of belonging.
      </p>
      </div>
      <div data-aos="fade-left">
				<p>
          Step into our remarkable hostel, where hospitality takes center stage. Discover a haven of warmth and charm, where modern amenities and thoughtfully designed spaces cater to your every need. Embrace the spirit of exploration as you forge new connections, share stories, and create memories that will last a lifetime. Your perfect getaway starts here.
        </p>
      </div>
      <div data-aos="fade-left">
				<p>
          Experience the epitome of hospitality at our great hostel, where comfort meets camaraderie. With stylish and cozy accommodations, vibrant communal spaces, and a friendly staff, we create a welcoming atmosphere for travelers from all walks of life. Discover a home away from home, where memorable experiences and lifelong friendships are made.
        </p>
      </div>

      

    </div>
  </div>

  </>  )
}

export default About