import React from "react";

const LoginPage = () => {
  return (
    <section className="container">
      <div className="max-w-[600px] mx-auto border border-solid flex items-center justify-center flex-col gap-10 bg-slate-100 ">
        <div className="py-3 px-8 bg-red-400 text-white rounded-sm mt-10 font-bold">
          Sign In With Google
        </div>
        <div className="py-3 px-8 bg-black text-white rounded-sm font-bold ">
          Sign In With Google
        </div>
        <div className="py-3 px-8 bg-purple-500 text-white rounded-sm mb-10 font-bold">
          Sign In With Google
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
