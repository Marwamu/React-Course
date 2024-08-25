import { useState } from "react";
import "./index.css";
import BlogList from "./BlogLIst";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem Ex dolore proident est mollit voluptate Lorem proident occaecat veniam adipisicing.",
      author: "mario",
      id: 0,
    },
    {
      title: "Welcome party",
      body: "lorem Ex dolore proident est mollit voluptate Lorem proident occaecat veniam adipisicing.",
      author: "yoshi",
      id: 1,
    },
    {
      title: "Web dev top tips",
      body: "lorem Ex dolore proident est mollit voluptate Lorem proident occaecat veniam adipisicing.",
      author: "mario",
      id: 2,
    },
  ]);

  return( 
    <div className="home">
  <BlogList blogs={blogs}  title='All Blogs!'/>
  <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')}  title="Mario's blogs"/>
    </div>


  );
};

export default Home;
