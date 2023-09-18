import React from 'react'
import { List } from '../menus/List'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'

function Menu() {
  return (
      <div className='menu'>
          <h1>Our Menu</h1>
          <div className='menu-list'>
              {List.map((menuItem, key) => {
                  return <MenuItem
                      key={key}
                      image={menuItem.image}
                      name={menuItem.name}
                      price={menuItem.price} />
              })}
          </div>
    </div>
  )
}

export default Menu
