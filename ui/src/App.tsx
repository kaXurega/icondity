import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="containers">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
