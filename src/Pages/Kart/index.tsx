import { Header } from '../../Components/header';
import { Card, Col } from 'react-bootstrap';
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { MdSummarize } from "react-icons/md";

import './styles.scss';
import { KartCard } from '../../Components/KartCard';

export function Kart() {
    return (
        <div>
            <Header />
            <div className="d-flex gap-3 px-5 pt-4">
                <Col lg={8}>
                    <Card className="p-3 mb-3">
                        <div className="d-flex align-items-center gap-2">
                            <RiShoppingBasket2Fill className="fs-4 color-icon" />
                            <span className="fw-700 fs-4">Móveis no carrinho</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between px-3 mt-4 fw-bold">
                            <span>Foto móvel</span>
                            <span>Nome do móvel</span>
                            <span>Preço</span>
                            <span>Quant.</span>
                            <span>Sub-Total</span>
                            <span>Ações</span>
                        </div>
                    </Card>

                    <div className="d-flex flex-column gap-3">
                        <KartCard />
                        <KartCard />
                        <KartCard />
                        <KartCard />
                        <KartCard />
                        <KartCard />
                    </div>
                </Col>

                <Col lg={4}>
                    <Card className="p-3">
                        <div className="px-2 py-1">
                            <div className="d-flex align-items-center gap-2">
                                <MdSummarize className="fs-4 color-icon" />
                                <span className="fw-700 fs-4">Resumo</span>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex justify-content-between p-3">
                                    <span>Valor total</span>
                                    <span className="color-price-total fw-bold">R$ 1750,00</span>
                                </div>

                                <div className="d-flex justify-content-between p-3">
                                    <span>Frete</span>
                                    <span className="color-price-total fw-bold">R$ 0,00</span>
                                </div>

                                <div className="d-flex justify-content-between background-price-total p-3 mb-1">
                                    <span className="color-total-price">Total a pagar</span>
                                    <span className="color-price-total fw-bold">R$ 1750,00</span>
                                </div>

                                <div className="d-flex flex-column gap-2">
                                    <button className="button goto-payment">IR PARA O PAGAMENTO</button>
                                    <button className="button continue">Continuar comprando</button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </div>
        </div>
    )
}
