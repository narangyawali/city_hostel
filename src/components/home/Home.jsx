
import styles from "./home.module.css"
import logo from "../../assets/logo.jpeg"

export default function Home() {
  return (<>
  	<div className={styles.container}></div>
    <Nav/>
  </>
  )
}

const Nav=()=>{
  return(<>
  
  <nav >
		<div className={styles.nav}>

    <div className={styles.imgContainer}>
      <img className={styles.img} src={logo} />
    </div>
    <div className={styles.sections}>
      <a href="">home</a>
      <a href="">About</a>
      <a href="">events</a>
      <a href="">events</a>
      <a href="">events</a>
      <a href="">contact us</a>

    </div>
    </div>
  </nav>
  </>)
}