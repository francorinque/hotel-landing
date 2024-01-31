import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { v4 as uuidv4 } from "uuid"

const style = {
  cardStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "var(--colorWhite)",
    height: "400px",

    "@media (min-width:600px)": {
      flexDirection: "row",
    },
  },
  imageStyle: {
    height: "200px",
    "@media (min-width:600px)": {
      height: "100%",
    },
  },
  cardContentStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    textAlign: "center",
  },
  paragraphStyle: {
    textBalance: "pretty",
    fontSize: "14px",
    lineHeight: 1.5,
  },
  buttonStyle: {
    backgroundColor: "var(--colorWhite)",
    color: "var(--colorBrown)",
    width: "230px",
    marginInline: "auto",
    fontWeight: "var(--semibold)",
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
}

const RoomItem = ({ name, image, paragraphs }) => {
  return (
    <Card sx={style.cardStyle}>
      <CardMedia
        component="img"
        image={image}
        alt={`Foto de la habitación: ${name} para reservar`}
        sx={style.imageStyle}
      />
      <CardContent sx={style.cardContentStyle}>
        <Typography variant="h3" fontWeight={600} fontSize="35px">
          {name}
        </Typography>

        {paragraphs.map((p) => (
          <Typography paragraph sx={style.paragraphStyle} key={uuidv4()}>
            {p}
          </Typography>
        ))}
        <Button sx={style.buttonStyle} variant="contanied">
          Reservar
        </Button>
      </CardContent>
    </Card>
  )
}
export default RoomItem
