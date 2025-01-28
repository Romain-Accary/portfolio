import logo from '../assets/A.png';
import '../style/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser, faFolderOpen, faCode, faAddressBook } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    return (
        <div className='header'>
            <div className="navigation">
                <img className='logo' src={logo} alt="logo" />
                <nav className='menu'>
                    <a className='button_menu' href="../pages/Home"><FontAwesomeIcon className='logo_nav' icon={faUser} />A propos</a>
                    <a className='button_menu' href="../pages/Home"><FontAwesomeIcon className='logo_nav' icon={faFolderOpen} />Projets</a>
                    <a className='button_menu' href="../pages/Home"><FontAwesomeIcon className='logo_nav' icon={faCode} />Conaissance</a>
                    <a className='button_menu' href="../pages/Home"><FontAwesomeIcon className='logo_nav' icon={faAddressBook} />Contact</a>
                </nav>
                <nav className='contact'>
                    <a className='logo_contact' target='blank' href="https://www.linkedin.com/in/romain-accary-b00b6833a/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className='logo_contact' target='blank' href="https://github.com/Romain-Accary"><FontAwesomeIcon icon={faGithub} /></a>
                </nav>
            </div>
            <div className="title-header">
                <h1>Romain Accary</h1>
                <p>Dévéloppeur Web Front-End</p>
            </div>
        </div>
    )
}