import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {useState} from 'react'
import { Button, Form, Message, Segment, Container } from 'semantic-ui-react'
import * as validators from '../../utils/validator'
interface IProps {
    email:string
    onSuccess:()=>void
}

export default function PasswordChangeForm(props:IProps){
  const [errorMessage, setErrorMessage] = useState("");
  const [code, setCode] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const onPasswordChangeClick=()=>{
    setErrorMessage("");
    if (code=="" || password1=="" ||password2==""){
          return;
    }
    const passwordValidationResult = validators.validatePassword(password1);
    if (passwordValidationResult!==""){
      setErrorMessage(passwordValidationResult);
      setPassword1("");
      setPassword2("");
      return;
    }

    const passwordsCompareResult = validators.validatePasswords(password1, password2);
    if (passwordsCompareResult!==""){
      setErrorMessage(passwordsCompareResult);
      setPassword1("");
      setPassword2("");
      return;
    }
  
    setLoading(true);
    setTimeout(() => {
      props.onSuccess();
      setLoading(false);
    }, 2000);
  }
  return(
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
                fluid icon='key' 
                iconPosition='left' 
                placeholder='Код безопасности' 
                required 
                onChange={event=>setCode(event.target.value)}/>

              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Новый пароль'
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
                onClick={()=>onPasswordChangeClick()}>
                Изменить пароль
              </Button>
            </Form>
        </Segment>
      </div>
  );
}



  

