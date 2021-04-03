import React from 'react'
import Router from 'next/router'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Message, Segment, Container } from 'semantic-ui-react'

interface IProps {
  
}

interface IState {
  errorMessage: string,
  email:string,
  password:string,
  loading:boolean
}

export default class LoginForm extends React.Component<IProps, IState>{
  constructor(props:IProps){
    super(props)
    this.state={
      errorMessage:"",
      email:"",
      password:"",
      loading:false
    }
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onSubmit=()=>{
    if (this.state.email==="" || this.state.password===""){
      return;
    }
    this.setState({errorMessage:""});
    this.setState({loading:true});
    setTimeout(() => {
      Router.push('/interface');
    }, 2000);
    //this.setState({errorMessage:"Не удалось выполнить вход с указанными учетными данными"});
  }
  onEmailChange=(value:string)=>{
    this.setState({email:value});
  }
  onPasswordChange=(value:string)=>{
    this.setState({password:value});
  }
  
  render() {
    return (
      <div>
       <Segment basic loading={this.state.loading}>
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
                placeholder='Электронная почта'
                required
                onChange={event=>this.onEmailChange(event.target.value)} />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Пароль'
                type='password'
                required
                onChange={event=>this.onPasswordChange(event.target.value)}
              />
              <Button 
                primary 
                fluid
                onClick={()=>this.onSubmit()}>
                Войти
              </Button>
          </Form>
          </Segment>
      </div>
    );
  }

}
