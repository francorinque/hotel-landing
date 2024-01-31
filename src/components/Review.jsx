import { Button, Container, Typography } from "@mui/material"

const style = {
  wrapperStyle: {
    padding: "50px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
  },
  titleStyle: {
    fontSize: "var(--subtitleSize)",
    fontWeight: "var(--semibold)",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "var(--colorBlack)",
    width: "230px",
    "&:hover": {
      backgroundColor: "#282828",
    },
  },
}

const Review = () => {
  return (
    <Container sx={style.wrapperStyle}>
      <Typography variant="h2" sx={style.titleStyle}>
        Califica tu experiencia
      </Typography>
      <Button variant="contained" sx={style.buttonStyle}>
        Calificar
      </Button>
    </Container>
  )
}
export default Review
