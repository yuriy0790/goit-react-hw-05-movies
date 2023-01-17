import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle';

import Layout from './components/Layout/Layout';
import Movies from './pages/Movies/Movies';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
// const Home = lazy(() => import('./pages/Home/Home'));
// const Movies = lazy(() => import('./pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./components/Cast/Cast'));
// const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
