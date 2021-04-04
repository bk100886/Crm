import {useRouter} from 'next/router'
import 'semantic-ui-css/semantic.min.css'
import { Card, Segment } from 'semantic-ui-react'


export default function InterfaceForm(){
  const router = useRouter();

  return(
    <div>
        <Segment basic>
          <Card.Group centered>
            <Card color="green" onClick={()=>router.push('/client')}>
              <Card.Content>
                <Card.Header>Клиент</Card.Header>
                <Card.Description>
                  История заказов, начисленные балы, скидки
                </Card.Description>
              </Card.Content>
            </Card>
            <Card color="yellow" onClick={()=>router.push('/operator')}>
              <Card.Content>
                <Card.Header>Оператор прачечной</Card.Header>
                <Card.Description>
                  Прием и обработка заказов, работа с клиентами
                </Card.Description>
              </Card.Content>
            </Card>
            <Card color="blue" onClick={()=>router.push('/owner')}>
              <Card.Content>
                <Card.Header>Владелец прачечной</Card.Header>
                <Card.Description>
                  Отчеты по работе с операторами, клиентами, статистика
                </Card.Description>
              </Card.Content>
            </Card>
            <Card color="red" onClick={()=>router.push('/administrator')}>
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


