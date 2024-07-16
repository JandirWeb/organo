import './SocialsMedia.css'

const SocialsMedia = (props) => {
    return(
        <div className='socials-media'>
            <a href={props.facebook} title='Facebook' target='_blank' rel="noreferrer">
                <img src='./imagens/fb.png' alt='Facebook'/>
            </a>
            <a href={props.twitter} title='Twitter' target='_blank' rel="noreferrer">
                <img src='./imagens/tw.png' alt='Twitter'/>
            </a>
            <a href={props.instagram} title='Instagram' target='_blank' rel="noreferrer">
                <img src='./imagens/ig.png' alt='Instagram'/>
            </a>
        </div>
    )
}

export default SocialsMedia