import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

function MainBanner(){
  const mainBanners=[
    {id:1, src:`${process.env.PUBLIC_URL}/images/temp_topbanner01.png`, alt:'main banner1'},
    {id:2, src:`${process.env.PUBLIC_URL}/images/temp_topbanner02.png`, alt:'main banner2'},
    {id:3, src:`${process.env.PUBLIC_URL}/images/temp_topbanner03.png`, alt:'main banner3'},
    {id:4, src:`${process.env.PUBLIC_URL}/images/temp_topbanner04.png`, alt:'main banner4'},
  ]
  return(
    <section className="main-banner">
      <Swiper modules={[EffectFade, Autoplay]}
              effect="fade"
              fadeEffect={{crossFade:true}}
              autoplay={{delay:5000, disableOnInteraction:false}}
              loop={true}
              className="mySwiper2"
      >
        {
          mainBanners.map((banner,index)=>(
            <SwiperSlide key={banner.id}>
              <img src={banner.src} alt={banner.alt} className="mainbanner-img" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default MainBanner;