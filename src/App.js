import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="App">
     {/* Header */}
     <Header />
       {/* Tinder cards */}
       <TinderCards />
         {/*  Swipe Buttons*/}
    </div>
  );
}

export default App;
