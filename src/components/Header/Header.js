import React from 'react';
import './Header.css';

class Header extends React.Component {

    componentDidMount(){
        let toggleBtn = document.querySelector('.nav__toggle');
        let menuExpand = document.querySelector('.nav__expanded');

        toggleBtn.addEventListener('click', () => {
            if (menuExpand.classList.contains('unhidden')) {
                menuExpand.classList.remove('unhidden');
            } else {
                menuExpand.classList.add('unhidden');
            }
        });
    }

    render () {
        return (
            <header className="nav">
                <a className="nav__brand" href="/">PainPoint</a>
                <button className="nav__toggle">
                    <i class="fa fa-bars"></i>
                </button>
                <div className="nav__expanded hidden">
                    <form className="nav__form" action="/">
                        <div className="form__group">
                            <i class="fa fa-search form__icon"></i>
                            <input className="form__input" type="search" placeholder="Search" />
                        </div>
                    </form>
                    <ul className="nav__links">
                        <li className="nav__link"><a href="/login">Log in</a></li>
                        <li className="nav__link nav__link--filled"><a href="/signup">Sign up</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}
  
export default Header;
  