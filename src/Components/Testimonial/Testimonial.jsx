import React from 'react';
import './Testimonial.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {
   const clients =[
        {
            img: profilePic1,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis recusandae odio qui unde libero cupiditate excepturi id numquam corrupti, ullam exercitationem ex molestiae itaque hic atque. Quae nihil sed facilis."
        },
        {
            img: profilePic2,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis recusandae odio qui unde libero cupiditate excepturi id numquam corrupti, ullam exercitationem ex molestiae itaque hic atque. Quae nihil sed facilis."
        },
        {
            img: profilePic3,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis recusandae odio qui unde libero cupiditate excepturi id numquam corrupti, ullam exercitationem ex molestiae itaque hic atque. Quae nihil sed facilis."
        },
        {
            img: profilePic4,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis recusandae odio qui unde libero cupiditate excepturi id numquam corrupti, ullam exercitationem ex molestiae itaque hic atque. Quae nihil sed facilis."
        }
    ]

  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Expetional Work</span>
            <span>From me...</span>
            <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
            <div className="blur t-blur2" style={{ background: "var(--skyblue)" }}></div>
        </div>
        {/* slider */}
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
                {clients.map((clients, index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={clients.img} alt="" />
                                <span>{clients.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}

        </Swiper>
    </div>
  )
}

export default Testimonial