import styles from "./events.module.css"

import {eventsList}from '../../data/data.js'

function Events() {
  return (<>
    <h1>Some Events Organized by us</h1>
    <div className={styles.container}>

      {eventsList.map((e)=>{
        return(
        <div key={e.desc}>
          
        		<SingleEvent  desc={e.desc}/>
        </div>
        )
      })}

    </div>
  </>
  )
}


const SingleEvent =(props)=>{

  return(<>
  		<div className={styles.event_card} style={{background:"url:()"}}>

      <div className={styles.description}>
					{props.desc}
      </div>
      </div>
  </>)
}


export default Events
