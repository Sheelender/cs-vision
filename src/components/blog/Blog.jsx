import React, { useEffect, useState } from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import CreateBlog from "./CreateBlog"
import "./blog.css"

const Blog = ({ setName }) => {
  const [create, setCreate] = useState("yes");
  useEffect(() => {
    setName('');
  })


  return (
    <>
      <Back title='Blog Posts' create={create} setCreate={setCreate} />
      {create === "yes" && <CreateBlog />}

      {create === "no" &&
        <section className='blog padding'>
          <div className='container grid2'>
            <BlogCard />
          </div>
        </section>
      }


    </>
  )
}

export default Blog
