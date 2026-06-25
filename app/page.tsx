"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="root">
      <img
        src="/favicon.svg"
        alt="Roboticela DevKit"
        className="app-logo"
      />
      <h1>Roboticela DevKit</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>app/page.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}
