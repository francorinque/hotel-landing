import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import { customCard } from "../../utils/customStyles"

const style = {
  wrapperStyle: {
    margin: "30px 0",
    padding: "0 20px",
  },
  titleStyle: {
    margin: "30px 0",
    fontSize: "30px",
    fontWeight: "var(--semibold)",
  },
  cardStyle: {
    padding: "10px",
    width: "100%",
    borderRadius: "25px",
    cursor: "pointer",
    userSelect: "none",
    ...customCard,
  },
  imageStyle: {
    height: "190px",
    borderRadius: "30px",
  },
  contentStyle: {
    textAlign: "center",
  },
  priceStyle: {
    color: "var(--colorBrown)",
    fontSize: "14px",
  },
}

const RecommendedItem = ({ title, data }) => {
  return (
    <Box sx={style.wrapperStyle}>
      <Typography variant="h2" sx={style.titleStyle}>
        {title}
      </Typography>
      <Swiper
        style={{ height: "380px" }}
        loop={true}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <Button className="swiper-button-prev">prev</Button>
        {data.map((item) => (
          <SwiperSlide key={item.id} style={{ width: "180px" }}>
            <Card sx={style.cardStyle}>
              <CardMedia
                component="img"
                image={item.image}
                alt={`Producto recomendado: ${item.name}`}
                sx={style.imageStyle}
              />
              <CardContent sx={style.contentStyle}>
                <Typography variant="h6" fontWeight={600} fontSize="25px">
                  {item.name}
                </Typography>
                <Typography paragraph sx={style.priceStyle}>
                  <strong>${item.price}</strong>
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
        <Button className="swiper-button-next">next</Button>
      </Swiper>
    </Box>
  )
}
export default RecommendedItem
