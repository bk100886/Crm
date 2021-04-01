import React from 'react'
import Link from 'next/link'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Message, Segment, Container } from 'semantic-ui-react'

interface IProps {
  
}

interface IState {
  errorMessage: string,
  email:string,
  password:string
}

export default class LoginForm extends React.Component<IProps, IState>{
  constructor(props:IProps){
    super(props)
    this.state={
      errorMessage:"",
      email:"",
      password:""
    }
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onSubmit=()=>{
    this.setState({errorMessage:"Не удалось выполнить вход с указанными учетными данными"});
  }
  onEmailChange=(value:string)=>{
    this.setState({email:value});
  }
  onPasswordChange=(value:string)=>{
    this.setState({email:value});
  }
  
  render() {
    return (
      <div>
        <Grid textAlign='center'  verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
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
          <Message>
              Впервые в системе? <Link href="/register"><a>Зарегистироваться</a></Link>
          </Message>
          <Message>
              <Link href="/recover"><a>Восстановить доступ</a></Link>
          </Message>
          </Segment>
        </Grid.Column>
      </Grid>
      </div>
      
    );
  }

}
