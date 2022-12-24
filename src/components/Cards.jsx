/* eslint-disable react/style-prop-object */
import Card1 from "../images/card1.webp";
import Card2 from "../images/card2.webp";
import Card3 from "../images/card3.webp";
import Card from "./Card";
function Cards() {
    return ( <div className="">
     <Card title="UI/UX Design"  content="Research, Design, Prototypes and Animation." image={Card1}/>
        <Card title="Front-End Development"   content="Implement UX design into live and user friendly." image={Card2}/>
        <Card title="Responsive Design"  content="I build landing pages and responsive websites and web App." image={Card3}/>
    </div> );
}

export default Cards;