"use client";
import React, { useState } from "react";
import Image from "next/image";
// import "quill/dist/quill.bubble.css"; // For bubble theme
// import ReactQuill from "react-quill-new";

const WritePage = () => {
  return (
    <section className="container relative">
      {/* <div className="">
        <input
          type="text"
          placeholder="Title"
          className="flex text-4xl font-bold mb-10"
        />
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="h-[30px] w-[30px] flex items-center justify-center rounded-full border border-solid"
          >
            <Image
              src={"/plus.png"}
              alt=""
              width={16}
              height={16}
              className=""
            />
          </button>
          {open && (
            <div className="absolute top-0 left-[50px] flex gap-5">
              <button>
                <Image
                  src={"/image.png"}
                  width={16}
                  height={16}
                  alt=""
                  className="h-[30px] w-[30px] flex items-center justify-center rounded-full border border-solid"
                />
              </button>
              <button>
                <Image
                  src={"/external.png"}
                  width={16}
                  height={16}
                  alt=""
                  className="h-[30px] w-[30px] flex items-center justify-center rounded-full border border-solid"
                />
              </button>
              <button>
                <Image
                  src={"/video.png"}
                  width={16}
                  height={16}
                  alt=""
                  className="h-[30px] w-[30px] flex items-center justify-center rounded-full border border-solid"
                />
              </button>
            </div>
          )}
          <ReactQuill
            theme="bubble"
            value={value}
            onChange={setvalue}
            placeholder="Tell Your story..."
            className="text-xl border border-solid mt-8"
          />
        </div>
      </div> */}
      <div>
        <button className="absolute top-0 right-0">Publish</button>
      </div>
    </section>
  );
};

export default WritePage;
