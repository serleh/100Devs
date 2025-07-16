//

// const today = new Date();
// function formatDate(date) {
//   return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
// }

// export default function TodoList() {
//   const name = "Serlehjr";

//   return <h1>To Do List for {formatDate(today)}</h1>;
// }

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert("Playing")}
//       onUploadImage={() => alert("Uploading")}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>Play Movie</Button>
//       <Button onClick={onUploadImage}>Upload Image</Button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }

import { useState } from "react";
import { sculptureList } from "./assets/data";

export default function Gallery() {}
