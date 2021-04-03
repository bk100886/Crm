import React, { ReactNode } from 'react'
import { Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Styles from './Layout.module.css'
import Head from 'next/head'
import NavMenu from './NavMenu'



type Props = {
  children?: ReactNode
  title?: string
  h1? :string
}

const Layout = ({ children, title = 'This is the default title', h1 = title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <link rel="stylesheet" href="/public/site.css"/> */}
    </Head>
    <header>
      <nav>
        <NavMenu></NavMenu>
      </nav>
      <Header as='h1' textAlign="center" className={Styles.h1}>{h1}</Header>
    </header>
    {children}
    <footer>
    </footer>
  </div>
)

export default Layout
