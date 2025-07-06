function Cadastro_Usuario1() {
   if (1 + 1 == 2) {
    return(
        <>
            <div>
                <h3>Criar conta de explorador e organizador</h3>
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Nome completo'></input>
                </div> 
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Seu e-mail'></input>
                </div>
                <button type='submit' className='border horizontal'><p>Continuar</p></button>
                <div>
                    
                </div>
            </div>
        </>
     )
   }
   else {
     return(
        <>
            <div>
                <h3>Criar conta de explorador</h3>
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Nome completo'></input>
                </div> 
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Seu e-mail'></input>
                </div>
                <button type='submit' className='border horizontal'><p>Continuar</p></button>
                <div>

                </div>
            </div>
        </>
     )
   }
}

export default Cadastro_Usuario1