import Colaborador from '../Colaborador/Index'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && 
        <section className='time' style={{ backgroundColor: hexToRgba(props.cor, '0.6') }}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.key)} value={props.cor} className='input-cor' type='color'/>
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>

            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => {
                    return <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} cor={props.cor} aoDeletar={props.aoDeletar}/>
                })}
            </div>
        </section>
    )
}

export default Time