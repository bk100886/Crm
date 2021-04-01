import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Message, Segment, Container } from 'semantic-ui-react'
import { validateEmail } from '../../utils/EmailValidator'

interface IProps {
  onSuccess:(email:string) => void;
}

interface IState {
    errorMessage: string,
    email:string,
    sent:boolean,
    loading:boolean
}

export default class CodeSendForm extends React.Component<IProps, IState>{
    constructor(props:IProps){
    super(props)
    this.state={
        errorMessage:"",
        email:"",
        sent:false,
        loading:false
    }
  }

  onSendClick=()=>{
    this.setState({errorMessage:""});
    if (this.state.email===""){
      return;
    }
    if (!validateEmail(this.state.email)){
      this.setState({errorMessage:"Некорректный формат адреса электронной почты"});
      return;
    }
    this.setState({loading:true});
    setTimeout(() => {
      this.setState({sent:true});
      this.setState({loading:false});
    }, 2000);
    
  }

  onEmailChange=(value:string)=>{
    this.setState({email:value});
  }
  
  render() {
    return (
      <div>
           {this.state.sent ?
              <Segment basic>
                <Message success>
                  <Container textAlign="left">
                    Код безопасности успешно отправлен на электронную почту по адресу <strong>{this.state.email}</strong>
                  </Container>
                </Message>
                <Button 
                    primary 
                    fluid
                    onClick={()=>this.props.onSuccess(this.state.email)}>
                    Смена пароля
                  </Button>
              </Segment>
              :
              <Segment basic loading={this.state.loading}>
                {this.state.errorMessage==="" ? null :
                <Message error>
                  <Container textAlign="left">
                    {this.state.errorMessage}
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
                    onChange={event=>this.onEmailChange(event.target.value)}/>

                  <Button 
                    primary 
                    fluid
                    onClick={()=>this.onSendClick()}>
                    Отправить код
                  </Button>
                </Form>
                </Segment>
            }
      </div>
    );
  }

}
