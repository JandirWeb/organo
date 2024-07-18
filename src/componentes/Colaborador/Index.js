import { AiFillCloseCircle } from "react-icons/ai";
import './Colaborador.css'

const Colaborador = (props) => {
    return(
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={props.aoDeletar} />
            <div className='cabecalho' style={{background: props.cor}}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador