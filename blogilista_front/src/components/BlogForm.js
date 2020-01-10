import React from 'react'

const BlogForm = ( { onSubmit,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange,
  handleLikesChange,
  titleValue,
  authorValue,
  urlValue,
  likesValue }) => (


  <form onSubmit={onSubmit}>
    <div>
        Title&nbsp;
      <input
        value={titleValue}
        onChange={handleTitleChange}
      />
    </div>
    <div>
        Author&nbsp;
      <input
        value={authorValue}
        onChange={handleAuthorChange}
      />
    </div>
    <div>
        Url&nbsp;
      <input
        value={urlValue}
        onChange={handleUrlChange}
      />
    </div>
    <div>
        Likes&nbsp;
      <input
        value={likesValue}
        onChange={handleLikesChange}
      />
    </div>
    <br></br>
    <button type="submit">save</button>
  </form>
)

export default BlogForm
