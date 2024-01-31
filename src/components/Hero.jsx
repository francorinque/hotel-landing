import { Box, Button, Paper, Typography } from "@mui/material"
import heroImg from "../assets/hero.webp"

const style = {
  paperStyle: {
    height: "374px",
    widht: "100%",
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center 50%",
    borderRadius: "0px",
    display: "flex",
    alignItems: "center",
    justfifyContent: "center",
  },
  contentStyle: {
    padding: "20px",
    width: "100%",
    color: "var(--colorWhite)",
    display: "flex",
    flexDirection: "column",
    justfifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  titleStyle: {
    fontSize: "clamp(50px,2vw,70px)",
    textBalance: "balance",
    fontWeight: " var(--bold)",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "var(--colorWhite)",
    color: "var(--colorBrown)",
    fontWeight: "var(--semibold)",
    " &:hover": {
      backgroundColor: "#d4d4d4",
    },
  },
}
const Hero = () => {
  return (
    <Paper sx={style.paperStyle} id="inicio">
      <Box sx={style.contentStyle}>
        <Typography variant="h1" sx={style.titleStyle}>
          Nombre Del Hotel
        </Typography>
        <Button variant="contained" sx={style.buttonStyle}>
          Hacer Reserva
        </Button>
      </Box>
    </Paper>
  )
}
export default Hero
