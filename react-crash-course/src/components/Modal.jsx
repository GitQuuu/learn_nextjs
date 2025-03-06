import classes from './Modal.module.css';
import {useNavigate} from "react-router-dom";

export function Modal({children}) {

    const navigate = useNavigate();

    function closeHandler(){
     navigate("..");
    }
    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler}/>
            <dialog open className={classes.modal + ' flex mx-auto'}>
                {children}
            </dialog>
        </>
    )
}