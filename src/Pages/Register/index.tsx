import { FaRegUser } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaFileLines } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

import './styles.scss';

export function Register() {
    return (
        <div className="register" onSubmit={() => alert('SUBMITADO')}>
            <form className="form-register">
                <h2 className="form-title">Cadastro</h2>
                <div className="text-center">
                    <div>
                        <span className="icon"><FaRegUser /></span>
                        <input type="text" placeholder="Nome" className="input input-lg mb-2" />
                    </div>

                    <div className="d-flex w-100 justify-content-between mb-2">
                        <div>
                            <span className="icon icon-sm"><MdOutlineLocalPhone /></span>
                            <input type="number" className="input input-sm" placeholder="Telefone" />
                        </div>
                        <div>
                            <span className="icon icon-sm"><FaFileLines /></span>
                            <input type="number" className="input input-sm" placeholder="CPF" />
                        </div>
                    </div>

                    <div className="mb-2">
                        <span className="icon"><MdOutlineEmail /></span>
                        <input type="email" className="input input-lg" placeholder="E-mail" />
                    </div>
                    <div className="mb-3">
                        <span className="icon"><CiLock /></span>
                        <input type="password" className="input input-lg" placeholder="Password" />
                    </div>
                    <button className="register-button mb-2" type="submit">Cadastrar</button>
                    <p className="m-0 has-account">Já tem uma conta? <a href="/login" className="log-here">Logue aqui</a>!</p>
                </div>
            </form>
        </div>
    )
}