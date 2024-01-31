import { useEffect } from "react"
import { useState } from "react"

export const useNav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [linkClicked, setLinkClicked] = useState("/")

  // menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  // escuchar el scroll
  const handleScroll = () => {
    const scrolled = window.scrollY > 0
    setIsScrolled(scrolled)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  //escuchar link clickeado
  const handleClickLink = (href) => {
    setLinkClicked(href)
  }

  return {
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    isScrolled,
    linkClicked,
    handleClickLink,
  }
}
