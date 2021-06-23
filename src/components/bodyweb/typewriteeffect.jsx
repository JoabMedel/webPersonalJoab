import Typed from 'typed.js';
import {useEffect, useRef} from "react";

export default function TypeWriteAnimate(){
    const typeTarget = useRef(null);

    useEffect(()=>{
        const typed = new Typed(typeTarget.current, {
            strings:[`<i>Joab Medel //</i>`],
            typeSpeed: 70,
            cursorChar: '_',
        });
 
        return () => {
            typed.destroy();
        };
    },[typeTarget])

    return(
        <>
            <span ref={typeTarget}></span>
        </>
    )
}