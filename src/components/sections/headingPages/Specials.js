import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';
import ChickenBriyani from '../../../assets/food/chickenbriyani.jpg';
import Fish from '../../../assets/food/fish.jpg';
import Firni from '../../../assets/food/firni.jpg';


export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Mutton Briyani" price="₹359" description="Chettinadu Mutton Biryani is use of spices such as star anise, black stone flower,marathi moggu,and the unique Chettinad masala
The biryani is aromatic, with the fragrance of fresh mint leaves, coriander leaves, and the distinctive spices used in Chettinad cuisine."/>
                <SpecialCard image={Bruschetta}name="Chicken Chettinad Gravy" price="₹259" description="Chicken chettinad gravy is traditional dish of south-india and consists of chicken cooked in, turmeric and a paste of red chillies, kalpasi, coconut, coriander seeds, cumin seeds, fennel seeds, black pepper, onions, ginger, garlic and gingelly oil."/>
                <SpecialCard image={LemonDessert} name="Mutton Dry gravy" price="₹299" description="The mutton pieces are cooked in a thick masala based gravy. The main trick of this mutton recipe is to get the quantity of the masala right. The masala paste lends the whole flavour to this recipe.The fragrant spices give the Chettinad curries a burst with some delectable flavours."/>
            </section>
            <section className="specials-cards">
                <SpecialCard image={ChickenBriyani} name="Chicken Briyani" price="₹259" description="Chettinadu Chicken Biryani is use of spices such as star anise, black stone flower,marathi moggu,and the unique Chettinad masala
The biryani is aromatic, with the fragrance of fresh mint leaves, coriander leaves, and the distinctive spices used in Chettinad cuisine."/>
                <SpecialCard image={Fish}name="Chettinad Fish Gravy" price="₹449" description="Fish chettinad gravy is traditional dish of south-india and consists of fish cooked in, turmeric and a paste of red chillies, kalpasi, coconut, coriander seeds, cumin seeds, fennel seeds, black pepper, onions, ginger, garlic and Coconut oil or refined oil."/>
                <SpecialCard image={Firni} name="Firni" price="₹159" description="Firni has a lovely aroma from the basmati rice and using aromatic ingredients like saffron, rose water or cardamom powder and classic slow-cooked Indian sweet pudding made with basmati rice, milk, nuts, sugar and scented with cardamom"/>
            </section>
            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}