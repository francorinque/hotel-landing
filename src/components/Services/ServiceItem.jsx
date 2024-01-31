import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { customCard } from "../../utils/customStyles"

const style = {
  cardStyle: {
    height: "300px",
    display: "flex",
    flexDirection: "column",
    userSelect: "none",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "20px",
    ...customCard,
  },
  cardImgStyle: {
    height: "200px",
    width: "200px",
    borderRadius: "50%",
  },
  cardContentStyle: {},
  cardTitleStyle: {
    fontWeight: "var(--semibold)",
  },
}

const ServiceItem = ({ id, title, image }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card height="400px" sx={style.cardStyle}>
        <CardMedia
          component="img"
          height={"100px"}
          image={image}
          alt={`Ofrecemos el servicio: ${title}`}
          sx={style.cardImgStyle}
        />
        <CardContent sx={style.cardContentStyle}>
          <Typography variant="h6" sx={style.cardTitleStyle}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default ServiceItem
