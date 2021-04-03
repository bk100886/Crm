import Layout from '../components/Layout'
import RegisterForm from '../components/Register/RegisterForm'
import {Grid} from 'semantic-ui-react'

const RegisterPage = () => (
  <Layout title="Регистрация в системе">
    <Grid textAlign='center'  verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <RegisterForm/>
      </Grid.Column>
    </Grid>
  </Layout>
)

export default RegisterPage
