import "./public/styleBodyWeb.css";
import { Parallax as OtherParallax} from "react-parallax";
import {useEffect,useState} from "react";
import IntroFondo from "./public/fondoMenuWeb.jpg"
import BearImg from "./public/bearoldschoolweb.jpg";
import BeerImg from "./public/lupulozabeerweb.jpg";
import BgWhiteLetters from "./public/fondowebwhite.jpg";
import CodeImg from "./public/code-2434271.jpg";
import CasetImg from "./public/ilustracionservicio.jpg";
import BrandImg from "./public/snakePoisonweb.jpg";
import MiLogoDegreade from "./public/miLogoDegrade.png";
import MiLogoDegradeInverse from "./public/miLogoDegradeInverse.png";
import Pokedex from "./public/Pokedex.jpg";
import Trivia from "./public/Trivia.jpg";
import HomeWorkCalendar from "./public/landingTasks.jpg";
import BackEndIMDB from "./public/backendimdb.jpg";
import BackEndTrello from "./public/backendtrello.jpg";
import OlasAltasPsyco from "./public/OlasAltasPsyco.png";
import OlasAltas from "./public/OlasAltas.png";
import Delivery from "./public/DeliveryIso.png";
import TuDesayuno from "./public/TuDesayunoLogo.png";
import MangaFever from "./public/MangaFeverLogo.png";
import Masonry from "./tecanimation/tecanimations";
import Jelomi from "./public/Jelomi.png";
import ProductJelomi from "./public/ProductJelomi.jpg";
import ProductOlas from "./public/ProductOlas.jpg";
import { Parallax, ParallaxBanner, useController } from 'react-scroll-parallax';
import {IoLogoWhatsapp} from "react-icons/io";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import CardAnimated from "./CardsAnimate";
import TypeWriteAnimate from "./typewriteeffect";
AOS.init({
    duration: 700,
    mirror:true,
    delay:0
  });

export default function BodyWeb(){
    const open = "<";
    const close = "/>";
    const {parallaxController} = useController();
    const [sizeimgknowledge, SetSizeimgknowledge] = useState()

    useEffect(()=>{
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    },[parallaxController])

    useEffect(()=>{
        window.scroll(0,0);
    },[])

    useEffect(()=>{
        const mediaQueri = window.matchMedia('(max-width: 575.98px)');

        const bodywebChangeSize = (mql) => {
            if(mql.matches){
               return SetSizeimgknowledge("350px")
            }else{
                return SetSizeimgknowledge("100%")
            }
        }

        mediaQueri.addListener(bodywebChangeSize);
        bodywebChangeSize(mediaQueri);
    },[])

    const dataWebProjects = [
        {
            tittle:"Concept Pokedex",
            description:"(Pre alfa pokedex)",
            bacgroundImg:Pokedex,
            link:"https://bypokedex.netlify.app"
        },
        {
            tittle:"Landing Calendario",
            description:"landing page servicio de calendario",
            bacgroundImg:HomeWorkCalendar,
            link:"https://mytaskscheck.netlify.app"
        },
        {
            tittle:"Trivia",
            description:"Juego de trivias",
            bacgroundImg:Trivia,
            link:"https://tripingtrivia-joabmedel.netlify.app"
        },
        {
            tittle:"Backend IMDB",
            description:"(backend clon servicio imdb)",
            bacgroundImg:BackEndIMDB,
            link:"https://github.com/JoabMedel/FinalProyect"
        },
        {
            tittle:"Backend Trello",
            description:"(backend clon servicio de trello)",
            bacgroundImg:BackEndTrello,
            link:"https://github.com/JAlejandroMG/Django-TrelloClone"
        }
    ]
    const notify = () => {
        toast.dark("Correo enviado exitosamente",{
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const notifyError = () => {
        toast.error("Oops... Ocurrio un problema", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const sendEamil = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_jzwr4vp', 'template_4yq614l', event.target, 'user_O89vwg5FHVbmPhShVgTPJ')
            .then((result)=>{
                notify();
            },(error) => {
                notifyError();
            });
    }


    return(
        <>
                <ParallaxBanner
                    layers={[{image: IntroFondo, amount: 0.5}]}
                    style={{
                        height:"100vh"
                    }}
                >
                    <div className="overlay-intro-section" id="seccion-intro">
                        <div className="Container-Tittle">
                            <div data-aos="fade-rigth">
                                <TypeWriteAnimate />
                            </div>
                            <p className="p-subtittle-joab" data-aos="fade-rigth" data-aos-delay="900">Desarrollador web e ilustrador digital</p>
                        </div>
                        <div className="Container-footer-intro">
                            <div className="Social-Media">
                                <a href="https://www.instagram.com/medeljoab/" target="_blank" rel="noreferrer">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xmlSpace="preserve" className="color-icons-media">
                                        <path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48h192c61.76,0,112,50.24,112,112V352z"/>
                                        <path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>
                                        <circle cx="393.6" cy="118.4" r="17.056"/>
                                    </svg>
                                </a>
                                <a href="https://github.com/JoabMedel" target="_blank" rel="noreferrer">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve" fill="currentColor" className="color-icons-media">
                                        <path d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"/> 
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/JoabMedel-artista-digital-101846844965777" target="_blank" rel="noreferrer">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xmlSpace="preserve" className="color-icons-media">
                                        <path d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h192V336h-64v-80h64v-64c0-53.024,42.976-96,96-96h64v80h-32c-17.664,0-32-1.664-32,16v64h80l-32,80h-48v176h96c35.296,0,64-28.704,64-64V64C512,28.704,483.296,0,448,0z"/>
                                    </svg>
                                </a>
                                <a href="https://www.pinterest.com.mx/boiler_joab5555/" target="_blank" rel="noreferrer">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.977 511.977" fill="currentColor" xmlSpace="preserve" className="color-icons-media">
                                        <path d="M262.948,0C122.628,0,48.004,89.92,48.004,187.968c0,45.472,25.408,102.176,66.08,120.16c6.176,2.784,9.536,1.6,10.912-4.128c1.216-4.352,6.56-25.312,9.152-35.2c0.8-3.168,0.384-5.92-2.176-8.896c-13.504-15.616-24.224-44.064-24.224-70.752c0-68.384,54.368-134.784,146.88-134.784c80,0,135.968,51.968,135.968,126.304c0,84-44.448,142.112-102.208,142.112c-31.968,0-55.776-25.088-48.224-56.128c9.12-36.96,27.008-76.704,27.008-103.36c0-23.904-13.504-43.68-41.088-43.68c-32.544,0-58.944,32.224-58.944,75.488c0,27.488,9.728,46.048,9.728,46.048S144.676,371.2,138.692,395.488c-10.112,41.12,1.376,107.712,2.368,113.44c0.608,3.168,4.16,4.16,6.144,1.568c3.168-4.16,42.08-59.68,52.992-99.808c3.968-14.624,20.256-73.92,20.256-73.92c10.72,19.36,41.664,35.584,74.624,35.584c98.048,0,168.896-86.176,168.896-193.12C463.62,76.704,375.876,0,262.948,0z"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="All-rights-reserved">©2024 Derechos Reservados Joab Medel.</div>
                        </div>
                    </div>
                </ParallaxBanner>
                <div className="sobremi-container" id="seccion-sobremi">
                    <OtherParallax style={{position: 'relative'}} bgImage={IntroFondo} strength={700}>
                        <h3 className="tittle-sobremi-container">ACERCA DE MI</h3>
                    </OtherParallax>
                    <div className="Container-sobremi-parrafo">
                        <p data-aos="fade-right">
                        Que tal mi nombre es Joab Medel, soy un apasionante programador Web e ilustrador digital.Desde niño me sentí atraído por todo el ámbito tecnológico y creativo que conllevaba la creación de un contenido. Esto dio margen conforme el tiempo a ir investigando y poniendo en práctica lo ya aprendido, encontrando mis vocaciones.
                        Estudie en academlo la carrera de Ciencias de la computación y Desarrollo Web Full Stack, a la par que fui tomando una serie de cursos y diplomados para diseño grafico enfocado a la ilustración.
                        He trabajado en algunos proyectos para negocios así como también personales y en equipo. Me gusta investigar e ir innovando al respecto.
                        </p>
                    </div>
                    <div className="Teaser-container">
                        <Parallax className="container-img-sobremi" y={[-40,40]}>
                            <img src={BearImg} alt="BearOldSchool" loading="lazy"/>
                        </Parallax>
                        <div className="container-lema" data-aos="fade-rigth">
                            Creando identidad y esencia para forjar una grata experiencia de usuario.
                        </div>
                        <Parallax className="container-img-sobremi" y={[-40,40]}>
                            <img src={BeerImg} alt="Lupulosa" loading="lazy"/>
                        </Parallax>
                    </div>
                    <div>
                        <div className="skill-tittle-container">
                            <span data-aos="fade-left">{open}</span>
                            <h4 className="skill-tittle" data-aos="fade-left">SKILLS</h4>
                            <span data-aos="fade-left">{close}</span>
                        </div>
                        <div className="tecnologies-skills-container" data-aos="fade-right">
                            <Masonry />
                        </div>
                    </div>
                </div>
                <div className="container-knowledge" id="seccion-conocimientos">
                    <OtherParallax style={{position: 'relative'}} bgImage={BgWhiteLetters} strength={700}>
                        <h3 className="tittle-knowledge-container">CONOCIMIENTOS</h3>
                    </OtherParallax>
                    <div className="container-intro-knowledge">
                        <p data-aos="fade-up">
                            Según vamos adquiriendo conocimiento, las cosas no se hacen más comprensibles, sino más misteriosas.
                        </p>
                    </div>
                    <div className="my-knowledge-container">
                        <div className="container-tittle-text-fullstack">
                            <div className="tittle-container-knowledge" data-aos="zoom-in">
                                <span>{open}</span>
                                <h4>DESARROLLO WEB FULL STACK</h4>
                                <span>{close}</span>
                            </div>
                            <p data-aos="fade-right">
                                Desarrollo a la medida tanto de páginas como apps web, cumpliendo así cualquier tipo de exigencia para las funcionalidades que se demanden.
                            </p>
                        </div>
                        <ParallaxBanner 
                            className="knowledge-img-size"
                            layers={[{image: CodeImg, amount: 0.3}]}
                            style={{
                                height:sizeimgknowledge
                            }}
                        >
                            <div className="container-overlay-image-knowledge"></div>
                        </ParallaxBanner>
                    </div>
                    <div className="my-knowledge-container-reverse">
                        <div className="container-tittle-text-fullstack">
                            <div className="tittle-container-knowledge" data-aos="zoom-in">
                                <span>{open}</span>
                                <h4>ILUSTRACION DIGITAL</h4>
                                <span>{close}</span>
                            </div>
                            <p data-aos="fade-right">
                                Creación de ilustraciones digitales completas y adaptadas a cualquier tipo de formato para lograr escalar más tu proyecto.
                            </p>
                        </div>
                        <ParallaxBanner 
                            className="knowledge-img-size"
                            layers={[{image: CasetImg, amount: 0.25}]}
                            style={{
                                height:sizeimgknowledge
                            }}
                        >
                            <div className="container-overlay-image-knowledge"></div>
                        </ParallaxBanner>
                    </div>
                    <div className="my-knowledge-container">
                        <div className="container-tittle-text-fullstack">
                            <div className="tittle-container-knowledge" data-aos="zoom-in">
                                <span>{open}</span>
                                <h4>IDENTIDAD</h4>
                                <span>{close}</span>
                            </div>
                            <p data-aos="fade-right">
                                Elaboracion de logotipos para cualquier tipo de prospecto, generando identidad en tu marca.
                            </p>
                        </div>
                        <ParallaxBanner 
                            className="knowledge-img-size"
                            layers={[{image: BrandImg, amount: 0.3}]}
                            style={{
                                height:sizeimgknowledge
                            }}
                        >
                            <div className="container-overlay-image-knowledge"></div>
                        </ParallaxBanner>
                    </div>
                    <Parallax className="config-milogo-degrade" y={[-80,80]}>
                        <img src={MiLogoDegreade} alt="JoabMedel" loading="lazy"/>
                    </Parallax>

                    <Parallax className="config-milogo-degrade-Inverse" y={[-80,80]}>
                        <img src={MiLogoDegradeInverse} alt="JoabMedelOther" loading="lazy"/>
                    </Parallax>

                </div>
                <div className="Container-Experiencia" id="seccion-experiencia">
                    <OtherParallax style={{position: 'relative'}} bgImage={IntroFondo} strength={700}>
                        <h3 className="tittle-sobremi-container">EXPERIENCIA</h3>
                    </OtherParallax>
                    <div className="web-experience-container">
                        <div className="skill-tittle-container" data-aos="fade-right">
                            <span>{open}</span>
                            <h4 className="skill-tittle" >PROGRAMACION</h4>
                            <span >{close}</span>
                        </div>
                        <div className="cards-container-web" data-aos="zoom-in">
                            {
                                dataWebProjects.map((project,i)=>{
                                    return(
                                        <a href={project.link} target="_blank" key={project.tittle+i} rel="noreferrer">
                                            <CardAnimated 
                                            tittleProject={project.tittle}
                                            descriptionProject={project.description}
                                            backGroundProject={project.bacgroundImg}
                                            />
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="design-experience-container">
                        <div className="skill-tittle-container" data-aos="fade-right">
                            <span>{open}</span>
                            <h4 className="skill-tittle" >DISEÑO</h4>
                            <span >{close}</span>
                        </div>
                        <Parallax className="dark-container-img"  y={[-40,40]}>
                            <div data-aos="zoom-in">
                                <img src={OlasAltasPsyco} alt="OlasAltasPsyco" loading="lazy"/>
                            </div>
                        </Parallax>
                        <Parallax className="light-container-img" y={[-40,40]}>
                            <div data-aos="zoom-in">
                                <img src={OlasAltas} alt="OlasAltas" loading="lazy"/>
                            </div>
                        </Parallax>
                        <Parallax className="dark-container-img" y={[-40,40]}>
                            <div data-aos="zoom-in">
                                <img src={Delivery} alt="Delivery" loading="lazy"/>
                            </div>
                        </Parallax>
                        <Parallax className="light-container-img" y={[-40,40]}>
                            <div data-aos="zoom-in">
                                <img src={TuDesayuno} alt="TuDesayuno" loading="lazy"/>
                            </div>
                        </Parallax>
                        <Parallax className="dark-container-img" y={[-40,40]}>
                            <div data-aos="zoom-in">
                                <img src={MangaFever} alt="MangaFever" loading="lazy"/>
                            </div>
                        </Parallax>
                        <div className="product-container">
                            <div className="img-product-container-final" data-aos="zoom-in">
                                <img src={Jelomi} alt="Jelomi" loading="lazy"/>
                            </div>
                            <div className="img-product-container" style={{boxShadow:'0 20px 20px rgba(0, 0, 0, 0.466), 0px 0px 50px rgba(0, 0, 0, 0.459)'}} data-aos="zoom-in">
                                <img src={ProductJelomi} alt="ProductJelomi" loading="lazy"/>
                                <div className="overlay-clients-img"></div>
                            </div>
                            <div className="img-product-container-final" data-aos="zoom-in">
                                <img src={OlasAltas} alt="OlasAltas" loading="lazy"/>
                            </div>
                            <div className="img-product-container" style={{boxShadow:'0 20px 20px rgba(0, 0, 0, 0.466), 0px 0px 50px rgba(0, 0, 0, 0.459)'}} data-aos="zoom-in">
                                <img src={ProductOlas} alt="ProductOlas" loading="lazy"/>
                                <div className="overlay-clients-img"></div>
                            </div>
                        </div>
                    </div>
                    <div className="Contact-container" id="seccion-contacto">
                        <div className="skill-tittle-container" data-aos="fade-up">
                            <span>{open}</span>
                            <h4 className="skill-tittle" >CONTACTO</h4>
                            <span >{close}</span>
                        </div>
                        <div data-aos="fade-right">
                            <div className="basic-contact-container">
                                <div className="contact-info-container">
                                    <div className="label-container-info">Numero de contacto:</div>
                                    <div className="info-container">+523322556776</div>
                                </div>
                                <div className="contact-info-container">
                                    <div className="label-container-info">Email de contacto:</div>
                                    <div className="info-container">joab_medel99@hotmail.com</div>
                                </div>
                            </div>
                            <div className="icons-container-contact">
                                <a href="https://wa.me/523322556776/" target="_blank" className="icon-fbmessenger" rel="noreferrer">
                                    <IoLogoWhatsapp />
                                </a>
                            </div>
                            <div className="container-text-info-contact" >
                                <p>
                                    Para mas información en proyectos específicos, colaboraciones o cualquier tipo propuesta laboral, puede llenar el siguiente formulario para enviar dicha petición o contactar por el medio de su agrado disponible.
                                </p>
                            </div>
                            <div className="form-contact-container" >
                                <form onSubmit={sendEamil}>
                                    <div className="names-container inputs-container">
                                        <div className="container-input-name" style={{marginRight:"3%"}}>
                                            <label htmlFor="Nombre" style={{marginLeft:"5%"}}>Nombre</label>
                                            <br />
                                            <input type="text" id="Nombre" name="name" required/>
                                        </div>
                                        <div className="container-input-name">
                                            <label htmlFor="Apellido" style={{marginLeft:"5%"}}>Apellido</label>
                                            <br />
                                            <input type="text" id="Apellido" required name="lastename"/>
                                        </div>
                                    </div>
                                    <div className="inputs-container">
                                        <label htmlFor="Email">Email</label>
                                        <br />
                                        <input type="email" id="Email" required name="email"/>
                                    </div>
                                    <div className="inputs-container">
                                        <label htmlFor="Asunto">Asunto</label>
                                        <br />
                                        <input type="text" id="Asunto" required name="subject"/>
                                    </div>
                                    <div className="inputs-container">
                                        <label htmlFor="Mensaje">Mensaje</label>
                                        <br />
                                        <textarea name="Mensaje" id="Mensaje" cols="30" rows="10" required name="message"></textarea>
                                    </div>
                                    <input type="submit" value="ENVIAR" className="input-submit"/>
                                </form>
                                <ToastContainer
                                            position="bottom-center"
                                            autoClose={5000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                            style={{width:"80vw"}}
                                        />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}