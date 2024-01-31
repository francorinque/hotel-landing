import { Container } from "@mui/material"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

import { ROOMS_DATA } from "../../utils/index"

//components
import RoomItem from "./RoomItem"

const style = {
  wrapperStyle: {
    backgroundColor: "var(--colorBrown)",
    padding: "20px",
  },
}

const Rooms = () => {
  return (
    <Container sx={style.wrapperStyle}>
      <Swiper
        style={{ height: "auto" }}
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
      >
        {ROOMS_DATA.map((room) => (
          <SwiperSlide key={room.id}>
            <RoomItem {...room} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
export default Rooms
