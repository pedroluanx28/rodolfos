import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { useFormik } from "formik";

import './styles.scss';

export function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <div className="register">
            <form className="form-register" onSubmit={formik.handleSubmit}>
                <h2 className="form-title">Login</h2>
                <div className="text-center">
                    <div className="mb-3">
                        <span className="icon icon"><MdOutlineEmail /></span>
                        <input
                            type="email"
                            className="input input"
                            placeholder="E-mail"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div className="mb-3">
                        <span className="icon"><CiLock /></span>
                        <input
                            type="password"
                            className="input input mb-2"
                            placeholder="Password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <button className="login-button mb-2" type="submit">Entrar</button>
                    <p className="m-0 hasnt-account">Não tem nenhuma conta? <a href="/register" className="log-here">Crie aqui</a>.</p>
                </div>
            </form>
        </div>
    )
}