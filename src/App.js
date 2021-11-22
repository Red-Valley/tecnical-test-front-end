import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage';
import  SingleCharacter  from './Pages/singleCharacter/SingleCharacter';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route path="/character/:id" element={< SingleCharacter/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
