import React, { Suspense } from "react";

export default function App() {
  return (
    <>
      <Suspense fallback={<div>"hi"</div>}>
        <div>App</div>
      </Suspense>
    </>
  );
}
