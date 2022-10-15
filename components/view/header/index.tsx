import { LinkBuilder, LinkBuilderInterface, LinkBuilderModel } from "../../builder/link";
import LogoSvg from "./svgLogo";
import { useState } from "react";

export default function  Header () {
  return <header>
        <Navbar />
         </header>
}

const headerNavData: LinkBuilderInterface[] = [
  LinkBuilderModel({ child: <LogoSvg />, style: "navbar-logo" }),
  LinkBuilderModel({ child: "About", style: "navbar-nav" }),
  LinkBuilderModel({ child: "Contact", style: "navbar-nav" }),
  LinkBuilderModel({ child: "Language", style: "navbar-nav" }),
]

function Navbar() {
  return <nav>
    <div className="navbar-container">
      <div className="flex justify-between items-center">
        <ul className="flex">
          {headerNavData.map((item: LinkBuilderInterface, index: number) => <li key={index} ><LinkBuilder linkBuilderData={item} /></li>)}
        </ul>

         <div className="navbar-action ">
          <HeaderDownloadButton/>
         </div>
      </div>
    </div>
  </nav>
}


function HeaderDownloadButton()
{
    const [hasMouseEntered, setHasMouseEntered] = useState(false);

  return     <button className="btn-nav " onPointerOver={() => setHasMouseEntered(true)} onPointerOut={() => setHasMouseEntered(false)}>
         <div className="btn-nav-bg"></div>
         <span className=""> Download</span>
            </button>
            
}





