import Menu from './menu/menu';
import BodyWeb from './bodyweb/bodyweb';
import "./menu/public/stylemenu.css";
import {useState,useRef,useEffect} from "react";

export default function FullPage(){
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const detectSidebar = useRef();

    const activeSidebar = () => {
        setToggleSidebar(!toggleSidebar);
    };

    const validateSideBar = () => {
        if(toggleSidebar===false){
            const stylesoff = () =>{
                detectSidebar.current.style.width="0px";
                detectSidebar.current.style.color="transparent";
                detectSidebar.current.style.textShadow="0 0 0 #62fddb00"
            }
           return stylesoff();
        }else if(toggleSidebar){
            const stylesOn = () =>{
                detectSidebar.current.style.width="140%";
                detectSidebar.current.style.color="#ffffff";
                detectSidebar.current.style.textShadow="0 0 15px #00ffc8"
            }
           return stylesOn();
        }
    }

    const offSideBar = () => {
        return setToggleSidebar(false);
    }
    
    useEffect(()=>{
        validateSideBar()
    },[validateSideBar]);

    const intro = "<inicio/>"
    const sobremi = "<Yo/>"
    const conocimientos = "<Conocimientos/>"
    const Experiencia = "<Experiencia/>"
    const Contacto = "<contacto/>"
    return(
        <>
            <div className="full-menu-container">
                <Menu
                showSidebar={()=>activeSidebar()}
                unmountSideBar={()=>offSideBar()}

                />
                <div ref={detectSidebar} className="side-bar-container">
                    <div className="side-bar">
                        <ol>
                            <a href="#seccion-intro" onClick={()=>offSideBar()}>
                                {intro}
                            </a>
                        </ol>
                        <ol>
                            <a href="#seccion-sobremi" onClick={()=>offSideBar()}>
                                {sobremi}
                            </a>
                        </ol>
                        <ol>
                            <a href="#seccion-conocimientos" onClick={()=>offSideBar()}>
                                {conocimientos}
                            </a>
                        </ol>
                        <ol>
                            <a href="#seccion-experiencia" onClick={()=>offSideBar()}>
                                {Experiencia}
                            </a>
                        </ol>
                        <ol>
                            <a href="#seccion-contacto" onClick={()=>offSideBar()}>
                                {Contacto}
                            </a>
                        </ol>
                    </div>
                </div>
            </div>
            <BodyWeb/>
        </>
    )
}