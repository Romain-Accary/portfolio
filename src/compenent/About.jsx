import Romain from '../assets/Romain.jpg';
export function About() {
    return (
        <div className='about'>
            <h1 className="title-about">A PROPOS</h1>
            <div className="font-about">
                <img src={Romain} alt="photo" />
                <p className="presentation">Passionné par la conception et le développement d’interfaces utilisateur modernes et performantes, je m’engage à créer des expériences web intuitives et efficaces. Mon expertise en HTML, CSS, JavaScript et React me permet de concevoir des solutions sur mesure, alliant esthétisme et fonctionnalité.
                    Curieux et motivé par l’innovation, je suis constamment à l’affût des dernières avancées technologiques pour donner vie à des projets uniques et impactants. Mon portfolio reflète non seulement mes compétences techniques, mais également mon attention aux détails et mon dévouement à offrir des produits de qualité.
                    Je suis toujours prêt à relever de nouveaux défis. N’hésitez pas à me contacter pour discuter de votre prochain projet.</p>
            </div>
        </div>

    )
}