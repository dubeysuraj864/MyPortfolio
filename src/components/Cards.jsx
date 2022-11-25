import Card1 from "../images/card1.png";
import Card2 from "../images/card2.png";
import Card3 from "../images/card3.png";
import Card from "./Card";
function Cards() {
    return ( <>
     <Card title="UI/UX Design" content="Research, Design, Prototypes and Animation." image={Card1}/>
        <Card title="Front-End Development" content="Implement UX design into live and user friendly." image={Card2}/>
        <Card title="Responsive Design" content="I build landing pages and responsive websites and web App." image={Card3}/>
    </> );
}

export default Cards;