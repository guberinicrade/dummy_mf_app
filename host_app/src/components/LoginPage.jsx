import React, {useState} from 'react'
import classes from '../../../css_modules/main.module.css'

const LoginPage = (props) => {

  return (
    <div className={classes.login}>
        <div className={classes['login-container']}>
            <div className={classes['input-container']}>
            <h2>
                Team 1 <br/> Please Log in
            </h2>
                <input type="text"  placeholder='Username' onInput={event=>{props.setUsername(event.target.value)}}/>
                <input type="password" placeholder='Password' onInput={event=>{props.setPassword(event.target.value)}}/>
            </div>
            <button className={classes['login-button']} onClick={props.handleLogin}>Log in</button>
        </div>
    </div>
  )
}

export default LoginPage