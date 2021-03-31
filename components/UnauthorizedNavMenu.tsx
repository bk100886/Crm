import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import Router from 'next/router'

export default class UnauthorizedNavMenu extends Component {
  render() {
    return (
      <Menu color="blue" inverted>
        <Menu.Item header>
            <Icon name="globe"></Icon>
            CRM
        </Menu.Item>
        
        <Menu.Item 
            name='Главная' 
            link
            onClick={()=>Router.push('/')}>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item 
            name='Регистрация' 
            link
            onClick={()=>Router.push('/register')}>
          </Menu.Item>
          
          <Menu.Item 
            name='Вход' 
            link
            onClick={()=>Router.push('/login')}>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}