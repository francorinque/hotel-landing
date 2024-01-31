import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import AccountBoxIcon from "@mui/icons-material/AccountBox"

//utils
import { NAV_ITEMS, SETTINGS_ITEMS } from "../utils/index"
//hooks
import { useNav } from "../hooks/useNav"

const style = {
  appBarStyle: {
    boxShadow: "none",
    color: "var(--colorWhite)",
  },
  toggleStyle: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
  },
  menuLinksStyle: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    gap: "20px",
    justifyContent: "center",
  },
  linkStyle: {
    my: 2,
    display: "block",
    color: "var(--colorWhite)",
    fontWeight: "var(--regular)",
  },
  logoStyle: {
    mx: 2,
    fontFamily: "monospace",
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
    fontWeight: "var(--bold)",
  },
}

const Nav = () => {
  const {
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    isScrolled,
    linkClicked,
    handleClickLink,
  } = useNav()

  return (
    <AppBar
      position="fixed"
      sx={{
        ...style.appBarStyle,
        backgroundColor: isScrolled ? "var(--colorBrown)" : "transparent",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#inicio"
            sx={{
              ...style.logoStyle,
              display: { xs: "none", md: "flex" },
            }}
          >
            LOGO
          </Typography>

          {/* icono hamburger */}
          <Box sx={style.toggleStyle}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {NAV_ITEMS.map((item) => (
                <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{item.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            noWrap
            component="a"
            href="#inicio"
            sx={{
              ...style.logoStyle,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            LOGO
          </Typography>
          {/* links de navegacion desktop */}
          <Box sx={style.menuLinksStyle}>
            {NAV_ITEMS.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                onClick={() => handleClickLink(item.href)}
                sx={{
                  ...style.linkStyle,
                  textDecoration:
                    linkClicked === item.href ? "underline" : "none",
                }}
              >
                {item.text}
              </Link>
            ))}
          </Box>
          {/* icono usuario */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Cuenta">
              <IconButton onClick={handleOpenUserMenu} color="inherit">
                <AccountBoxIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {SETTINGS_ITEMS.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Nav
