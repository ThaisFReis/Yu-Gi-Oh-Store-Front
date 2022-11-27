import { createContext, useState } from "react";
const userContext = createContext();


function UserProvider({ children }) {
    const [user, setUser] = useState("");

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}

export default userContext;
export { UserProvider };