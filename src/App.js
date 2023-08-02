import React from 'react';
import UserCard from './components/UserCard';
import axios from 'axios';
import { useState } from 'react';

const fakeUser = {
  name: {
          first: 'John',
          last: 'Doe'
        },
  picture: {
    medium:'https://randomuser.me/api/portraits/men/75.jpg'
  },
  email: 'john.doe@random.com',
 };

function App() {
  const [user, setUser] = useState(fakeUser);

  const getUser = () => {
    // Send the request
    axios
      .get('https://randomuser.me/api?nat=fr')
      // Use this data to update the state
      .then((response) => {
        console.log(response.data);
        setUser(response.data.results[0]);
      });
  };

console.log(user, 'log de user')
console.log(user.name, 'log de username')

  return (
    <div className="App">
      <UserCard
        firstname={user.name.first}
        lastname={user.name.last}
        image={user.picture.medium}
        email={user.email}
      />
      <button type="button" onClick={getUser}>Get new user</button>
    </div>
  );
}
export default App;
