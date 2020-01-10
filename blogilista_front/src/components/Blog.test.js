import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Blog from './Blog'

afterEach(cleanup)

test('renders Blog correctly', () => {

  const validBlog = {
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    id: "5a422aa71b54a676234d17g9"
    }

  const component = render(
    <Blog blog={validBlog} />
  )

  component.debug()

  const div = component.container.querySelector('.contentDiv')
  expect(div).toHaveTextContent('Go To Statement Considered Harmful')
})

test('renders Blog correctly, this should fail', () => {

    const validBlog = {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      id: "5a422aa71b54a676234d17g9"
      }
  
    const component = render(
      <Blog blog={validBlog} />
    )
  
    component.debug()
  
    const div = component.container.querySelector('.contentDiv')
    expect(div).toHaveTextContent('added')
  })

  test('renders Blog correctly, clicks it, and get more info', () => {

    const validBlog = {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      id: "5a422aa71b54a676234d17g9",
      user: {name: "akjsfashfa"}
      }

    
  
    const component = render(
      <Blog blog={validBlog} />
    )

    fireEvent.click(component.container.querySelector('.contentDiv'))
  
    const div = component.container.querySelector('.contentDiv')
    expect(div).toHaveTextContent('added')
  })
