import React, {useState} from 'react';
import './index.css';
import './menu.css';

const Header: React.FC = () => {

    let imgnome = 'https://media.discordapp.net/attachments/704458768519528532/897997999530197052/of__4_-removebg-preview_5.png?width=512&height=205'
    let imglogo = "https://media.discordapp.net/attachments/704458768519528532/897998031067181056/image_49.png"

    
        const [active, setMode] = useState(false);
        const ToggleMode = () => {
            setMode(!active);
        
        }
    return (
        <div className="head">

            <img id="logo" src={imglogo} alt="Logo" />
            <img id="nome" src={imgnome} alt="Nome Hotel" />

            

            <div className='App'> 
                <div className={active ? 'icon iconActive': 'icon'} onClick={ToggleMode} >
                <div className= 'hamburguer hamburguerIcon'></div>
            </div>
                <div className={active ? 'menu menuOpen': 'menuClose'}>
                    <div className='list'>
                        <ul className='listItems'>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Home</li>
                            <br/>
                            <li>Histórico de reservas</li>
                            <br/>
                            <li>Quartos visitados</li>
                            <br/>
                            <li>Perfil</li>
                        </ul>
                    </div>    
                </div>
                </div>

        </div>

    );
}
export default Header;