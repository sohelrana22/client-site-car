import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";


export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const AllContexts = useFirebase();
    const {caritem} = useServices()

    const data ={AllContexts, caritem}

  return(
    <AuthContext.Provider value={data}>{children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;