import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {useState} from 'react'
import { Button, Form, Message, Segment, Container } from 'semantic-ui-react'
import * as validators from '../../utils/validator'

export default function RegisterForm(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit=()=>{
    if (name=="" || email=="" || password1=="" || password2==""){
      return;
    }

    const emailValidationResult =  validators.validateEmail(email);
    if (emailValidationResult!=="")
    {
      setErrorMessage(emailValidationResult);
      return;
    }

    const passwordValidationResult = validators.validatePassword(password1);
    if (passwordValidationResult!=="")
    {
      setErrorMessage(passwordValidationResult);
      setPassword1("");
      setPassword2("");
      return;
    }
    const passwordsCompareResult = validators.validatePasswords(password1, password2);
    if (passwordsCompareResult!==""){
      setErrorMessage(passwordsCompareResult);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setErrorMessage("Не удалось выполнить вход с указанными учетными данными");
    }, 2000);
    
  }

  return (
    <div>
      <Segment basic loading={loading}>
        {errorMessage==="" ? null :
        <Message error>
          <Container textAlign="left">
            {errorMessage}
          </Container>
        </Message>
        }
        <Form>
          <Form.Input 
            fluid icon='user' 
            iconPosition='left' 
            placeholder='Ваше имя' 
            required 
            onChange={event=>setName(event.target.value)}/>

          <Form.Input 
            fluid icon='mail' 
            iconPosition='left' 
            placeholder='Электронная почта' 
            required 
            onChange={event=>setEmail(event.target.value)}/>

          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Пароль'
            type='password'
            required
            value={password1}
            onChange={event=>setPassword1(event.target.value)}/>

          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Подтверждение пароля'
            type='password'
            required
            value={password2}
            onChange={event=>setPassword2(event.target.value)}/>

          <Button 
            primary 
            fluid
            onClick={()=>onSubmit()}>
            Зарегистироваться
          </Button>
        </Form>
        </Segment>
    </div>
  );
}
