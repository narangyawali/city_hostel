import styles from "./events.module.css"

import {eventsList}from '../../data/data.js'
import AOS from 'aos'
import "aos/dist/aos.css"
AOS.init()

function Events() {
  return (<>
    <h1 d id="Events">Some Events Organized by us</h1>
    <div className={styles.container}>

      {eventsList.map((e)=>{
        return(
        <div key={e.desc}>
          
        		<SingleEvent  data={e}/>
        </div>
        )
      })}

    </div>
  </>
  )
}


const SingleEvent =(props)=>{

  return(<>
  <div data-aos="fade-up" className={styles.single_event_container}>

  		<div className={styles.event_card} style={{backgroundImage:`url(/events/${props.data.img})`}}>
      </div>
				<h3>{props.data.name}</h3>
      <div className={styles.description}>
					{props.data.desc}
      </div>
  </div>
  </>)
}


export default Events
