import { useState } from "react"
import CaixaTeste from "./CaixaTeste"

export default function Exercicio(){

    const [valor, setValor] = useState(0)

    function alterar(){
        setValor(valor + 10)
    }

    return(
        <div>
            <p>Nome: {valor}</p>
            <button onClick={alterar}>Adicionar</button>
            <button onClick={()=>setValor(0)}>Remover</button>
            <CaixaTeste valor={valor} />
        </div>
    )
}