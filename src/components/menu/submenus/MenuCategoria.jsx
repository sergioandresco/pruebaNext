import Link from "next/link"
import "../../../assets/scss/StylesComponents/menuCategoria.css"

export default function SubMenuInventario(){
    return(
        <nav className="container-submenu">

          <h1>Este es la simulacion del submenu de inventarios</h1>

          <ul>

            <li>
              <Link href="/">Inventario</Link>
            </li>

            <li>
              <Link href="/categorias">Categorias</Link>
            </li>

            <li>
              <Link href="/productos">Productos</Link>
            </li>

          </ul>

        </nav>
    )
}