import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Message, Segment, Container } from 'semantic-ui-react'
import { validateEmail } from '../../utils/EmailValidator'
interface IProps {
  
}

interface IState {
    errorMessage: string,
    name:string,
    email:string,
    password1:string,
    password2:string
}

export default class RegisterForm extends React.Component<IProps, IState>{
    constructor(props:IProps){
    super(props)
    this.state={
        errorMessage:"",
        name:"",
        email:"",
        password1:"",
        password2:""
    }
  }

  onSubmit=()=>{
    if (this.state.name=="" ||
        this.state.email=="" ||
        this.state.password1=="" ||
        this.state.password2==""){
          return;
        }
    if (!validateEmail(this.state.email)){
      this.setState({errorMessage:"Некорректный формат адреса электронной почты"});
      return;
    }
    if (this.state.password1!==this.state.password2){
      this.setState({errorMessage:"Пароли не совпадают"});
      this.setState({password1:"", password2:""});
      return;
    }
    this.setState({errorMessage:"Не удалось выполнить вход с указанными учетными данными"});
  }

  onNameChange=(value:string)=>{
    this.setState({name:value});
  }

  onEmailChange=(value:string)=>{
    this.setState({email:value});
  }

  onPassword1Change=(value:string)=>{
    this.setState({password1:value});
  }

  onPassword2Change=(value:string)=>{
    this.setState({password2:value});
  }
  
  render() {
    return (
      <div>
        <Segment basic>
          {this.state.errorMessage==="" ? null :
          <Message error>
            <Container textAlign="left">
              {this.state.errorMessage}
            </Container>
          </Message>
          }
          <Form>
            <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='Ваше имя' 
              required 
              onChange={event=>this.onNameChange(event.target.value)}/>

            <Form.Input 
              fluid icon='mail' 
              iconPosition='left' 
              placeholder='Электронная почта' 
              required 
              onChange={event=>this.onEmailChange(event.target.value)}/>

            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Пароль'
              type='password'
              required
              value={this.state.password1}
              onChange={event=>this.onPassword1Change(event.target.value)}/>

            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Подтверждение пароля'
              type='password'
              required
              value={this.state.password2}
              onChange={event=>this.onPassword2Change(event.target.value)}/>

            <Button 
              primary 
              fluid
              onClick={()=>this.onSubmit()}>
              Зарегистироваться
            </Button>
          </Form>
          </Segment>
      </div>
    );
  }

}
