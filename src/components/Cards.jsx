/* eslint-disable react/style-prop-object */
import Card1 from "../images/card1.png";
import Card2 from "../images/card2.png";
import Card3 from "../images/card3.png";
import Card from "./Card";
function Cards() {
    return ( <div className="">
     <Card title="UI/UX Design" style="bg-yellow-400 w-full md:w-4/6 ml-auto mr-auto   border-gray-200 border-2 flex-col justify-center-center rounded-3xl my-3 py-5 md:flex md:justify-center md:flex-row md:items-center" content="Research, Design, Prototypes and Animation." image={Card1}/>
        <Card title="Front-End Development" style="bg-green-400 w-full md:w-4/6 ml-auto mr-auto   border-gray-200 border-2 flex-col justify-center-center rounded-3xl my-3 py-5 md:flex md:justify-center md:flex-row md:items-center"  content="Implement UX design into live and user friendly." image={Card2}/>
        <Card title="Responsive Design" style="bg-blue-400 w-full md:w-4/6 ml-auto mr-auto   border-gray-200 border-2 flex-col justify-center-center rounded-3xl my-3 py-5 md:flex md:justify-center md:flex-row md:items-center" content="I build landing pages and responsive websites and web App." image={Card3}/>
    </div> );
}

export default Cards;