import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
