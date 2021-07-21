import React from 'react';
import './Signup.css';

class Signup extends React.Component{
    render() {
        return (
            <main className="signup__container">
                <section className="signup__img">

                </section>
                <section className="signup__wrapper">
                    <h1 className="signup__header">Signup</h1>
                    <form className="signup__form" action="/" method="post">
                        <div className="signup__form__group">
                            <label className="signup__form__label">Email</label>
                            <input className="signup__form__input" type="email" name="e" />
                        </div>
                        <div className="signup__form__group">
                            <label className="signup__form__label">Username</label>
                            <input className="signup__form__input" type="text" name="u" />
                        </div>
                        {/* TODO: password validation */}
                        <div className="signup__form__group">
                            <label className="signup__form__label">Password</label>
                            <input className="signup__form__input" type="password" name="p" />
                        </div>
                        <div className="signup__form__group">
                            <label className="signup__form__label">Confirm Password</label>
                            <input className="signup__form__input" type="password" name="cp" />
                        </div>
                        <div className="signup__form__group">
                            <button className="signup__form__submit" type="submit">Sign Up</button>
                        </div>
                    </form>
                </section>
            </main>
        )
    }
}

export default Signup;