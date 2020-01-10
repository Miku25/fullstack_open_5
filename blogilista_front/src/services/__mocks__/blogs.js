const blogs = [
    {
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 13,
        id: "5a422a851b54a676234d17f7"
    },
    {
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 6,
        id: "5a422aa71b54a676234d17f8"
    },
    {
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
        id: "5a422ba71b54a676234d17fb"
    }
  ]
  
  const getAll = () => {
    return Promise.resolve(blogs)
  }
  
  export default { getAll }