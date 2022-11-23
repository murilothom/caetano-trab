import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { Areas } from './pages/Areas';
import { Home } from './pages/Home';
import { Team } from './pages/Team';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/equipe' element={<Team />} />
        <Route path='/areas-de-atuacao' element={<Areas />} />
      </Route>
    </Routes>
  );
}
