import Layout from '../components/Layout'
import LoginForm from '../components/Login/LoginForm'
import Link from 'next/link'
import {Grid, Segment, Message} from 'semantic-ui-react'

const LoginPage = () => (
  <div>
    <Layout title="Вход в систему">
        <Grid textAlign='center'  verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450}}>
              <LoginForm/>
              <Segment style={{"padding-top":0}} basic>
                <Message>
                    Впервые в системе? <Link href="/register"><a>Зарегистироваться</a></Link>
                </Message>
                <Message>
                    <Link href="/recover"><a>Восстановить доступ</a></Link>
                </Message>
              </Segment>
            </Grid.Column>
          </Grid>
      </Layout>
  </div>
  
)

export default LoginPage
