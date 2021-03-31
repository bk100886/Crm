import React from 'react'
import Link from 'next/link'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Message, Segment, Icon, Container } from 'semantic-ui-react'

interface IProps {
  
}

interface IState {
    errorMessage: string
}

export default class RegisterForm extends React.Component<IProps, IState>{
    constructor(props:IProps){
    super(props)
    this.state={
        errorMessage:""
    }
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
              <Icon name='exclamation' />
              {this.state.errorMessage}
            </Container>
          </Message>
          }
          <Form>
            <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='Ваше имя' 
              required />

            <Form.Input 
              fluid icon='mail' 
              iconPosition='left' 
              placeholder='Электронная почта' 
              required />

            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Пароль'
              type='password'
              required
            />

            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Подтверждение пароля'
              type='password'
              required
            />

            <Button primary fluid>
              Зарегистироваться
            </Button>
          </Form>
          <Message>
              Уже зарегистрированы? <Link href="/login"><a>Войти</a></Link>
          </Message>
          </Segment>
        </Grid.Column>
      </Grid>
      </div>
      
    );
  }

}
