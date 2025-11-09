import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './LoginFrom.module.css';

const LOGINFORM_REX_EXP = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
};
const INITIAL_VALUES = { email: '', password: '' };
class LoginForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: INITIAL_VALUES.email,
      isEmailValid: false,
      password: INITIAL_VALUES.password,
      isPasswordValid: false,
    };
  }

  handlerEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: LOGINFORM_REX_EXP.email.test(value),
    });
  };
  handlerPasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: LOGINFORM_REX_EXP.password.test(value),
    });
  };
  handlerSubmit = e => {
    e.preventDefault();
    this.setState(INITIAL_VALUES);
  };
  render () {
    const { email, password, isEmailValid, isPasswordValid } = this.state;

    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInvalid]: !isEmailValid,
    });

    const passwordClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordValid,
      [styles.inputInvalid]: !isPasswordValid,
    });
    return (
      <main className={styles.formConteiner}>
        <h1 className={styles.formHeaders}>LoginForm</h1>
        <form className={styles.loginForm} onSubmit={this.handlerSubmit}>
          <label className={styles.label}>
            <span className={styles.inputName}>Email</span>
            <input
              type='email'
              placeholder='YourEmail'
              name='email'
              className={emailClassName}
              value={email}
              onChange={this.handlerEmailChange}
              autoFocus
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>Password</span>
            <input
              type='password'
              name='password'
              className={styles.input}
              value={password}
              onChange={this.handlerPasswordChange}
              autoFocus
            />
          </label>
          <button type='submit'>Login</button>
        </form>
      </main>
    );
  }
}

export default LoginForm;
