import React from 'react';
import './Home.css';

class Home extends React.Component {

    render () {
        return (
            <main>
                <section className="main__hero">
                    <h1 className="main__header">A forum to post your <span className="text-green">problems</span></h1>
                </section>
                <section className="cards">
                    <div className="card">
                        <img className="card__img" src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1391&q=80" alt=""/>                        <div className="card__desc">
                            <h2 className="card__header">Lorem ipsum</h2>
                            <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card__img" src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1391&q=80" alt=""/>
                        <div className="card__desc">
                            <h2 className="card__header">Lorem ipsum</h2>
                            <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card__img" src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1391&q=80" alt=""/>                        <div className="card__desc">
                            <h2 className="card__header">Lorem ipsum</h2>
                            <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
  
export default Home;
  