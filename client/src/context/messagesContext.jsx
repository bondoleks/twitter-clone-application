import {createContext, useState} from 'react';

export const MessagesContext = createContext(null);

export const MessagesContextProvider = ({ children }) => {

  const [filter, setFilter] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const mockedUsers = [
    {
      id: 1,
      name: 'Jack',
      date: 'Jan 9, 2014',
      hashtag: 'jacktheuser',
      followers: 100,
      following: 20
    },
    {
      id: 2,
      name: 'Michael',
      date: 'Jan 7, 2014',
      hashtag: 'michaeltheuser',
      followers: 15,
      following: 10
    },
    {
      id: 3,
      name: 'John',
      date: 'July 20, 2014',
      hashtag: 'johntheuser',
      followers: 1000,
      following: 200
    }
  ];

  const handleFindUser = (user) => {
    setFilter(user)
    const filtered = mockedUsers.filter(({name}) => name.toLowerCase().includes(user.toLowerCase()))
    setFilteredUsers(filtered)
    return filtered;
  }

  const handleResetFilteredUsers = () => setFilteredUsers([]);

  const handleDeleteSelectedUser = (userName) => {
    const filtered = selectedUsers.filter(({name}) => name !== userName)
    setSelectedUsers(filtered)
  }


  return (
    <MessagesContext.Provider value={{
      mockedUsers,
      filteredUsers,
      handleFindUser,
      filter,
      handleDeleteSelectedUser,
      setSelectedUsers,
      selectedUsers,
      handleResetFilteredUsers,
    }}>
      {children}
    </MessagesContext.Provider>
  )

}
