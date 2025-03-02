import classes from './Modal.module.css';

export function Modal({children}) {
    return (
        <>
            <div className={classes.backdrop}/>
            <dialog open className={'flex mx-auto'}>
                {children}
            </dialog>
        </>
    )
}