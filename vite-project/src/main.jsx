import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import NotFound from './components/NotFound.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom'; // ✅ Changed to createHashRouter
import BookList from './components/BookList.jsx';
import BookDetails from './components/BookDetails.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddBookPage from './components/AddBookPage.jsx';

const appRouter = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <BookList />,
      },
      {
        path: '/book/:id',
        element: <BookDetails />,
      },
      {
        path: '/books/:category',
        element: <BookList />,
      },
      {
        path: '/add-book',
        element: <AddBookPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
