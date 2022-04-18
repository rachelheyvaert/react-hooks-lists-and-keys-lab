import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const linksAll = links.map((link)=> {
  return <a key={link} href={"#" + link}> {link}</a>
})
  return <nav>
    {linksAll} 
</nav>;
}

export default NavBar;
