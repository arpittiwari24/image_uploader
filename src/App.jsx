import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"
import Gallery from "./Gallery";

const App = () =>  {

  return (
   <BrowserRouter>
   <Routes>
    <Route index element= {< HomePage />}/>
    <Route path="/" element= {< HomePage />}/>
    <Route path="/gallery" element= {< Gallery />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
