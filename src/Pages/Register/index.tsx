import { FaRegUser } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaFileLines } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IMaskInput } from "react-imask";
import { useFormik } from "formik";
import * as Yup from 'yup';

import './styles.scss';

export function Register() {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            identifier: '',
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required("O campo de nome é obrigátorio.")
                .min(3, "o nome precisa ter pelo menos 3 caracteres"),
            phone: Yup.string()
                .required("O campo de telefone é obrigátorio.")
                .min(15, "o telefone precisa ter pelo menos 11 digitos."),
            identifier: Yup.string()
                .required("O campo de CPF é obrigátorio.")
                .min(14, "O CPF preciso ter pelo menos 11 digitos."),
            email: Yup.string()
                .required("O campo de E-mail é obrigátorio."),
            password: Yup.string()
                .required("O campo de senha é obrigátorio.")
                .min(6, "A senha precisa ter pelo menos 6 digitos."),
        })
    });

    return (
        <div className="register">
            <form className="form-register" onSubmit={formik.handleSubmit}>
                <h2 className="form-title">Cadastro</h2>
                <div className="text-center">
                    <div>
                        <span className={`icon ${formik.errors.name && formik.touched.name && "icon-error"}`}><FaRegUser /></span>
                        <input
                            type="text"
                            placeholder="Nome"
                            className={`input input-lg mb-2 ${formik.errors.name && formik.touched.name && "error-input"}`}
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="error">{formik.errors.name}</div>
                        )}
                    </div>

                    <div className="d-flex w-100 justify-content-between mb-2">
                        <div>
                            <span className={`icon icon-sm ${formik.errors.phone && formik.touched.phone && "icon-error"}`}><MdOutlineLocalPhone /></span>
                            <IMaskInput
                                mask="(00) 00000-0000"
                                className={`input input-sm ${formik.errors.phone && formik.touched.phone && "error-input"}`}
                                placeholder="Telefone"
                                name="phone"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                            />
                            {formik.touched.phone && formik.errors.phone && (
                                <div className="error">{formik.errors.phone}</div>
                            )}
                        </div>
                        <div>
                            <span className={`icon icon-sm ${formik.errors.identifier && formik.touched.identifier && "icon-error"}`}><FaFileLines /></span>
                            <IMaskInput
                                mask="000.000.000-00"
                                className={`input input-sm ${formik.errors.identifier && formik.touched.identifier && "error-input"}`}
                                placeholder="CPF"
                                name="identifier"
                                onChange={formik.handleChange}
                                value={formik.values.identifier}
                            />
                            {formik.touched.identifier && formik.errors.identifier && (
                                <div className="error">{formik.errors.identifier}</div>
                            )}
                        </div>
                    </div>

                    <div className="mb-2">
                        <span className={`icon icon-lg ${formik.errors.email && formik.touched.email && "icon-error"}`}><MdOutlineEmail /></span>
                        <input
                            type="email"
                            className={`input input-lg ${formik.errors.email && formik.touched.email && "error-input"}`}
                            placeholder="E-mail"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="error">{formik.errors.email}</div>
                        )}
                    </div>
                    <div className="mb-3">
                        <span className={`icon ${formik.errors.password && formik.touched.password && "icon-error"}`}><CiLock /></span>
                        <input
                            type="password"
                            className={`input input-lg mb-2 ${formik.errors.password && formik.touched.password && "error-input"}`}
                            placeholder="Password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="error">{formik.errors.password}</div>
                        )}
                    </div>
                    <button className="register-button mb-2" type="submit">Cadastrar</button>
                    <p className="m-0 has-account">Já tem uma conta? <a href="/login" className="log-here">Logue aqui</a>!</p>
                </div>
            </form>
        </div>
    )
}