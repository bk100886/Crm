import {useState} from 'react'
import {useRouter} from 'next/router';
import 'semantic-ui-css/semantic.min.css'
import { Container, Message, Segment } from 'semantic-ui-react'
import CodeSendForm from './CodeSendForm'
import PasswordChangeForm from './PasswordChangeForm'


export default function RecoverForm(){
  const [email, setEmail] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const router = useRouter();
  let content;
  if (email===""){
    content=<CodeSendForm onSuccess={email=>setEmail(email)} />;
  }
  else
  {
    if (!passwordChanged){
      content = <PasswordChangeForm 
      email={email}
      onSuccess={()=>setPasswordChanged(true)}
      />
    }
    else{
      setTimeout(() => {
        router.push('/login');
      }, 5000);
      
      content=<Segment basic>
        <Container textAlign="left">
          <Message success>
            <strong>Пароль был успешно изменен. </strong>
            Через пару секунд вы будете направлены на форму входа в систему
          </Message> 
        </Container>
      </Segment>
      
    }
  }
  return(
    <div>
      {content}
    </div>
  );
}


