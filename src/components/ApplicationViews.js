import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { ArticleList } from "./articles/ArticleList"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { AddArticleForm } from './articles/ArticleForm'
import { EditArticleForm } from './articles/EditArticleForm'
import { MessageForm } from "./Messages/MessageForm"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"


export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

  const setAuthUser = (user) => {
    sessionStorage.setItem("nutshell_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
  }

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route exact path="/register" element={<Register />} />
          
        <Route exact path="/" element={
            <PrivateRoute>
              <ArticleList />
            </PrivateRoute>
          } />


        <Route  path="/tasks" element={
            <PrivateRoute>
              <TaskList />
            </PrivateRoute>
        } />

        <Route  path="/tasks/create" element={
            <PrivateRoute>
              <TaskForm />
            </PrivateRoute>
        } />

        <Route  path="/messages" element={
            <PrivateRoute>
              <MessageForm />

            </PrivateRoute>
        } />
        <Route path="/addArticle" element={
            <PrivateRoute>
              <AddArticleForm /> 
            </PrivateRoute>
        } />
        <Route path="/:articleId/edit" element={
          <PrivateRoute>
              <EditArticleForm />
          </PrivateRoute> 
        } />
      </Routes>
    </>
  )
}