import React, {  } from 'react'
import Router from 'next/router'
import 'semantic-ui-css/semantic.min.css'
import { Container, Message, Grid, Segment } from 'semantic-ui-react'
import CodeSendForm from './CodeSendForm'
import PasswordChangeForm from './PasswordChangeForm'
interface IProps {

}

interface IState {
    passwordChanged:boolean,
    email:string
}

export default class RecoverForm extends React.Component<IProps, IState>{
  constructor(props:IProps){
    super(props)
    this.state={
      passwordChanged:false,
      email:""
    }
  }

  onCodeSend=(email:string)=>{
    this.setState({email:email})
  }

  onPasswordChange=()=>{
    this.setState({passwordChanged:true})
  }
  render() {
    let content;
    if (this.state.email===""){
      content=<CodeSendForm onSuccess={email=>this.onCodeSend(email)} />;
    }else{
      if (!this.state.passwordChanged){
        content = <PasswordChangeForm 
        email={this.state.email}
        onSuccess={()=>this.onPasswordChange()}
        />
      }else{
        setTimeout(() => {
          Router.push('/login');
        }, 5000);
       
        content=
        <Segment basic>
          <Container textAlign="left">
            <Message success>
              <strong>Пароль был успешно изменен.</strong>
              Через пару секунд вы будете направлены на форму входа в систему
            </Message> 
          </Container>
        </Segment>
        
      }
    }
    return (
       <Grid textAlign='center'  verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            {content}
          </Grid.Column>
        </Grid>
    );
  }

}
