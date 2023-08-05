

import "./style.scss";

const Card = ({state:{title, images, description, price, discountPercentage, brand}}) => {
    return (
        <div className="card">
            <img className="card-img" src={images[0]} alt="pic"/>
            <div className="card-body">
                <h4 className="card-body__title">{title}</h4>
                <p className="card-body__brand">Brand: {brand}</p>
                <p className="card-body__desc">{description}</p>
                <div className="card-body__info">
                    <p>Price: <span>{price}</span></p>
                    <p>Discount: <span>{discountPercentage}</span></p>
                </div>
                <button className="card-body__btn">Detail</button>
            </div>
        </div>
    );
};

export default Card;