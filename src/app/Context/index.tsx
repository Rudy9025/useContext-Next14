"use client"
import { createContext ,useContext,useState} from "react";
 
const Appcontext =createContext<any>(undefined)

export function Appwrapper({children} : {
    children: React.ReactNode;
  }) {
    const [isdarkmode, setisdarkmode] = useState(false);

    const toggleDarkMode = () => {
      setisdarkmode(!isdarkmode);
    };
       
      

      return (
        <Appcontext.Provider value={{isdarkmode,toggleDarkMode}}>
            {children}
        </Appcontext.Provider>
      )
  }

  export function useAppContext(){
    return useContext(Appcontext)
  }

 