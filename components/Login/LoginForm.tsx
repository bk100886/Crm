import React from 'react'
import {useRouter} from 'next/router'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Message, Segment, Container } from 'semantic-ui-react'
import {useState} from 'react'
import * as api from '../../utils/api'
import { User } from '../../interfaces'


export default function LoginForm(){
  const router = useRouter();
  //const fetcher = (url:string) => fetch(url).then(res => res.json());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  async function onSubmit(){
    setErrorMessage("");
    if (email==="" || password===""){
      return;
    }
    setLoading(true);
    try {
      const result = await api.post<string, User[]>("/api/users", "");
      alert(result[2].name);
      router.push('/interface');
    } catch (error) {
      setErrorMessage("Не удалось выполнить вход с указанными учетными данными");
      setLoading(false);
    }
    
    // fetcher("http")
    // .then(
    //   result=>{
    //     alert(JSON.stringify(result));
    //   }
    // )
    // .catch(
    //   reason=>{
    //     alert(JSON.stringify(reason));
    //   }
    // )
    // const { data, error } = useSWR(
    //   "https://api.github.com/repos/vercel/swr",
    //   fetcher
    // );
  
    // if (error) {
    //   setErrorMessage("Не удалось выполнить вход с указанными учетными данными");
    //   return;
    // }
    // if (!data) {
    //   setLoading(true);
    //   return;
    // }
    
    // setTimeout(() => {
    //   router.push('/interface');
    // }, 2000);
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
                placeholder='Электронная почта'
                required
                onChange={event=>setEmail(event.target.value)} />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Пароль'
                type='password'
                required
                onChange={event=>setPassword(event.target.value)}
              />
              <Button 
                primary 
                fluid
                onClick={()=>onSubmit()}>
                Войти
              </Button>
          </Form>
          </Segment>
      </div>
  );
}
