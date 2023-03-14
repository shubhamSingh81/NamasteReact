import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Shubham",
        email: "shubham@gmail.com",
    }
})

export default UserContext;