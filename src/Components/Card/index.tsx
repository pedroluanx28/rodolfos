import { LuShoppingCart } from "react-icons/lu";
import './styles.scss';

type CardProps = {
    image: string,
    name: string,
    price: number,
    discount?: number,
    col?: string,
}

export function Card({
    image,
    name,
    price,
    discount = 0,
    col = '2',
}: CardProps) {
    const discountCalc = (price * discount) / 100;

    return (
        <div className={`col-${col} transition card-product`}>
            {(discount != 0) && <div className="discount">{`-${discount}%`}</div>}
            <div className="card-container mb-3">
                <div className="card-content">
                    <img
                        src={image}
                        alt="Imagen do produto"
                        className="w-100 h-100 product-img"
                    />
                </div>
                <button className="add-kart-button">
                    <span className="kart-img">
                        <LuShoppingCart />
                    </span>
                    Adicionar ao carrinho
                </button>
            </div>
            <p className="fw-500 m-0">{name}</p>
            <div className="prices">
                {discount === 0
                    ? (
                        <span className="current-price">${price}</span>
                    )
                    : (
                        <>
                            <span className="current-price">${price - discountCalc}</span>
                            <span className="ex-price">${price}</span>
                        </>
                    )}
            </div>
        </div>
    )
}
