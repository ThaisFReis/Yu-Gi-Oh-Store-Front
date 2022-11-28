import axios from 'axios';
import { useEffect, useContext } from 'react';
import { Button, Grid, Header, Popup } from 'semantic-ui-react';
import exemploCarta from "../../Assets/Images/download.jpeg";
import { authContext } from '../../Contexts/authContext'; 
//css
import "../../Assets/Styles/PopUpItem.css"

export default function PopUpItem({item}) {

    const {token} = useContext(authContext);

    function removeFromCard(id){
        axios.delete(`https://yu-gi-oh-api.onrender.com/products/${id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    }
    return (
        <Grid.Column textAlign='center' className='popUpItem' >
            <Header as='h4'>exemplo de carta</Header>
            <div className='popUpContent'>
                <img src={exemploCarta} />
                <div className='description' >
                    <li><strong>Nome: </strong>{item.name}</li>
                    <li><strong>Categoria: </strong> {item.category} </li>
                    <li><strong>Preço: </strong> {item.price} </li>
                </div>
                <ion-icon name="trash-outline" onclick={() => removeFromCard(item._id)} ></ion-icon>
            </div>
            <div className='breakLine' />
        </Grid.Column>
    )
}
