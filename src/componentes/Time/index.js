import Colaborador from '../Colaborador/Index'
import './Time.css'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && 
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.corSecundaria} className='input-cor' type='color'/>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => {
                    return <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} cor={props.corPrimaria} aoDeletar={props.aoDeletar}/>
                })}
            </div>
        </section>
    )
}

export default Time