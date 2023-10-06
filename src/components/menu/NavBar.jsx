import Link from "next/link"

export default function MenuNavigation(){
    return(
        <nav>

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

          </ul>

        </nav>
    )
}