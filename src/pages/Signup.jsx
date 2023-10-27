import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function Signup() {
   
  const [formData, setformData] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  function handleChange(e){
    setformData(
      {
        ...formData,
        [e.target.id] : e.target.value,
      }
    )
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/auth/signup', 
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    if(response.ok){
      console.log("success");
      setLoading(false);
      navigate('/signin')
    } else {
      console.log("error");
    }
  } catch(err) {
    console.log(err);
  }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-semibold my-7">Signup</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username" onChange={handleChange}></input>
        <input type="email" placeholder="Email" className="border p-3 rounded-lg" id="email" onChange={handleChange}></input>
        <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password" onChange={handleChange}></input>
        <button disabled={loading} className="bg-slate-700 broder p-3 rounded-lg text-white uppercase hover:opacity-95 disabled: opacity-80">
          {loading ? '...Loading': 'singn up'}
          </button>
      </form>
      <p className="flex gap-2 mt-5">Have an account ?
        <Link to={"/signin"}>
          <span className="text-blue-700 underline">Signin</span>
        </Link>
      </p>
    </div>
  );
}