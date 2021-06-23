import "./public/styleBodyWeb.css";
import {useRef,useEffect} from "react";
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
}

export default function CardAnimated(props){
    const options = {
        scale: 1,
        speed: 500,
        max: 20
    }

    return(
        <>
            <div className="Container-effect-card">
                <Tilt style={{ backgroundImage: `url(${props.backGroundProject})` }} className="card-container-web" options={options}>
                    <div className="overlay-container-cards">
                        <h5>{props.tittleProject}</h5>
                        <p>{props.descriptionProject}</p>
                    </div>
                </Tilt>
            </div>
        </>
    )
}

