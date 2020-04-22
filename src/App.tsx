import React from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import UserList from './User'
import { PostList, PostEdit, PostCreate } from './Posts'
import { Book, Group } from '@material-ui/icons'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posts"
        icon={Book}
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
      <Resource name="users" icon={Group} list={UserList} />
    </Admin>
  )
}

export default App
