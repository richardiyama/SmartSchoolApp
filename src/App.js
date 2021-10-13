import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import { PostList } from './posts';
import { UserList } from './users';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="users" list={UserList} />
          <Resource name="posts" list={PostList} />
      </Admin>
  );

export default App;