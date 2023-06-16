

import styles from './footer.module.css'
import logo from "../../assets/logo.jpeg"


function Footer() {
  return (
    <div>
      <h1>Footer</h1>
      <div className={styles.footer}>
        <Contact/>
			
      	<div className={styles.brand_logo}>
          <img className={styles.logo_img} src={logo} alt="" />
        </div>
				<h1 style={{color:"white"}}> FB </h1>
        <h3 style={{color:"white"}}>© 2023 City Hostel . All Rights Reserved.</h3>
				<h5>Developed With Love and Coffee by Naran Gyawali  &lt;/&gt; </h5>
      </div>
    </div>
  )
}

const Contact =()=>{

  return(<>
  		<div className={styles.contacts}>
        <div className={styles.card}>
          <p>ico</p>
          <h4>Phome</h4>
          <h5>+9779876543211</h5>
        </div>
        <div className={styles.card}>
          <p>ico</p>
          <h4>Address</h4>
          <h4>Sainamaina 02 Rupandehi </h4>
        </div>
        <div className={styles.card}>
          <p>ico</p>
          <h4>E mail</h4>
          <h4>mail@provider.com</h4>
        </div>
      </div>
  </>)
}


export default Footer