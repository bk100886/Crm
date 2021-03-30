import Link from 'next/link'
import Layout from '../components/Layout'
import LoginForm from '../components/Login/LoginForm'

const RegisterPage = () => (
  <Layout title="Регистрация в системе">
    <LoginForm/>
  </Layout>
)

export default RegisterPage
