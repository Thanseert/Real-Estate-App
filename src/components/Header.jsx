import React from "react";

export default function Header() {
  return (
    <header className='bg-slate-200'>
        <div>
            <h1>
                <span>Reel</span>
                <span>Estate</span>
            </h1>
            <form>
                <input type="text" placeholder="search..."></input>
            </form>
        </div>
    </header>
  );
}

