
import styles from "./home.module.css"
import logo from "../../assets/logo.jpeg"


import { Link } from "react-scroll"
import Typewriter from "typewriter-effect"

export default function Home() {
  return (<>
  	<div id="home" className={styles.container}>
        {/* <Typewriter 
        		onInit={(typewriter)=>{
              typewriter.typeString('Hello World form Naran')
              .callFunction(()=>{console.log("writing ");})
              .deleteAll()
              .start()					
							
            }}

            /> */}

    </div>

		<Writer/>
    <Nav/>
  </>
  )
}

const Writer =()=>{

  return(
    <div className={styles.writer}>
      <h1>
            <Typewriter
            	options={{strings:["We are City Hostel","A Home Away from Home","Comfort, Convenience, and Camaraderie",], autoStart:true, loop:true,}}
              />
              </h1>

    </div>
  )
}

const Nav=()=>{
  return(<>
  
  <nav  className={styles.toggle} >
		<div  className={styles.nav}>

    <div className={styles.imgContainer}>
      <img className={styles.img} src={logo} />
    </div>
    <div className={styles.sections}>
      <LinkTo to={"home"}/>
      <LinkTo to={"about"}/>
      <LinkTo to={"events"}/>
      <LinkTo to={"teams"}/>
      <LinkTo to={"partners"}/>
      <LinkTo to={"contact"}/>

    </div>
    </div>
  </nav>
  </>)
}


const LinkTo =(props)=>{

  return(<>
      <Link  to={props.to} spy={true} smooth={true} delay={0} > <h6 className={styles.nav_item}> {props.to}</h6> </Link>
  	
  </>)
}
