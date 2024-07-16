import SocialsMedia from '../SocialsMedia'
import './Footer.css'

const Footer = () =>{
    return(
        <footer>
            <div className='container'>
                <SocialsMedia facebook="https://facebook.com" twitter="https://twitter.com" instagram="https://instagram.com/jandir_moreira"/>

                <div className='logo'>
                    <img src='./imagens/logo.png' alt='Organo'/>
                </div>

                <div className='developed'>
                    <p>Desenvolvido por Jandir Moreira</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer