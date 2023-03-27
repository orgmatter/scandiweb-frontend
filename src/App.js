import { Provider } from 'react-redux';
import store from './Store';
import { Routes as ROUTES } from './Routes';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './assets/sass/app-styles.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="app-cover-flex">
        <div className="app-cover-item">
          <Router>
            <Routes>
              {
                ROUTES.map((route, index) => (
                  <Route path={route.url} element={<route.component />} key={index}/>
                ))
              }
            </Routes>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
