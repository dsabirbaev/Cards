
import Card from "../UI/Card/Card";
import { products } from "../../constants/db";

const Cards = () => {
    return (
       <section id="cards">
            <div className="container">
                <div className="wrapper">
                    {
                        products.map((item) => {
                            return <Card key={item.id} state={item}/>
                        })
                    }
                    
                </div>
            </div>
       </section>
    );
};

export default Cards;