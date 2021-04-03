import React from 'react'
import Router from 'next/router'
import 'semantic-ui-css/semantic.min.css'
import { Card, Segment } from 'semantic-ui-react'

interface IProps {
  
}

interface IState {
  
}

export default class InterfaceForm extends React.Component<IProps, IState>{
  constructor(props:IProps){
    super(props)
    this.state={
     
    }
 }
  
  render() {
    return (
      <div>
        <Segment basic>
          <Card.Group centered>
            <Card color="green" onClick={()=>Router.push('/client')}>
              <Card.Content>
                <Card.Header>Клиент</Card.Header>
                <Card.Description>
                  История заказов, начисленные балы, скидки
                </Card.Description>
              </Card.Content>
            </Card>
            <Card color="blue" onClick={()=>Router.push('/operator')}>
              <Card.Content>
                <Card.Header>Оператор прачечной</Card.Header>
                <Card.Description>
                  Прием и обработка заказов, работа с клиентами
                </Card.Description>
              </Card.Content>
            </Card>
            <Card color="orange" onClick={()=>Router.push('/owner')}>
              <Card.Content>
                <Card.Header>Владелец прачечной</Card.Header>
                <Card.Description>
                  Отчеты по работе с операторами, клиентами, статистика
                </Card.Description>
              </Card.Content>
            </Card>
            <Card color="red" onClick={()=>Router.push('/administrator')}>
              <Card.Content>
                <Card.Header>Администратор Crm</Card.Header>
                <Card.Description>
                  Администрирование системы Crm, отчетность, финансы
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Segment>
      </div>
    );
  }

}
