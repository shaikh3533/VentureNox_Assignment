import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './UI/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Routs/Blog';
import { legacy_createStore } from 'redux';
import BlogDetail from './Routs/BlogDetail';
import Reducers from './Redux/Reducers';
import { Provider } from 'react-redux'

function App() {

  const store = legacy_createStore(Reducers)
  store.subscribe(() => {
    console.log('current state', store.getState());
  });
  store.dispatch({
    type: 'INCREMENT',
    id:'1'
  });


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/Blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
