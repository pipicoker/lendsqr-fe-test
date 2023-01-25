
import '../Styles/Users.css'

import { FiUsers } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { TbFileDatabase } from 'react-icons/tb';
import { GiDatabase } from 'react-icons/gi';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";


const Users = () => {
  return (
    <div>
      <div className='header'>
          <p className='heading'>Users</p>

          <section className='laptop-view'>
            <div className='container'>
                <div className="icon user">
                  <FiUsers />
                </div>
                  <p className='text'>users</p>
                  <p className='figure'>2,453</p>

            </div>
            <div className='container'>
                <div className="icon active">
                  <HiOutlineUserGroup />
                </div>
                  <p className='text'>active users</p>
                  <p className='figure'>2,453</p>

            </div>
            <div className='container'>
                <div className="icon loan">
                  <TbFileDatabase />
                </div>
                  <p className='text'>users with loans</p>
                  <p className='figure'>12,453</p>

            </div>
            <div className='container'>
                <div className="icon saving">
                  <GiDatabase />
                </div>
                  <p className='text'>users with savings</p>
                  <p className='figure'>102,453</p>

            </div>
        </section>
        
          <Swiper  
          slidesPerView={1.5}
        spaceBetween={5}
        freeMode={true}
        
         navigation
      // pagination={{ clickable: true }}
          
        
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        
        <section className='phone-view'>
          <SwiperSlide   >
                      <div className='container'>
                <div className="icon user">
                  <FiUsers />
                </div>
                  <p className='text'>users</p>
                  <p className='figure'>2,453</p>

            </div>
          </SwiperSlide>
            
          <SwiperSlide>
            <div className='container'>
                  <div className="icon active">
                    <HiOutlineUserGroup />
                  </div>
                    <p className='text'>active users</p>
                    <p className='figure'>2,453</p>

              </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='container'>
                <div className="icon loan">
                  <TbFileDatabase />
                </div>
                  <p className='text'>users with loans</p>
                  <p className='figure'>12,453</p>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='container'>
                <div className="icon saving">
                  <GiDatabase />
                </div>
                  <p className='text'>users with savings</p>
                  <p className='figure'>102,453</p>

            </div>
          </SwiperSlide>
            </section>
              
  
          
            
        
        </Swiper>
        
      </div>
      


      
    </div>
      
  )
}

export default Users