import Romain from '../assets/Romain.jpg';
export function About() {
    return (
        <div className='about'>
            <h1 className="title-about">A PROPOS</h1>
            <div className="font-about">
                <img src={Romain} alt="photo" />
                <p className="presentation">Je suis développeur web junior spécialisé en développement front-end avec HTML, CSS, JavaScript et React. Mon objectif est de concevoir des interfaces web modernes, performantes et intuitives, qui offrent une expérience utilisateur fluide. Passionné par l'apprentissage et l'innovation, j'aime explorer les possibilités du web pour donner vie à des projets uniques. Vous découvrirez ici mes réalisations, qui reflètent mon savoir-faire technique et mon souci du détail. Je suis toujours ouvert à de nouvelles collaborations, alors n'hésitez pas à me contacter !</p>
            </div>
        </div>

    )
}