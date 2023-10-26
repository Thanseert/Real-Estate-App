import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-semibold my-7">Signup</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username"></input>
        <input type="email" placeholder="Email" className="border p-3 rounded-lg" id="email"></input>
        <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password"></input>
        <button className="bg-slate-700 broder p-3 rounded-lg text-white uppercase hover:opacity-95 disabled: opacity-80">Sing up</button>
      </form>
      <p className="flex gap-2 mt-5">Have an account ?
        <Link to={"/signin"}>
          <span className="text-blue-700 underline">Signin</span>
        </Link>
      </p>
    </div>
  );
}