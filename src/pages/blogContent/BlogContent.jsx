import React from "react";
import { TiPlusOutline } from "react-icons/ti";

const BlogContent = () => {
  return (
    <div>
      <div className=" mt-8 ml-8 mr-8">
        <div className="flex align-middle justify-between">
          <p className="text-3xl">Blogs</p>
          <form action="">
            <label htmlFor="">
              <div className="flex flex-row align-middle text-xl text-black space-x-3 border-0 bg-[#0f0] rounded-3xl pl-3 pr-3 pt-1 pb-1 mb-16 cursor-pointer">
                <p>Post</p>

                <TiPlusOutline />
              </div>
            </label>
          </form>
        </div>
        <div className="grid grid-cols-3">
          <p>Hello 1</p>
          <p>Hello 2</p>
          <p>Hello 3</p>
          <p>Hello 4</p>
          <p>Hello 5</p>
          <p>Hello 6</p>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
