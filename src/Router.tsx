import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { Areas } from './pages/Areas';
import { Home } from './pages/Home';
import { Institutional } from './pages/Institutional';
import { Team } from './pages/Team';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/institucional' element={<Institutional />} />
        <Route path='/equipe' element={<Team />} />
        <Route path='/areas-de-atuacao' element={<Areas />} />
      </Route>
    </Routes>
  );
}
