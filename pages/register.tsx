import Layout from '../components/Layout'
import RegisterForm from '../components/Register/RegisterForm'
import {Grid, Segment, Message} from 'semantic-ui-react'
import Link from 'next/link'

const RegisterPage = () => (
  <Layout title="Регистрация в системе">
    <Grid textAlign='center'  verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <RegisterForm/>
        <Segment style={{"padding-top":0}}>
          <Message>
            Уже зарегистрированы? <Link href="/login"><a>Войти</a></Link>
          </Message>
        </Segment>
      </Grid.Column>
    </Grid>
  </Layout>
)

export default RegisterPage
