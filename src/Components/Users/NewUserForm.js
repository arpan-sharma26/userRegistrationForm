import React, { useState, useRef } from 'react';
import classes from './NewUserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

const NewUserForm = (props) => {

    // 2 states defined
    // const [userName, setUserName] = useState('');
    // using refs instead
    const userName = useRef();
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    // const userNameChangeHandler = (event) => {
    //     setUserName(event.target.value);
    // };

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let userNameValue = userName.current.value;
        if (age.trim().length === 0 || userNameValue.trim().length === 0) {
            setError({
                title : "Invalid input",
                message : "Please enter a valid name and age (non-empty values)."
            });
            return;
        };
        if (+age < 1) {
            setError({
                title : "Invalid age",
                message : "Please enter a valid age (> 0)."
            });
            return;
        };
        props.onAddUser(userNameValue, age);
        setError(false);    
        userName.current.value = "";
        setAge('');
    };

    const closeBtnAfterClick = () => {
        setError(false);
    };

    return (
        <>
            {error && (<ErrorModal title={error.title} message={error.message} closeBtn={closeBtnAfterClick}/>)}
            <Card className={classes.input}>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input id='username' type="text" ref={userName} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={age} />
                    <Button type="Submit">Add User</Button>
                </form>
            </Card>
        </>
    )
};

export default NewUserForm;