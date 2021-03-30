import React from 'react'
import Link from 'next/link'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class LoginForm extends React.Component{
  constructor(props:any){
    super(props)
  }

  render() {
    return (
      <div>
        <Grid textAlign='center'  verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size='large'>
            <Segment basic>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Электронная почта' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Пароль'
                type='password'
              />
              <Button primary fluid size='large'>
                Войти
              </Button>
              <Message>
                  Впервые в системе? <Link href="/register"><a>Зарегистироваться</a></Link>
              </Message>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      </div>
      
    );
  }

}
