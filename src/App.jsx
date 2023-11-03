import React from "react";
import { Hero, Navbar, Companies, Flowers, Achievement, Categories, Feedback, Call, Footer } from "./components";
import "./app.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Flowers />
      <Achievement />
      <Categories/>
      <Feedback/>
      <Call/>
      <Footer/>
    </div>
  );
};

export default App;
