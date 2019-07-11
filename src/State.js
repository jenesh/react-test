import  React, { Component } from 'react';
import Greetings1 from "./Greeting1";
import style from "./style";

class SimpleForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        firstNameError: "",
        lastNameError: "",
    };

    validateName = name => {
        const regex = /^[A-za-z]{3,}$/;

        return !regex.test(name)
            ? "Must be at least 3 letter"
            : "";
    };

    onFirstNameBlur = () => {
        const { firstName } = this.state;

        const firstNameError = this.validateName( firstName );

        return this.setState({ firstNameError });
    };

    onLastNameBlur = () => {
        const { lastName } = this.state;

        const  lastNameError  = this.validateName( lastName );

        return this.setState({ lastNameError });
    }

    onFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        });
    }

    onLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        });
    }

    render() {
        const { firstName, firstNameError, lastName, lastNameError } = this.state;

        return (
            <div style={style.form}>
                <label style={style.inputGroup}>
                    First Name:
                    <input style={style.input} type="text" name="firstName" onChange={this.onFirstNameChange} onBlur={this.onFirstNameBlur} />
                    {firstNameError && <div style={style.error}>{firstNameError}</div>}
                </label>
                <label style={style.inputGroup}>
                    Last Name:
                    <input style={style.input} type="text" name="lastName" onChange={this.onLastNameChange} onBlur={this.onLastNameBlur} />
                    {lastNameError && <div style={style.error}>{lastNameError}</div>}
                </label>                
                <Greetings1 firstName={firstName} lastName={lastName} />
            </div>
        );
    }
}

export default SimpleForm;