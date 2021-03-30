import Link from 'next/link'
import Layout from '../components/Layout'
import LoginForm from '../components/Login/LoginForm'

const LoginPage = () => (
  <Layout title="Вход в систему">
    <LoginForm/>
  </Layout>
)

export default LoginPage
