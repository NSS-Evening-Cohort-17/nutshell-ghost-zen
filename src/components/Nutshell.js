import React,  {useState} from "react"
<<<<<<< HEAD
import { Route, Link } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Nutshell.css"

export const Nutshell = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)

  const setAuthUser = (user) => {
      sessionStorage.setItem("nutshell_user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
  }

  const clearUser = () => {
      sessionStorage.clear();
      setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
  }

  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
      <ApplicationViews 
          setAuthUser={setAuthUser}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
      />
    </>
  )
}
=======
    import { Route, Link } from "react-router-dom"
    import { ApplicationViews } from "./ApplicationViews"
    import { NavBar } from "./nav/NavBar"
    import { Login } from "./auth/Login"
    import { Register } from "./auth/Register"
    import "./Nutshell.css"
    
    export const Nutshell = () => {
      const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("nutshell_user") !== null)
    
      const setAuthUser = (user) => {
          sessionStorage.setItem("nutshell_user", JSON.stringify(user))
          setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
      }
    
      const clearUser = () => {
          sessionStorage.clear();
          setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
      }
    
      return (
        <>
          <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
          <ApplicationViews 
              setAuthUser={setAuthUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
          />
        </>
      )
    }
>>>>>>> 2aece50399f8677bfb6fa61e89a248e1732652d4
