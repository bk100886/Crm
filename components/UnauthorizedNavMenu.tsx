import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import Link from 'next/link'

export default class UnauthorizedNavMenu extends Component {
  render() {
    return (
      <Menu color="blue" inverted>
        <Menu.Item header>
            <Icon name="globe"></Icon>
            CRM
        </Menu.Item>
        
        <Link href="/">
            <Menu.Item name='Index' link>
              <a>Главная</a>
            </Menu.Item>
        </Link>

        <Menu.Menu position='right'>
          <Link href="/register">
            <Menu.Item name='Register' link>
              <a>Регистрация</a>
            </Menu.Item>
          </Link>

          <Link href="/login">
            <Menu.Item name='SignUp' link>
              <a>Вход</a>
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}