import CardList from "@/components/cardlist/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";

const BlogPage = () => {
  return (
    <section className="container">
      <div className="bg-red-400 py-2 rounded-sm text-white text-3xl text-center">
        <h1 className="font-bold ">Style Blogs</h1>
      </div>
      <div className="grid grid-cols-6">
        <CardList />
        <Menu />
      </div>
    </section>
  );
};

export default BlogPage;
