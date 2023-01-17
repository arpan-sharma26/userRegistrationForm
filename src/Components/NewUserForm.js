import { React, useState } from 'react';
import classes from './NewUserForm.module.css';
import Card from '../Components/UI/Card';
import Button from './UI/Button';

const NewUserForm = () => {

    // 2 states defined
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [isError, setError] = useState(false);

    const userNameChangeHandler = (event) => {
        if(event.target.value.trim().length === 0){
            setError(true);
            return;
        }else{
            setError(false);
            setUserName(event.target.value);
        }
    };

    const ageChangeHandler = (event) => {
        if(event.target.value.trim().length === 0){
            setError(true);
            return;
        }else{
            setError(false);
            setAge(event.target.value);
        }
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(isError === false){
            setError(true);
        }
        const obj = {
            userName,
            age
        };
        console.log(obj);
        setUserName('');
        setAge('');
    };

    return <Card className={classes.input}>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Usernames</label>
                <input id='username' type="text" onChange={userNameChangeHandler} value={userName}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} value={age}/>
                <Button type="Submit">Add User</Button> 
            </form>
        </Card>
};

export default NewUserForm;