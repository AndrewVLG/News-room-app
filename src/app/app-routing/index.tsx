import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from '../../pages/layout';
import MainPage from '../../pages/main/main-page';

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route 
          index
          element={<MainPage />}
          //loader={async () => {
          //  return fetch(`https://newsapi.org/v2/top-headlines?country=ru&apiKey=d25980c6b9494497a47ba65221d3c747`)
          //}}
        />
        <Route
          path=':category'
          element={<MainPage />}
          //loader={async ({ params }) => {
          //  return fetch(`https://newsapi.org/v2/top-headlines?country=ru&category=${params.category}&apiKey=d25980c6b9494497a47ba65221d3c747`)
          //}}
        />
    </Route>
))