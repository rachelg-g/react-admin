import React from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import UserList from './User'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={ListGuesser} />
      <Resource name="users" list={UserList} />
    </Admin>
  )
}

export default App
