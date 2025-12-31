import React from "react";
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-cointainer'>
            <div className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join our newsletter to receive the best deals.
                </p>
                <p className='footer-subscription-text'>
                    Unsubscribe any time.
                </p>
                <div className="input-areas">
                    <input className="footer-input"
                           type="email"
                           name="email"
                           placeholder="Your email"
                    />
                    <Button buttonStyle='btn--primary'>
                        Subscribe
                    </Button>
                </div>
            </div>
            <div className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL
                            <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL © 2020</small>
                    <div className='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'/>
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'/>
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube'/>
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter'/>
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;