import MenuNavigation from "../components/menu/NavBar"
import "../assets/scss/StylesPages/home.css"
import { Roboto } from 'next/font/google'

export const metadata = {
  title: "Pagina Inicio",
  description: "Este es el Home del aplicativo"
}

const robotoFont = Roboto({
  fontSize: "3em",
  fontWeight: "500",
  subsets: ["latin"],
  weight: ["300", "500"]
})

export default function RootLayout({ children }) {
 return (
    <html lang="en">

      <body className={robotoFont.className}>

        <div className="container-1">
          <MenuNavigation />
        </div>
        
        {children}
        
      </body>

    </html>
  )
}
