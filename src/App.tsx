import React from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import UserList from './User'
import { PostList, PostEdit, PostCreate } from './Posts'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} creat={PostCreate} />
      <Resource name="users" list={UserList} />
    </Admin>
  )
}

export default App
