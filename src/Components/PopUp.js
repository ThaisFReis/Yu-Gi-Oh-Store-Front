import { Button, Grid, Header, Popup } from 'semantic-ui-react';
import exemploCarta from "../Assets/Images/download.jpeg";

// css
import '../Assets/Styles/PopUp.css';

export default function PopupWindow() {
    return (
        <Popup trigger={<p>Carrinho</p>} position="bottom left" style={{marginTop: "3vh"}}>
            <Grid.Column textAlign='center' className='popUp'>
                <Header as='h4'>Basic Plan</Header>
                <p>
                    <b>2</b> projects, $10 a month
                </p>
                <Button>Choose</Button>
            </Grid.Column>
            <Grid.Column textAlign='center' className='popUp'>
                <Header as='h4'>Basic Plan</Header>
                <p>
                    <b>2</b> projects, $10 a month
                </p>
                <Button>Choose</Button>
            </Grid.Column>
        </Popup>
    )
}