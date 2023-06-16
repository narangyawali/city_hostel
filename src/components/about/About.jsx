
import styles from './about.module.css'
import staff from '../../assets/hostel_staff.jpeg'


function About() {
  return (<>
  <h1>About</h1>
  <div className={styles.container}>
    <div className={styles.about_left}>
      <div className={styles.about_card_bg}></div>
      <div className={styles.about_card}>
        <img className={styles.about_img} src={staff}  alt="" />
      </div>

    </div>

    <div className={styles.about_right} style={{textAlign:'left'}}>
      <h1>About Us</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci asperiores vero non eveniet quo, earum a quaerat cum recusandae fugiat! Tenetur velit ducimus voluptatum corrupti doloribus dicta quod! Iure, autem.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci labore itaque hic, molestias delectus atque, voluptate nam vitae similique accusantium velit mollitia tempora alias optio. Nam repellendus sit debitis eius.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium, corporis tempora laudantium aliquam a alias! Ut numquam, placeat voluptates necessitatibus animi molestias sed qui nulla officia! Repellat, voluptatibus ipsa.</p>

      
    </div>
  </div>

  </>  )
}

export default About