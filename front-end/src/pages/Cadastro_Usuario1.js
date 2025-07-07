import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { MainContext } from "../context/maincontext";

function Cadastro_Usuario1() {
    const [tipoConta] = useContext(MainContext);
    const [name, setName] = useState('')
    const [email, setEmail ] = useState('')
   if (tipoConta === "Organizador") {
    return(
        <>
            <section className="bottom">
                <h3>Criar conta de explorador e organizador</h3>
                <div className='bloco'>
                    <div class="horizontal title">
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 26.25V23.75C25 22.4239 24.4732 21.1521 23.5355 20.2145C22.5979 19.2768 21.3261 18.75 20 18.75H10C8.67392 18.75 7.40215 19.2768 6.46447 20.2145C5.52678 21.1521 5 22.4239 5 23.75V26.25M20 8.75C20 11.5114 17.7614 13.75 15 13.75C12.2386 13.75 10 11.5114 10 8.75C10 5.98858 12.2386 3.75 15 3.75C17.7614 3.75 20 5.98858 20 8.75Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <input type='text' placeholder='Nome completo' value={name} onChange={setName}></input>
                    </div>
                </div>
                <div className='bloco'>
                    <div class="horizontal title">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.5 7.5C27.5 6.125 26.375 5 25 5H5C3.625 5 2.5 6.125 2.5 7.5M27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5M27.5 7.5L15 16.25L2.5 7.5" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <input type='text' placeholder='Seu e-mail' value={email} onChange={setEmail}></input>
                    </div>
                </div>
                <Link to='/cadastro_usuario/2'>
                    <button type='submit' className='border horizontal'><p>Continuar</p></button>
                </Link>
                <div>

                </div>
            </section>
        </>
     )
   }
   else {
     return(
        <>
            <section className="bottom">
                <h3>Criar conta de explorador</h3>
                <div className='bloco'>
                    <div class="horizontal title">
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 26.25V23.75C25 22.4239 24.4732 21.1521 23.5355 20.2145C22.5979 19.2768 21.3261 18.75 20 18.75H10C8.67392 18.75 7.40215 19.2768 6.46447 20.2145C5.52678 21.1521 5 22.4239 5 23.75V26.25M20 8.75C20 11.5114 17.7614 13.75 15 13.75C12.2386 13.75 10 11.5114 10 8.75C10 5.98858 12.2386 3.75 15 3.75C17.7614 3.75 20 5.98858 20 8.75Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <input type='text' placeholder='Nome completo' value={name} onChange={setName}></input>
                    </div>
                </div>
                <div className='bloco'>
                    <div class="horizontal title">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.5 7.5C27.5 6.125 26.375 5 25 5H5C3.625 5 2.5 6.125 2.5 7.5M27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5M27.5 7.5L15 16.25L2.5 7.5" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <input type='text' placeholder='Seu e-mail' value={email} onChange={setEmail}></input>
                    </div>
                </div>
                <Link to='/cadastro_usuario/2'>
                    <button type='submit' className='border horizontal'><p>Continuar</p></button>
                </Link>                
                <div>

                </div>
            </section>
        </>
     )
   }
}

export default Cadastro_Usuario1