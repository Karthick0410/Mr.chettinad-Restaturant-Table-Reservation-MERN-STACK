import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={GreekSalad} name="Mutton Briyani" price="₹359" description="Chettinadu Mutton Biryani is characterized by its robust use of spices such as star anise, black stone flower (kalpasi), marathi moggu, and the unique Chettinad masala blend.
The biryani is aromatic, with the fragrance of fresh mint leaves, coriander leaves, and the distinctive spices used in Chettinad cuisine."/>
            <SpecialCard image={Bruschetta}name="Chicken Chettinad Gravy" price="₹199" description="Chicken chettinad is a classic dish from the chettinad cuisine. It consists of chicken cooked in, turmeric and a paste of red chillies, kalpasi, coconut, coriander seeds, cumin seeds, fennel seeds, black pepper, onions, ginger, garlic and gingelly oil."/>
            <SpecialCard image={LemonDessert} name="Firni" price="₹99" description="Phirni has a lovely aroma from the basmati rice and using aromatic ingredients like saffron, rose water or cardamom powder. Adding nuts like almonds or pistachios make it more rich,flavorful and classic slow-cooked Indian sweet pudding made with basmati rice, milk, nuts, sugar and scented with cardamom."/>
        </Carousel>
    )
}