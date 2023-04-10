import "./Footer.css"
import { AiFillFacebook, AiFillYoutube, AiFillGithub } from "react-icons/ai"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://github.com/DiegoSoriaArg" target="_blank" rel="noreferrer">
                <AiFillGithub style={{color: "white", fontSize: "50px"}} />
            </a>
            <a href="https://www.facebook.com/SoriaDev" target="_blank" rel="noreferrer">
                <AiFillFacebook style={{color: "white", fontSize: "50px"}} />
            </a>
            <a href="https://www.youtube.com/@soria-dev3.14" target="_blank" rel="noreferrer">
                <AiFillYoutube style={{color: "white", fontSize: "50px"}} />
            </a>
        </div>
        <img src="/img/Logo.png" alt="Logo" />
        <strong>Desarrollado por <a href="https://soriadev.netlify.app" target="_blank" rel="noreferrer">Soria-Dev</a></strong>
    </footer>
}

export default Footer;