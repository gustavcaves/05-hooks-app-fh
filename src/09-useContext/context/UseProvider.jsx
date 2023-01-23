import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   id: 123,
//   name: 'Gustav Caves',
//   email: 'gustavcaves@emailemail.com'
// }


export const UseProvider = ( { children } ) => {


    const [user, setUser] = useState()



  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user: user   }}>
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}
