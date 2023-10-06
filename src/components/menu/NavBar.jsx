import Link from "next/link"
import "../../assets/scss/StylesComponents/navBar.css"

export default function MenuNavigation(){
    return(
        <nav className="container-menu">

          <h1>Este es la simulacion de un menu</h1>

          <ul>

            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/login">Login</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/inventario">Inventario</Link>
            </li>

          </ul>

        </nav>
    )
}