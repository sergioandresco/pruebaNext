import SubMenuInventario from "../../components/menu/submenus/MenuCategoria"
import "../../assets/scss/StylesPages/inventario.css"

export default function TiendaLayout({children}){
    return(

        <div className="container-inventario">

            {children}

            <div>
                <SubMenuInventario />
            </div>
            

            
        
        </div>

    )
}