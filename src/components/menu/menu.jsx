import './public/stylemenu.css';
import Iconjoab from './public/iconjoab';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Menu (props) {
    const match = matchMedia('(min-width: 600px)');
    const changesize = mql => {
        if(mql.matches){
            return window.scroll(0,0);
        }else{
            return props.unmountSideBar();
        }
    }
    const sobremi = "<Yo/>"
    const conocimientos = "<Conocimientos/>"
    const Experiencia = "<Experiencia/>"
    const Contacto = "<contacto/>"
    return(
        <>  
            <div className="body-menu">
                <div className="icon-container">
                    <a href="#seccion-sobremi" className="container-selector-menu">
                        {sobremi}
                    </a>
                    <a href="#seccion-conocimientos" className="container-selector-menu">
                        {conocimientos}
                    </a>
                    <Iconjoab changeFunctionIcon={()=>changesize(match)}/>
                    <a href="#seccion-experiencia" className="container-selector-menu">
                        {Experiencia}
                    </a>
                    <a href="#seccion-contacto" className="container-selector-menu">
                        {Contacto}
                    </a>
                </div>
                <div className="Container-iconburger" onClick={()=>props.showSidebar()}>
                    <GiHamburgerMenu />
                </div>
            </div>
        </>
    )
}