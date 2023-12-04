import React from "react";
import { Link } from "react-router-dom";

const AlterarSenha = () => {
    return(
        <div className="login">
            <div className="login-div">
                <h2 className="mb-3 fs-1">Recuperação de Conta</h2>

                <input className="login-inputs" placeholder="Email"/>
                <input className="login-inputs" placeholder="Senha"/>
                <input className="login-inputs" placeholder="Confirmar Senha"/>
                {/* {<div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Sou participante
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        Sou organizador
                    </label>
                </div>} */}

                <hr />

                <div className="btn">
                    <Link to={'/alterar-senha'} className="btn-cadastro">Alterar senha</Link>
                    {/*esse btn tem que mandar a nova senha pro servidor e alterar a senha*/}
                </div>
            </div>
            <div className="btn">
                <Link to={'/login'} className="btn-cadastro">Voltar</Link>
            </div>
        </div>
    )
}

export default AlterarSenha;