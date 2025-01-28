import monument from '../assets/monuments.png';
import carambar from '../assets/appCarambar.png';
import api from '../assets/api.png';
import game from '../assets/nombreMystere.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export function Project() {
    return (
        <div>
            <div className="line-top"></div>
            <div className="title-project"><h1>Mes projets</h1></div>
            <div className="line-bottom"></div>
            <div className="card-section">
                <div className="card">
                    <h1 className='title-project'>Monuments</h1>
                    <img className='img-project' src={monument} alt="image" />
                    <p className='description-project'>Page web dynamique afin d'afficher des informations sur les monuments lorsque l'utilisateur clique sur un bouton. Cette page est construite en <span className='word'>HTML</span> , <span className='word'>CSS</span> et <span className='word'>Java-Script</span></p>
                    <a className='link-project' target='blank' href="https://monuments-d9q63ctdn-romains-projects-a67cb888.vercel.app/"><FontAwesomeIcon icon={faLink} /></a>
                </div>
                <div className="card">
                    <h1 className='title-project'>App Carambar</h1>
                    <img className='img-project' src={carambar} alt="image" />
                    <p className='description-project'>App Carambar est une application web qui affiche des blagues Carambar aléatoires. Elle est construite avec <span className='word'>React</span> et déployée sur <span className='word'>Vercel</span>.</p>
                    <a className='link-project' target='_blank' href="https://app-carambar-j9k85bjz2-romains-projects-a67cb888.vercel.app/"><FontAwesomeIcon icon={faLink} /></a>
                </div>
                <div className="card">
                    <h1 className='title-project'>API de blagues</h1>
                    <img className='img-project' src={api} alt="image" />
                    <p className='description-project'>Création d-une API qui permet de gérer et de récupérer des blagues Carambar. Technologie utilisées : <span className='word'>Node JS</span>, <span className='word'>squlite3</span>, <span className='word'>Sequelize</span>, <span className='word'>Swagger</span> et <span className='word'>Postman</span></p>
                    <a className='link-project' target='blank' href="https://github.com/Romain-Accary/API-blagues?tab=readme-ov-file"><FontAwesomeIcon icon={faLink} /></a>
                </div>
                <div className="card">
                    <h1 className='title-project'>Jeux du nombre mystére</h1>
                    <img className='img-project' src={game} alt="image" />
                    <p className='description-project'>Création d'un mini-jeux ou il faut trouver le nombre mystére en un nombre d'essaie limité. Technologie utilisées: <span className='word'> HTML</span>, <span className='word'>CSS</span> et <span className='word'>Java-Script</span> </p>
                    <a className='link-project' target='blank' href="https://nombre-mystere-nu.vercel.app/"><FontAwesomeIcon icon={faLink} /></a>
                </div>
            </div>
        </div>
    );
}