import Link from 'next/link'
import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'
import { Button, Modal } from 'semantic-ui-react'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Перейти</a>
      </Link>
    </p>
    <Modal trigger={<Button primary>Привет</Button>}>
    <p>Все очень здорово!</p>
    <p>Все очень здорово!</p>
    <p>Все очень здорово!</p>
    <p>Люблю мою лапочку!</p>
    </Modal>
    
  </Layout>
)

export default AboutPage
