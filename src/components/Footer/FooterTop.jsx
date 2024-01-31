import {
  Box,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material"
import XIcon from "@mui/icons-material/X"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { FOOTER_LINKS } from "../../utils"

const style = {
  aboutStyle: {
    display: "grid",
    gridTemplateColumns: "1fr ",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    "@media (width > 768px)": {
      gridTemplateColumns: "max-content 2px 400px",
    },
  },
  aboutLogoStyle: {
    textDecoration: "none",
    color: "var(--colorWhite)",
    fontWeight: "var(--bold)",
    fontSize: "30px",
  },
  dividerStyle: {
    background: "var(--colorWhite)",
  },
  titleStyle: {
    fontWeight: "var(--semibold)",
  },
  socialIconStyles: {
    color: "var(--colorWhite)",
  },
  linkStyle: {
    margin: "10px 0",
    color: "var(--colorWhite)",
  },
}

const FooterTop = () => {
  return (
    <Grid container spacing={7}>
      {/* sobre nosotros */}
      <Grid item xs={12} md={7}>
        <Box sx={style.aboutStyle}>
          <Typography
            variant="h6"
            component="a"
            href="#inicio"
            sx={style.aboutLogoStyle}
          >
            LOGO
          </Typography>
          <Divider orientation="vertical" sx={style.dividerStyle} />
          <Box>
            <Typography variant="h6" sx={style.titleStyle}>
              Sobre Nosotros
            </Typography>
            <Typography paragraph variant="body2">
              Lorem ipsum dolor sit amet consectetur. Eget est diam pharetra
              porttitor malesuada facilisi. Dui lorem eget morbi diam. Sit justo
              vitae venenatis est nunc vel tellus auctor. Odio tincidunt tempor
              hendrerit nunc felis aliquet urna mollis quam.
            </Typography>
          </Box>
        </Box>
      </Grid>
      {/* links */}
      <Grid item xs={12} md={2}>
        <Typography variant="h6" sx={style.titleStyle}>
          Enlaces rápidos
        </Typography>
        <List>
          {FOOTER_LINKS.map((link) => (
            <ListItem disablePadding key={link.id}>
              <Link href={link.href} sx={style.linkStyle} underline="hover">
                {link.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
      {/* redes */}
      <Grid item xs={12} md={2}>
        <Box>
          <IconButton sx={style.socialIconStyles} href="#">
            <XIcon />
          </IconButton>
          <IconButton sx={style.socialIconStyles} href="#">
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Typography component="a" variant="h6">
          correo@gmail.com
        </Typography>
      </Grid>
    </Grid>
  )
}
export default FooterTop
