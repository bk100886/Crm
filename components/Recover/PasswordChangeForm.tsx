import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Form, Message, Segment, Container } from 'semantic-ui-react'
interface IProps {
    email:string
    onSuccess:()=>void
}

interface IState {
    errorMessage: string,
    code:string,
    password1:string,
    password2:string,
    loading:boolean
}

export default class RegisterForm extends React.Component<IProps, IState>{
    constructor(props:IProps){
    super(props)
    this.state={
        errorMessage:"",
        code:"",
        password1:"",
        password2:"",
        loading:false
    }
  }

  onSubmit=()=>{
    this.setState({errorMessage:""});
    this.setState({password1:"", password2:""});

    if (this.state.password1=="" ||
        this.state.password2==""){
          return;
        }
    if (this.state.password1!==this.state.password2){
      this.setState({errorMessage:"Пароли не совпадают"});
      this.setState({password1:"", password2:""});
      return;
    }

    this.setState({loading:true});
    setTimeout(() => {
      this.props.onSuccess();
      this.setState({loading:false});
    }, 2000);
   
  }

  

  onCodeChange=(value:string)=>{
    this.setState({code:value});
  }

  onPassword1Change=(value:string)=>{
    this.setState({password1:value});
  }

  onPassword2Change=(value:string)=>{
    this.setState({password2:value});
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
                fluid icon='key' 
                iconPosition='left' 
                placeholder='Код безопасности' 
                required 
                onChange={event=>this.onCodeChange(event.target.value)}/>

              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Новый пароль'
                type='password'
                required
                value={this.state.password1}
                onChange={event=>this.onPassword1Change(event.target.value)}/>

              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Подтверждение пароля'
                type='password'
                required
                value={this.state.password2}
                onChange={event=>this.onPassword2Change(event.target.value)}/>

              <Button 
                primary 
                fluid
                onClick={()=>this.onSubmit()}>
                Изменить пароль
              </Button>
            </Form>
        </Segment>
      </div>
      
    );
  }

}
