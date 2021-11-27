import React from "react";
import App from "./App";
import Landing from "./Landing";
import NotFound from "./NotFound";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



const MyRouter = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/restaurant/:restaurantId" element={<App />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRouter;