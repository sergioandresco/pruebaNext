import MenuNavigation from "../components/menu/NavBar"

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>

        <MenuNavigation />

        {children}
        
      </body>
    </html>
  )
}
