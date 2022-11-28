import { Button, Popup } from 'semantic-ui-react';
import PopUpItem from './PopUpItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// css
import '../../Assets/Styles/PopUp.css';

export default function PopupWindow() {
    const [hasItems, setHasItems] = useState(false)
    const arrayTeste = [0, 1, 2, 3, 4];

    const offset = ({ placement, popper }) => {
        if (placement === 'center') {
            return [0, popper.height / 2]
        }

        return []
    }

    return (
        <div className='option' >
            <Popup trigger={<a>Carrinho</a>} position="bottom left" on="click" offset={offset} style={{ marginTop: "3vh" }} className='popUp'>
                {hasItems === false ? 
                <>
                    <h1>Você ainda não adicionou nada no carrinho</h1>
                    <Button><Link to="/" style={{color: "black", fontWeight: 700}}>Ir para a Home</Link></Button>
                </>
                :
                <>
                    <h1>Seu carrinho: </h1>
                    {arrayTeste.map((a) => {
                        return (
                            <PopUpItem />
                        )
                    })}
                    <Button>Fechar Compra</Button>
                </>}
            </Popup>
        </div>
    )
}