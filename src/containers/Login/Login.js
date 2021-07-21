import React from 'react';
import './Login.css';

class Login extends React.Component{
    render() {
        return (
            <main className="login__container">
                <section className="login__img">

                </section>
                <section className="login__wrapper">
                    <h1 className="login__header">Login</h1>
                    <form className="login__form" action="/" method="post">
                        <div className="login__form__group">
                            <label className="login__form__label">Username</label>
                            <input className="login__form__input" type="text" name="u" />
                        </div>
                        <div className="login__form__group">
                            <label className="login__form__label">Password</label>
                            <input className="login__form__input" type="password" name="p" />
                        </div>
                        <div className="login__form__group">
                            <button className="login__form__submit" type="submit">Login</button>
                        </div>
                    </form>
                </section>
            </main>
        )
    }
}

export default Login;