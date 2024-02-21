import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Mr.ChettiNad Resturant</h1>
                    <h2>Coimbatore</h2>
                    <p className="subsection">We are a family owned  restaurant, located on  RS-Puram,Coimbatore-641002. We focus
                    on traditional recipes served with a chettinadu style.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/food1.png')} alt="Mr.ChettiNadu Restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}