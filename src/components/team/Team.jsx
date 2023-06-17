import styles from "./team.module.css"
import { teamMembers } from "../../data/data"


function Team() {
  return (<>
  		<h1 id="teams">Our Teams</h1>
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
        <img className={styles.p_img} src={`/${props.data.img}`} alt="" />
        <p>{props.data.name}</p>
        <p>{props.data.post}</p>
        <div className={styles.team_contact}>
          <a href={props.data.fb}>
            <img className={styles.fbicon} src="/icons/fb.svg" alt="" />
            
          </a>
          <p style={{display:"inline"}}>Con</p>
        </div>
      </div>
    	
  </>)

}



export default Team

