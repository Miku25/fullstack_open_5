import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import Blog from './components/Blog'
import loginService from './services/login'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import  { useField } from './hooks/index'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [newLikes, setNewLikes] = useState(0)
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  //const [username, setUsername] = useState('')
  //const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => setBlogs(initialBlogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (username, password) => {
    console.log(typeof username)
    console.log(typeof password)
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }

  const handleLikesChange = (event) => {
    setNewLikes(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()
    blogFormRef.current.toggleVisibility()

    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: newLikes,
    }

    blogService
      .create(blogObject)
      .then(data => {
        setBlogs(blogs.concat(data))
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
        setNewLikes(0)
        setSuccessMessage(`Successfully added blog ${blogObject.title}`)
        setTimeout(() => {setSuccessMessage(null)}, 5000)
      })
  }

  const loginForm = () => (
    <LoginForm
      handleLogin = {handleLogin}
    />
  )

  const blogFormRef = React.createRef()

  const blogForm = () => (
    <Togglable buttonLabel="new blog" ref={blogFormRef}>
      <BlogForm
        onSubmit = {addBlog}
        handleTitleChange = {handleTitleChange}
        handleAuthorChange = {handleAuthorChange}
        handleLikesChange = {handleLikesChange}
        handleUrlChange = {handleUrlChange}
        titleValue = {newTitle}
        authorValue = {newAuthor}
        urlValue = {newUrl}
        likesValue = {newLikes}
      />
    </Togglable>
  )

  const logout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    window.location.reload()
    //setSuccessMessage('Logout successful')
  }

  const BlogList = () => {
    const sortedBlogs = blogs.sort((a, b) => (a.likes > b.likes) ? -1 : 1)
    return (
      sortedBlogs.map(blog => {
        return (
          <Blog key={blog.id} blog={blog} user={user} />
        )
      })
    )
  }

  return (
    <div>
      <Notification style='successStyle' notification={successMessage} />
      <Notification style='errorStyle' notification={errorMessage} />
      {user === null
        ? loginForm()
        : <div>
          <p>{user.name} logged in <button onClick={logout}>logout</button> </p>
          {blogForm()}
          <br></br>
          <BlogList />
        </div>
      }
    </div>
  )
}

export default App
