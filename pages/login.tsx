import Layout from '../components/Layout'
import LoginForm from '../components/Login/LoginForm'
import {Grid} from 'semantic-ui-react'

const LoginPage = () => (
  <Layout title="Вход в систему">
     <Grid textAlign='center'  verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <LoginForm/>
        </Grid.Column>
      </Grid>
  </Layout>
)

export default LoginPage
