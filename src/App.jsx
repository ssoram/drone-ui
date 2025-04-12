import React from "react";
import Canvas from "./components/Canvas"; // ← 요 줄이 핵심!

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">드론 시뮬레이션</h1>
      <Canvas />
    </div>
  );
}

export default App;
