import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Card } from "../../Components/Card";
import { LuShoppingCart } from "react-icons/lu";
import { Category } from "../../Components/Category";

import './styles.scss';

export function Dashboard() {
    return (
        <div>
            <div className="backdrop mb-5">
                <div className="w-100 text-end p-2 text-white mb-lg">
                    <Link to="/register" className="text-decoration-none text-white fw-700">
                        <span>Cadastrar</span>
                    </Link>
                    <span> | </span>
                    <Link to="/login" className="text-decoration-none text-white fw-700">
                        <span>Entrar</span>
                    </Link>
                </div>

                <div className="w-100 text-center text-white mb-5">
                    <h1 className="fw-700 fs-xlg m-0">Rodolfo`s</h1>
                    <span className="fw-500 fs-md">sua mobiliaria favorita na web</span>
                </div>

                <div className="w-100 mt-2 d-flex justify-content-center">
                    <input
                        type="text"
                        placeholder="O que você procura?"
                        className="input-search"
                    />
                    <button className="button-search">
                        <IoSearch />
                    </button>
                    <Link to="/kart">
                        <button className="button-kart">
                            <LuShoppingCart />
                        </button>
                    </Link>
                </div>
            </div>

            <div className="px-4">
                <p className="label-p">Ofertas especiais</p>
                <h2 className="see-products">Confira os produtos em promoção</h2>
                <div className="d-flex py-4 overflow-x-scroll">
                    <Card
                        image="/product.png"
                        name="Poutrona no gral"
                        price={290}
                        discount={18}
                    />
                    <Card
                        image="https://www.mobly.com.br/blog/wp-content/uploads/2020/05/m%C3%B3veis-pretos-1-1024x633.jpg"
                        name="Cama só o filé"
                        price={1200}
                        discount={20}
                    />
                    <Card
                        image="https://www.decorfacil.com/wp-content/uploads/2015/06/20170611geladeira-adesivada-26.jpg"
                        name="Geladeira muito feliz"
                        price={2000}
                        discount={10}
                    />
                    <Card
                        image="https://www.moveisconquista.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/k/ak1a8436_1.jpg"
                        name="Mesa de rico naquele pique"
                        price={1000}
                        discount={30}
                    />
                    <Card
                        image="https://urbanarts.vteximg.com.br/arquivos/ids/4793384/quadro-porta-velha.jpg?v=637202223757670000"
                        name="Porta zerada"
                        price={400}
                        discount={19}
                    />
                    <Card
                        image="https://m.media-amazon.com/images/I/61IuHR6qAbL.__AC_SX300_SY300_QL70_ML2_.jpg"
                        name="Guarda roupa animal"
                        price={2200}
                        discount={10}
                    />
                    <Card
                        image="/product.png"
                        name="Poutrona no gral"
                        price={290}
                        discount={18}
                    />
                    <Card
                        image="/product.png"
                        name="Poutrona no gral"
                        price={290}
                        discount={18}
                    />
                </div>

                <div className="text-center">
                    <button className="see-more">Ver todos os móveis</button>
                </div>

                <hr className="mb-4" />

                <div>
                    <p className="label-p">Categorias</p>
                    <h2 className="see-products">Selecione uma categoria</h2>
                    <div className="row">
                        <Category
                            image="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
                            name="Quarto"
                        />

                        <Category
                            image="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600"
                            name="Sala de estar"
                        />

                        <Category
                            image="https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=600"
                            name="Cozinha"
                        />

                        <Category
                            image="https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=600"
                            name="Banheiro"
                        />

                        <Category
                            image="https://images.pexels.com/photos/19053240/pexels-photo-19053240/free-photo-of-cadeira-catedra-presidente-computador.jpeg?auto=compress&cs=tinysrgb&w=600"
                            name="Escritório"
                        />

                        <Category
                            image="https://images.pexels.com/photos/272056/pexels-photo-272056.jpeg?auto=compress&cs=tinysrgb&w=600"
                            name="Infantil"
                        />
                    </div>

                    <hr className="mt-5" />

                    <div>
                        <p className="label-p">Novidades</p>
                        <h2 className="see-products">Novidades que chegaram pra você</h2>

                        <div className="news mb-5">
                            <div className="d-flex flex-column align-items-start flex-3">
                                <h2>Cadeira Gamer branca Prizi - Jx-1039r</h2>
                                <h2>R$ 390 á vista</h2>
                                <h2>4x de R$ 89,99 sem juros</h2>
                                <p>Melhore sua experiencia gamer</p>
                                <button className="see-more">Comprar agora</button>
                            </div>

                            <div className="d-flex flex-1">
                                <img src="/news.jpeg" className="w-100 img-news" />
                            </div>
                        </div>

                        <div>
                            <p className="label-p">Destaques</p>
                            <h2 className="see-products">Confira os destaques da loja</h2>

                            <div className="row mb-5">
                                <Card
                                    image="/product.png"
                                    name="Poltrona no grau"
                                    price={300}
                                    col="3"
                                />

                                <Card
                                    image="/product.png"
                                    name="Poltrona no grau"
                                    price={300}
                                    col="3"
                                />

                                <Card
                                    image="/product.png"
                                    name="Poltrona no grau"
                                    price={300}
                                    col="3"
                                />

                                <Card
                                    image="/product.png"
                                    name="Poltrona no grau"
                                    price={300}
                                    col="3"
                                />
                            </div>

                            <div className="row">
                                <Card
                                    image="/product.png"
                                    name="Poltrona no grau"
                                    price={300}
                                    col="3"
                                />

                                <Card
                                    image="/product.png"
                                    name="Poltrona no grau"
                                    price={300}
                                    col="3"
                                />

                                <Card
                                    image="/product.png"
                                    name="Poltrona no grau"
                                    price={300}
                                    col="3"
                                />

                                <Card
                                    image="/product.png"
                                    name="Poltrona no grau"
                                    price={300}
                                    col="3"
                                />
                            </div>

                            <div className="text-center">
                                <button className="see-more">Ver todos os produtos</button>
                            </div>
                        </div>

                        <hr className="mb-5" />

                        <div className="mb-5">
                            <p className="label-p">Garantias</p>
                            <h2 className="see-products">No nosso site garantimos</h2>

                            <div className="d-flex justify-content-between mt-5">
                                <div className="d-flex flex-column text-center">
                                    <img src="/delivery.svg" className="icon-img" />
                                    <p className="fw-600 m-0">Frete grátis e rápido</p>
                                    <span className="fs-sm">Entrega gratuita para todos os pedidos acima de R$140</span>
                                </div>

                                <div className="d-flex flex-column text-center">
                                    <img src="/services.svg" className="icon-img" />
                                    <p className="fw-600 m-0">Frete grátis e rápido</p>
                                    <span className="fs-sm">Entrega gratuita para todos os pedidos acima de R$140</span>
                                </div>

                                <div className="d-flex flex-column text-center">
                                    <img src="/secure.svg" className="icon-img" />
                                    <p className="fw-600 m-0">Frete grátis e rápido</p>
                                    <span className="fs-sm">Entrega gratuita para todos os pedidos acima de R$140</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
