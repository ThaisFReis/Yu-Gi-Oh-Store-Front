import { Button, Grid, Header, Popup } from 'semantic-ui-react';
import exemploCarta from "../Assets/Images/download.jpeg";

//css
import "../Assets/Styles/PopUpItem.css"

export default function popUpItem() {
    return (
        <Grid.Column textAlign='center' className='popUpItem' >
            <Header as='h4'>exemplo de carta</Header>
            <div className='popUpContent'>
                <img src={exemploCarta} />
                <div className='description' >
                    <li><strong>Nome: </strong> Seiasfknasfklla </li>
                    <li><strong>Categoria: </strong> Seiasfknasfklla </li>
                    <li><strong>Preço: </strong> Seiasfknasfklla </li>
                </div>
            </div>
            <div className='breakLine' />
        </Grid.Column>
    )
}
