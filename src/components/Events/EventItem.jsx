import { Card, Grid, Typography } from "@mui/material"

import { customCard } from "../../utils/customStyles"

const style = {
  cardStyle: {
    height: "400px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "var(--colorWhite)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "100px",
    ...customCard,
  },
  cardTitleStyle: {
    flex: "0 1 100%",
    display: "flex",
    alignItems: "flex-end",
    fontWeight: "var(--bold)",
  },
}

const EventItem = ({ image, title, date }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          ...style.cardStyle,
          backgroundImage: `url(${image})`,
        }}
      >
        <Typography variant="h6" sx={style.cardTitleStyle}>
          {title}
        </Typography>
        <Typography paragraph>{date}</Typography>
      </Card>
    </Grid>
  )
}
export default EventItem
