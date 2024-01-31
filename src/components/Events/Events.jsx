import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material"
import { EVENTS_DATA } from "../../utils"
import EventItem from "./EventItem"

const style = {
  wrapperStyle: {
    padding: "80px 20px",
  },
  titleStyle: {
    fontSize: "var(--subtitleSize)",
    fontWeight: "var(--semibold)",
    marginBottom: "40px",
  },
}
const Events = () => {
  return (
    <Container sx={style.wrapperStyle} id="eventos">
      <Typography variant="h2" sx={style.titleStyle}>
        Eventos
      </Typography>

      <Grid container spacing={6} justifyContent={"space-between"}>
        {EVENTS_DATA.map((event) => (
          <EventItem key={event.id} {...event} />
        ))}
      </Grid>
    </Container>
  )
}
export default Events
