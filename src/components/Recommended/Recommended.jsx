import { Container, Typography } from "@mui/material"
import { RECOMMENDED_DATA } from "../../utils/index"

//components
import RecommendedItem from "./RecommendedItem"

const style = {
  sectionStyle: {
    padding: "50px 0 ",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  titleStyle: {
    fontSize: "var(--subtitleSize)",
    fontWeight: "var(--semibold)",
    textAlign: "center",
  },
}

const Recommended = () => {
  return (
    <Container sx={style.sectionStyle} id="menu">
      <Typography variant="h2" sx={style.titleStyle}>
        Tus recomendaciones
      </Typography>
      <RecommendedItem title="Almuerzos" data={RECOMMENDED_DATA.Almuerzos} />
      <RecommendedItem
        title="Desayunos y Cenas"
        data={RECOMMENDED_DATA["Desayunos_Cenas"]}
      />
      <RecommendedItem title="Postres" data={RECOMMENDED_DATA.Postres} />
      <RecommendedItem title="Bebidas" data={RECOMMENDED_DATA.Bebidas} />
    </Container>
  )
}
export default Recommended
