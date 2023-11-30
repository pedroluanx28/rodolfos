import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";


export function KartCard() {
    return (
        <Card>
            <div className="d-flex align-items-center justify-content-between px-3" style={{ height: "6rem" }}>
                <img src="/product.png" className="h-100" />
                <span>Poltrona no talo</span>
                <span>R$ 650</span>
                <Col lg={1}>
                    <input type="number" className="form-control" />
                </Col>
                <span className="fw-bold color-price-total">R$ 650</span>
                <Button variant="danger" className="px-3 py-2"><FaRegTrashAlt /></Button>
            </div>
        </Card>
    )
}
