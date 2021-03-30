import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import Link from 'next/link'

export default class UnauthorizedNavMenu extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item name='Home' link>
          <Icon name="globe"></Icon>
            <Link href="/">
              <a>Главная</a>
            </Link>
        </Menu.Item>

        <Menu.Item name='About' link>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </Menu.Item>

        <Menu.Item name='Users' link>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='SignUp'>
            <Link href="/login">
              <a>Войти</a>
            </Link>
          </Menu.Item>

        </Menu.Menu>
      </Menu>
    )
  }
}