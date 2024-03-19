import { useState , useEffect } from 'react'

import styles from "./testimony.module.css"
import { testimonyList } from "../../data/data"


import SwiperCore , { Autoplay , Pagination } from "swiper"
import {Swiper , SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"


function Testimony() {
  SwiperCore.use([Autoplay])
  return (<>
		<div className={styles.testimony_bg}>
  	<h1 id="partners" >What Our Well Wishers Say</h1>
    <Swiper
    	modules={[Pagination]}
      loop={true}
      autoplay={true}
      slidesPerView={1}
      spaceBetween={50}
      speed={2000}
    >
		{testimonyList.map((e)=>{
      return(
  	<SwiperSlide>
			<Card data={e}/>
    </SwiperSlide>
      )
    })}


    </Swiper>
		</div>
		<div className={styles.partners_container}>
  <Partners/>			
    </div>

  </>)
}




const Card = (props)=>{
  return(<>
  		<div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.img_container}>
            <img className={styles.p_img} src={`/${props.data.img}`} alt="" />
          </div>
          <h4 style={{marginTop:30}}>{props.data.name}</h4>
          <h4>{props.data.role}</h4>
        </div>
        <div className={styles.right}>
					<p className={styles.thoughts} >{props.data.thoughts}</p>	
        </div>
      </div>
  </>)
}




const Partners =()=>{

const [slides , setSlides] = useState(1)

useEffect(() => {
  console.log(window.innerWidth);
  if (window.innerWidth < 500) {
    setSlides(2)
  }
  else{
   	setSlides(3) 
  }

 
}, [])


const partners=["ac","ismt","ki","ps","ss","mm"]

  return(<>
  
  	<h1 style={{margin:"20px "}}>Our Partners</h1>

    <Swiper
    	modules={[Pagination]}
      loop={true}
      autoplay={true}
      slidesPerView={ slides }
      spaceBetween={50}
      speed={1500}
    >
			{partners.map((e)=>{
				return(
				<div className={styles.partner} key={Math.random()}>
        <SwiperSlide >
         
					<img className={styles.c_logo} src={`/partners/${e}.png`} alt="" />
        </SwiperSlide>
        </div>)
      })}

     
    </Swiper>
  </>)
}

export default Testimony
