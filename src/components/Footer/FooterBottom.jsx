import { Box, Link, Typography } from "@mui/material"
import { FOOTER_TERMS } from "../../utils"

const style = {
  wrapperStyle: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: "80px ",
    gap: "30px",
    "@media (width > 780px)": {
      justifyContent: "center",
    },
  },
  termStyle: {
    color: "var(--colorWhite)",
  },
}

const FooterBottom = () => {
  return (
    <Box sx={style.wrapperStyle}>
      <Typography variant="h6" fontWeight="var(--semibold)">
        {new Date().getFullYear()} Hotel. All right reserved
      </Typography>
      {FOOTER_TERMS.map((term) => (
        <Link
          href={term.href}
          sx={style.termStyle}
          key={term.id}
          underline="hover"
        >
          {term.text}
        </Link>
      ))}
    </Box>
  )
}
export default FooterBottom
