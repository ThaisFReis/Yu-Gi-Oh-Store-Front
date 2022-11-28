import { Button, Popup } from 'semantic-ui-react';
import PopUpItem from './PopUpItem';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// css
import '../../Assets/Styles/PopUp.css';
import axios from 'axios';

export default function PopupWindow({hasItems, setHasItems}) {
    
    const [carrinho, setCarrinho] = useState([])
    useEffect(() => {
        axios.get("https://yu-gi-oh-api.onrender.com/products/cart")
        .then((res)=>{
            setHasItems(true)
            setCarrinho(res.data)
        })

    }, [])

    const offset = ({ placement, popper }) => {
        if (placement === 'center') {
            return [0, popper.height / 2]
        }

        return []
    }

    return (
        <div className='option' >
            <Popup trigger={<ion-icon name="cart-outline"></ion-icon>} position="bottom left" on="click" offset={offset} style={{ marginTop: "3vh" }} className='popUp'>
                {hasItems === false ? 
                <>
                    <h1>Você ainda não adicionou nada no carrinho</h1>
                    <Button><Link to="/" style={{color: "black", fontWeight: 700}}>Ir para a Home</Link></Button>
                </>
                :
                <>
                    <h1>Seu carrinho: </h1>
                    {carrinho.map((item) => {
                        return (
                            <PopUpItem item={item} />
                        )
                    })}
                    <Button>Fechar Compra</Button>
                </>}
            </Popup>
        </div>
    )
}