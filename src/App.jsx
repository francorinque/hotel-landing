import { Container } from "@mui/material"
//components
import {
  Events,
  Hero,
  Recommended,
  Nav,
  Rooms,
  Services,
  Review,
  Footer,
} from "./components"
//styles
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@emotion/react"

const theme = createTheme({
  typography: {
    fontFamily: ["Onest", "sans-serif"].join(","),
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ padding: "0px" }}>
        <Nav />
        <Hero />
        <Recommended />
        <Rooms />
        <Events />
        <Services />
        <Review />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
