import styles from "./team.module.css"
import { teamMembers } from "../../data/data"

import photo from "../../assets/teams/bidur.jpg"

function Team() {
  return (<>
  		<h1>Our Teams</h1>
      <div className={styles.container}>
        {teamMembers.map((e)=>{

          return(<div key={Math.random()}>

          	<TeamCard key={e.name} data={e} />
          </div>
          )
        })}


      </div>

  </>
  )
}

const TeamCard=(props)=>{
	
  return(<>
  		<div className={styles.card}>
        <img className={styles.p_img} src={photo} alt="" />
        <p>{props.data.name}</p>
        <p>{props.data.post}</p>
        <div>
          <a href={props.data.fb}>fb</a>
          <p style={{display:"inline"}}>Con</p>
        </div>
      </div>
    	
  </>)

}



export default Team

