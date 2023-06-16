import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const style = {
        "display" : "flex",
        "justify-content": "space-between"
    }
    const imgStyle = {
        "height" : "100px",
        "width" : "100px"
    }
  return (
    <div style={style}>
      <img src="/logo.jpeg" alt="logo"  style={imgStyle}/>
      <MenuIcon style={{"height" : "100px",
        "width" : "50px"}}/>
    </div>
  )
}

export default Navbar
