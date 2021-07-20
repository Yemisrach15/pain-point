import React from 'react';
import './Footer.css';

class Footer extends React.Component {

    render () {
        return (
            <footer>
                <div className="footer__links">
                    <a href="/painpoints" className="footer__link">Pain Points</a>
                    <a href="/" className="footer__link">Community Guidelines</a>
                    <a href="/" className="footer__link">Contact</a>
                    
                </div>
                <div className="footer__copyright">
                    &copy; 2021 PainPoint Inc.
                </div>
            </footer>
        )
    }
}
  
export default Footer;
  