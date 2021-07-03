import Main from './pages/Main';
import Footer from './components/Footer';
import Category from './pages/Category';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/reset.scss';
import { useState } from 'react';
function App() {
  const [selectedPage, setSelectedPage] = useState('main');

  const buttonList = [
    { title: '홈', color: 'red', onClick: () => setSelectedPage('main') },
    { title: '검색', color: 'blue', onClick: () => {} },
    {
      title: '카테고리',
      color: 'yellow',
      onClick: () => setSelectedPage('category'),
    },
    {
      title: '내글',
      color: 'green',
      onClick: () => {},
    },
  ];
  return (
    <div>
      <Header />
      <Router>
        <Route path='/category'>
          <Category />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
