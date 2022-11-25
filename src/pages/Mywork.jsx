import { useState } from "react";
import Card from "../components/Card";
import Card1 from "../images/card4.png";
import Card2 from "../images/card4.png";
import Card3 from "../images/card4.png";
function Mywork() {

    const[content, setContent]= useState(<Card title="UI/UX Design" content="Research, Design, Prototypes and Animation." image={Card1}/>);

    return ( <>
    <div className="mywork  ">
    
        <div className="heading text-center mb-20 pt-10 font-bold text-3xl text-green-400">My recent works</div>

        <nav className="flex-col justify-center items-center text-center font-semibold text-white list-none">
         
            <div className="m-2 cursor-pointer  px-4 py-2 bg-green-400 rounded-xl" onClick={() => setContent(<Card title="UI/UX Design" content="Research, Design, Prototypes and Animation." image={Card1}/>)} >UI/UX Design </div>
            <div className="m-2 cursor-pointer px-4 py-2 bg-green-400 rounded-xl"  onClick={() => setContent(     <Card title="Front-End Development" content="Implement UX design into live and user friendly." image={Card2}/>)}>Web Design </div>
            <div className="m-2 cursor-pointer px-4 py-2 bg-green-400 rounded-xl" onClick={() => setContent( <Card title="Responsive Design" content="I build landing pages and responsive websites and web App." image={Card3}/>)}>Front-End Development  </div>

            

        

            
        </nav>
        <div className="content">
                {content}
            </div>

           

    </div>
    </> );
}

export default Mywork;