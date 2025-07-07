import { useState } from "react"
import { Link } from "react-router-dom";

function Cadastro_Usuario2() {

    const [senha, setSenha] = useState('')
    const [senha2, setSenha2] = useState('')


    /* pretendemos adicionar uma validação de senha, incluindo um sistema de navigation, 
    para fins de desenvolvimento será usado o Link To direto */

    const handleLogin = async () => {

    }




    if (1 == 1) {
        return (
            <>
                <section className="bottom">
                    <form method="POST">
                        <h3>Crie uma senha</h3>
                        <div className='bloco'>
                            <div class="horizontal title">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75 13.75V8.75C8.75 7.0924 9.40848 5.50269 10.5806 4.33058C11.7527 3.15848 13.3424 2.5 15 2.5C16.6576 2.5 18.2473 3.15848 19.4194 4.33058C20.5915 5.50269 21.25 7.0924 21.25 8.75V13.75M6.25 13.75H23.75C25.1307 13.75 26.25 14.8693 26.25 16.25V25C26.25 26.3807 25.1307 27.5 23.75 27.5H6.25C4.86929 27.5 3.75 26.3807 3.75 25V16.25C3.75 14.8693 4.86929 13.75 6.25 13.75Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <input type='password' placeholder='Crie uma senha'></input>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_117_1966)">
                                        <path d="M22.425 22.425C20.2882 24.0538 17.6864 24.9561 15 25C6.25 25 1.25 15 1.25 15C2.80486 12.1024 4.96142 9.57076 7.575 7.575M12.375 5.3C13.2354 5.0986 14.1163 4.99792 15 5C23.75 5 28.75 15 28.75 15C27.9912 16.4195 27.0863 17.7559 26.05 18.9875M17.65 17.65C17.3067 18.0184 16.8927 18.3139 16.4327 18.5189C15.9727 18.7239 15.4761 18.8341 14.9726 18.843C14.4691 18.8518 13.969 18.7592 13.502 18.5706C13.0351 18.382 12.6109 18.1013 12.2548 17.7452C11.8987 17.3891 11.618 16.9649 11.4294 16.498C11.2408 16.031 11.1482 15.5309 11.157 15.0274C11.1659 14.5239 11.2761 14.0273 11.4811 13.5673C11.6861 13.1073 11.9816 12.6933 12.35 12.35M1.25 1.25L28.75 28.75" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_117_1966">
                                            <rect width="30" height="30" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <p>A senha deve ter no mínimo 9 caracteres</p>
                        <div className='bloco'>
                            <div class="horizontal title">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75 13.75V8.75C8.75 7.0924 9.40848 5.50269 10.5806 4.33058C11.7527 3.15848 13.3424 2.5 15 2.5C16.6576 2.5 18.2473 3.15848 19.4194 4.33058C20.5915 5.50269 21.25 7.0924 21.25 8.75V13.75M6.25 13.75H23.75C25.1307 13.75 26.25 14.8693 26.25 16.25V25C26.25 26.3807 25.1307 27.5 23.75 27.5H6.25C4.86929 27.5 3.75 26.3807 3.75 25V16.25C3.75 14.8693 4.86929 13.75 6.25 13.75Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <input type='password' placeholder='Confirme a senha'></input>
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_117_1966)">
                                        <path d="M22.425 22.425C20.2882 24.0538 17.6864 24.9561 15 25C6.25 25 1.25 15 1.25 15C2.80486 12.1024 4.96142 9.57076 7.575 7.575M12.375 5.3C13.2354 5.0986 14.1163 4.99792 15 5C23.75 5 28.75 15 28.75 15C27.9912 16.4195 27.0863 17.7559 26.05 18.9875M17.65 17.65C17.3067 18.0184 16.8927 18.3139 16.4327 18.5189C15.9727 18.7239 15.4761 18.8341 14.9726 18.843C14.4691 18.8518 13.969 18.7592 13.502 18.5706C13.0351 18.382 12.6109 18.1013 12.2548 17.7452C11.8987 17.3891 11.618 16.9649 11.4294 16.498C11.2408 16.031 11.1482 15.5309 11.157 15.0274C11.1659 14.5239 11.2761 14.0273 11.4811 13.5673C11.6861 13.1073 11.9816 12.6933 12.35 12.35M1.25 1.25L28.75 28.75" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_117_1966">
                                            <rect width="30" height="30" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <Link to='/cadastro_usuario/3'>
                            <button type='submit' className='border horizontal' onClick={handleLogin}><p>Continuar</p></button>
                        </Link>
                        <div>

                        </div>
                    </form>
                </section>
            </>
        )
    }
    else {
        return (
            <>
                <div>
                    <h3>Crie uma senha</h3>
                    <div className='bloco'>
                        <img></img>
                        <input type='text' placeholder='Crie uma senha'></input>
                        <img></img>
                    </div>
                    <p>A senha deve ter no mínimo 9 caracteres</p>
                    <div className='bloco'>
                        <img></img>
                        <input type='text' placeholder='Confirme a senha'></input>
                        <img></img>
                    </div>
                    <Link to='/cadastro_usuario/3'>
                        <button type='submit' className='border horizontal'><p>Continuar</p></button>
                    </Link>
                    <div>

                    </div>
                </div>
            </>
        )
    }
}

export default Cadastro_Usuario2