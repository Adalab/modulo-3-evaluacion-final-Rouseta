import "../styles/components/Header.scss";

function Header() {
    return (
        <header>
            <div className="header-title">
                <a
                    className="header-title"
                    href="https://fontmeme.com/es/fuente-de-harry-potter/"
                >
                    <img
                        src="https://fontmeme.com/permalink/220126/e0902987da096e05aee9d2f27b8628e4.png"
                        alt="fuente-de-harry-potter"
                        border="0"
                    />
                </a>
                {/* <h1 className="header-title__sub">Busca aquí a tu mago/a o muggle favorito/a</h1> */}
            </div>
        </header>
    );
}
export default Header;
