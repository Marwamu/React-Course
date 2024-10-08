
import "./index.css";
import BlogList from "./BlogLIst";
import UseFetch from "./useFetch";


const Home = () => {
const {data: blogs, isPending, error} = UseFetch("http://localhost:8000/blogs")



  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
