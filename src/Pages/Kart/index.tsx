import { Header } from '../../Components/header';
import { Card } from 'react-bootstrap';
import { RiShoppingBasket2Fill } from "react-icons/ri";

export function Kart() {
    return (
        <div>
            <Header />
            <div className="p-4">
                <div>
                    <Card className="p-3">
                        <RiShoppingBasket2Fill />
                        <span className="fw-700 fs-4">Móveis no carrinho</span>
                    </Card>
                </div>
            </div>
        </div>
    )
}
