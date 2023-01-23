import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.closeBtn} />
};

const Modal = (props) => {
        return <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.closeBtn}>Okay</Button>
            </footer>
        </Card>
};

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop closeBtn={props.closeBtn} />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<Modal title={props.title} message={props.message} closeBtn={props.closeBtn} />, document.getElementById("modal-root"))}
        </>
    )
};

export default ErrorModal;