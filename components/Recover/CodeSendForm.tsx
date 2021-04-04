import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {useState} from 'react'
import { Button, Form, Message, Segment, Container } from 'semantic-ui-react'
import * as validators from '../../utils/validator'

interface IProps {
  onSuccess:(email:string) => void;
}

export default function CodeSendForm(props:IProps){
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSendClick=()=>{
    setErrorMessage("");
    if (email===""){
      return;
    }
    const emailValidationResult = validators.validateEmail(email);
    if (emailValidationResult!==""){
      setErrorMessage(emailValidationResult);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 2000);
  }
  return(
    <div>
      {sent ?
        <Segment basic>
          <Message success>
            <Container textAlign="left">
              Код безопасности успешно отправлен на электронную почту по адресу <strong>{email}</strong>
            </Container>
          </Message>
          <Button 
              primary 
              fluid
              onClick={()=>props.onSuccess(email)}>
              Смена пароля
            </Button>
        </Segment>
        :
        <Segment basic loading={loading}>
          {errorMessage==="" ? null :
          <Message error>
            <Container textAlign="left">
              {errorMessage}
            </Container>
          </Message>
          }
          <Message info>
            <Container textAlign="left">
              Укажите заданный при регистрации адрес электронной почты. На этот адрес будет отправлен код безопасности для восстанановления доступа.
            </Container>
          </Message>
          <Form>
            <Form.Input 
              fluid icon='mail' 
              iconPosition='left' 
              placeholder='Электронная почта' 
              required 
              onChange={event=>setEmail(event.target.value)}/>

            <Button 
              primary 
              fluid
              onClick={()=>onSendClick()}>
              Отправить код
            </Button>
          </Form>
          </Segment>
      }
    </div>
  );
}
