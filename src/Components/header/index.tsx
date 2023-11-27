import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import './styles.scss';

export function Header() {
    const isLogged = true;
    return (
        <div className="header">
            <Link to="/">
                <div className="fw-700 fs-4">
                    Rodolfo`s
                </div>
            </Link>
            <div className="d-flex align-items-center">
                <div className="d-flex me-5">
                    <input className="input" type="text" placeholder="O que você procura?" />
                    <button className="button"><IoSearch /></button>
                </div>
                <div className="d-flex align-items-center">
                    {isLogged ? (
                        <>
                            <FaRegUserCircle className="fs-3" />
                            <p className="assets">Pedro Luan</p>
                        </>
                    ) : (
                        <>
                            <FaRegUserCircle className="fs-3" />
                            <p className="assets">Faça <a href="/login">LOGIN</a> ou <br /> crie seu <a href="/register">CADASTRO</a></p>
                        </>
                    )}
                </div>
            </div>
        </div >
    )
}
