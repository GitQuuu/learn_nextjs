import classes from './Modal.module.css';

export function Modal({children, onOutsideModalClick}) {
    return (
        <>
            <div className={classes.backdrop} onClick={onOutsideModalClick}/>
            <dialog open className={classes.modal + ' flex mx-auto'}>
                {children}
            </dialog>
        </>
    )
}