import React from 'react';
import user from './data';
import './table.css';

const UserList = () => {
  const [users, setUsers] = React.useState(user);

  console.log(users);

  return (
    <div className='box'>
      <table>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Access</th>
        </tr>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className='row'>
                  <img src={user.avatar} alt='avatar' />
                  <div>
                    <p>
                      {user.first_name} {user.last_name}
                    </p>
                    <p>{user.email}</p>
                  </div>
                </div>
              </td>
              <td className='row2'>
                <select name='role' id='role'>
                  <option value='admin'>Admin</option>
                  <option value='owner'>Owner</option>
                </select>
              </td>
              <td className='row2'>
                <select name='role' id='role'>
                  <option value='admin'>Admin</option>
                  <option value='owner'>Owner</option>
                </select>
              </td>
              <td>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='lock-icon'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='card'>dsfdsfs</div>
    </div>
  );
};

export default UserList;
