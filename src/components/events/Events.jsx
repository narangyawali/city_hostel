import styles from "./events.module.css"

import {eventsList}from '../../data/data.js'

function Events() {
  return (<>
    <h1>Some Events Organized by us</h1>
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
  <div className={styles.single_event_container}>

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
