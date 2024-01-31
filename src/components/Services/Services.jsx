import { Container, Grid, Typography } from "@mui/material"
import { SERVICES_DATA } from "../../utils"

//components
import ServiceItem from "./ServiceItem"

const style = {
  wrapperStyle: {
    padding: "50px 20px",
  },
  titleStyle: {
    fontSize: "var(--subtitleSize)",
    fontWeight: "var(--semibold)",
    marginBottom: "40px",
  },
}

const Services = () => {
  return (
    <Container sx={style.wrapperStyle} id="servicios">
      <Typography variant="h2" sx={style.titleStyle}>
        Servicios
      </Typography>
      <Grid container spacing={5}>
        {SERVICES_DATA.map((service) => (
          <ServiceItem key={service.id} {...service} />
        ))}
      </Grid>
    </Container>
  )
}
export default Services
