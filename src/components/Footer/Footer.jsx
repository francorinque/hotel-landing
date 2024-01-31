import { Container } from "@mui/material"
//components
import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

const style = {
  wrapperStyle: {
    backgroundColor: "var(--colorBrown)",
    padding: "50px 20px",
    color: "var(--colorWhite)",
    marginTop: " 40px",
  },
}

const Footer = () => {
  return (
    <Container sx={style.wrapperStyle}>
      <FooterTop />
      <FooterBottom />
    </Container>
  )
}
export default Footer
