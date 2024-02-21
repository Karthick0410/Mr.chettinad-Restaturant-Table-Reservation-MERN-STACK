export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Mr.Chettinadu Resturant</h1>
                <h2>Coimbatore</h2>
                <p className="about-subtext">Chettinadu Resturant is a blend of traditional Tamil Nadu cuisine and the cuisine of the Chettiar community, which is known for its love of spices. The cuisine is characterized by its use of a variety of spices, including star anise, black pepper, fennel seeds, and cinnamon, among others..</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Mr.Chettinad cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Mr.Chettinad cuisine 2"></img>
            </section>
    </article>
    );
}