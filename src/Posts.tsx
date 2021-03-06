import React from 'react'
import {
  Filter,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  Create,
  SelectInput,
} from 'react-admin'

const PostFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Seach" source="q" alwaysOn />
      <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </Filter>
  )
}

export const PostList = (props) => {
  return (
    <List filters={<PostFilter />} {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
  )
}

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>
}

export const PostEdit = (props) => {
  return (
    <Edit title={<PostTitle record={props} />} {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <ReferenceInput source="userId" reference="users">
          <SelectInput source="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Edit>
  )
}

export const PostCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Create>
  )
}
