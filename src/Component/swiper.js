import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import {Autoplay} from "swiper/modules";
import SwiperProductCard from "./swiperProductCard";
function SwiperCompo() {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            <SwiperSlide>
                <SwiperProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperProductCard />
            </SwiperSlide>
        </Swiper>
    );
}

export default SwiperCompo;