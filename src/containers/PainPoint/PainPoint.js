
import React from 'react';
import './PainPoint.css';

class Questions extends React.Component {

    render () {
        return (
            <main className="question__container">
                <section className="top">
                    <h1 className="top__header">All PainPoints</h1>
                    <a className="top__link" href="/">Post painpoint</a>
                </section>

                <section className="filters">
                    <h3 className="filter__header">21 Paint Points</h3>
                    <ul className="filter__container">
                        <li><button className="filter">Newest</button></li>
                        <li><button className="filter">Most votes</button></li>
                        <li><button className="filter">Active</button></li>
                        <li><button className="filter">Most frequent</button></li>
                    </ul>
                </section>                

                <section className="questions">
                    <article className="question">
                        <div className="question__vote">
                            <p className="vote__amount">3</p>
                            <p className="vote__text">votes</p>
                        </div>
                        <div className="question__desc">
                            <a className="question__link" href="/">
                                <h2 className="question__header">I want to execute function after reload page. What should I do?</h2>
                            </a>
                            <p className="question__text">I want to hide the columns password & OTP ,that is included in $users result. Actually these 2 columns are part of the users table. My ultimate need is that i need to join 3 tables : users,...</p>
                            <ul className="question__tags">
                                <li className="question__tag">javascript</li>
                                <li className="question__tag">react</li>
                                <li className="question__tag">dom</li>
                            </ul>
                            <div className="poster">
                                <img className="poster__img" src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1391&q=80" alt="John Doe" />
                                <p className="poster__name">John Doe</p>
                            </div>
                        </div>
                    </article>
                    <article className="question">
                        <div className="question__vote">
                            <p className="vote__amount">3</p>
                            <p className="vote__text">votes</p>
                        </div>
                        <div className="question__desc">
                            <a className="question__link" href="/">
                                <h2 className="question__header">I want to execute function after reload page. What should I do?</h2>
                            </a>
                            <p className="question__text">I want to hide the columns password & OTP ,that is included in $users result. Actually these 2 columns are part of the users table. My ultimate need is that i need to join 3 tables : users,...</p>
                            <ul className="question__tags">
                                <li className="question__tag">javascript</li>
                                <li className="question__tag">react</li>
                                <li className="question__tag">dom</li>
                            </ul>
                            <div className="poster">
                                <img className="poster__img" src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1391&q=80" alt="John Doe" />
                                <p className="poster__name">John Doe</p>
                            </div>
                        </div>
                    </article>
                    <article className="question">
                        <div className="question__vote">
                            <p className="vote__amount">3</p>
                            <p className="vote__text">votes</p>
                        </div>
                        <div className="question__desc">
                            <a className="question__link" href="/">
                                <h2 className="question__header">I want to execute function after reload page. What should I do?</h2>
                            </a>
                            <p className="question__text">I want to hide the columns password & OTP ,that is included in $users result. Actually these 2 columns are part of the users table. My ultimate need is that i need to join 3 tables : users,...</p>
                            <ul className="question__tags">
                                <li className="question__tag">javascript</li>
                                <li className="question__tag">react</li>
                                <li className="question__tag">dom</li>
                            </ul>
                            <div className="poster">
                                <img className="poster__img" src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1391&q=80" alt="John Doe" />
                                <p className="poster__name">John Doe</p>
                            </div>
                        </div>
                    </article>
                    <article className="question">
                        <div className="question__vote">
                            <p className="vote__amount">3</p>
                            <p className="vote__text">votes</p>
                        </div>
                        <div className="question__desc">
                            <a className="question__link" href="/">
                                <h2 className="question__header">I want to execute function after reload page. What should I do?</h2>
                            </a>
                            <p className="question__text">I want to hide the columns password & OTP ,that is included in $users result. Actually these 2 columns are part of the users table. My ultimate need is that i need to join 3 tables : users,...</p>
                            <ul className="question__tags">
                                <li className="question__tag">javascript</li>
                                <li className="question__tag">react</li>
                                <li className="question__tag">dom</li>
                            </ul>
                            <div className="poster">
                                <img className="poster__img" src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1391&q=80" alt="John Doe" />
                                <p className="poster__name">John Doe</p>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        )
    }
}

export default Questions;