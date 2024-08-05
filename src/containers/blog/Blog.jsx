import React from "react";
import './blog.css';
import blog from '../../assets/Blog.png';

const Blog = () => (

    <div className="greenup_blog" id="blog">
      <p>By specializing in textile waste, Green Up plays a crucial role in the recycling and upcycling of materials, contributing to a more sustainable and circular economy. The company's operations not only help reduce textile waste but also promote the reuse of materials, reducing the environmental impact of the fashion and textile industry.</p>
      <img src={blog} alt="Blog" />

  </div>
);

export default Blog;
