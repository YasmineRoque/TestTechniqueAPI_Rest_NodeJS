// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Product from "./components/Product";

// function App() {
//   return (
//     <Router>
//       {/* <Navbar /> */}
//       <Route path="/" exact component={Product} />
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";

export default function App() {
  return (
    <Routes>
      <Route path="/" component={<Product />} />
    </Routes>
  );
}
