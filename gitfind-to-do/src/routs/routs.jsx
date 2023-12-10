import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

import Saves from '../pages/Salved';


export default function AppRoute() {
  return (
    <div>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/Salved"} element={<Saves />} />
      </Routes>
    </div>
  );
}