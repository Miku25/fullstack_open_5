import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog, user }) => {
  const [visible, setVisible] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const handleClick = () => {
    blogService.updateLike(blog.id)
    setTimeout(() => {window.location.reload()}, 200)    
  }

  const handleRemove = () => {
    if(window.confirm(`remove blog ${blog.title} by ${blog.author}?`)) {
      blogService.removeOne(blog.id)
      setTimeout(() => {window.location.reload()}, 200)
    }  
  }

  if (blog.user === undefined) {
    blog.user = {name: 'unknown user'}
  }
  
  const removeButtonVisible = () => {
    if (blog.user.name === user.name) {
      return (
        <button onClick={handleRemove} type="button">remove</button>
      )
    }
  }

  if (user === undefined) {
    user = {name: 'sjdkghjskdhgksdd'}
  }

  const visibilityRendering = () => {
    if(visible) {
      return (
        <div style={blogStyle}> 
            <div onClick={() => setVisible(false)} className='contentDiv'>
              {blog.title} {blog.author}
              <br></br>
              {blog.url}
              <br></br>
              {blog.likes} &nbsp; <button onClick={handleClick} type="button">like</button>
              <br></br>
              added by {blog.user.name}
              <br></br>
              {removeButtonVisible()}
            </div>
          </div>
      )
    } else {
        return (
          <div style={blogStyle}> 
            <div onClick={() => setVisible(true)} className='contentDiv'>
              {blog.title} {blog.author}
            </div>
          </div>
        )
      }
    }

  return (
    <div>
      {visibilityRendering()}
    </div>
)}

export default Blog