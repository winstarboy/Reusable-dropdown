import React from 'react'
import { Dropdown } from './Dropdown'
import './App.scss'

const items = [
  {
    id: 1,
    value: 'Pulp Fiction',
  },
  {
    id: 2,
    value: 'The Prestige',
  },
  {
    id: 3,
    value: 'Blade Runner 2049',
  },
];

export const App = () => {
  return (
    <div className="container">
      <Dropdown title="Please select" items={items}/>
    </div>
  )
}
