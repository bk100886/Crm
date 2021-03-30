import React, { ReactNode } from 'react'
import { Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Link from 'next/link'
import Head from 'next/head'
import UnauthorizedNavMenu from './UnauthorizedNavMenu'



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
    </Head>
    <header>
      <nav>
        <UnauthorizedNavMenu></UnauthorizedNavMenu>
      </nav>
      <Header as='h1' textAlign="center">{h1}</Header>
      <br/>
    </header>
    {children}
    <footer>
    </footer>
  </div>
)

export default Layout
