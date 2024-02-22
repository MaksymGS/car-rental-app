import Catalog from 'pages/Catalog';
import Favorites from 'pages/Favorites';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};
