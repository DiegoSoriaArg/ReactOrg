import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/SoriaDev">
                <img src="/img/facebook.png" alt="Facebook Soria Dev" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="Logo" />
        <strong>Desarrollado por <a href="https://www.facebook.com/SoriaDev" target="_blank" rel="noreferrer">Soria-Dev</a></strong>
    </footer>
}

export default Footer;