

import styles from './footer.module.css'
import logo from "../../assets/logo.jpeg"


function Footer() {
  return (
    <div>
      <h1>Footer</h1>
      <div id='contact' className={styles.footer}>
        <Contact/>
			
      	<div className={styles.brand_logo}>
          <img className={styles.logo_img} src={logo} alt="" />
        </div>
          {/* <img className={styles.footer_fb} src="/icons/fb.svg" alt="" />  */}
				<h1 style={{color:"white"}}> 
         </h1>
        <h3 style={{color:"white", margin:"15px"}}>© 2023 City Hostel . All Rights Reserved.</h3>
				<h5 style={{color:"white"}}>Developed With Love and Coffee by Naran Gyawali  &lt;/&gt; </h5>
      </div>
    </div>
  )
}

const Contact =()=>{

  return(<>
  		<div className={styles.contacts}>
        <div className={styles.card}>
          <img className={styles.img_contact} src="/icons/ph.svg" alt="" /> 
          <div>

          <h4>Phone</h4>
          <h5>+9779876543211</h5>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.img_contact} src="/icons/lo.svg" alt="" /> 
          <div>

          <h4>Address</h4>
          <h4>Sainamaina 02 Rupandehi </h4>
          </div>
        </div>
        <div className={styles.card}>
          <img className={styles.img_contact} src="/icons/em.svg" alt="" /> 
          <div>

          <h4>E mail</h4>
          <h4>mail@provider.com</h4>
          </div>
        </div>
      </div>
  </>)
}


export default Footer