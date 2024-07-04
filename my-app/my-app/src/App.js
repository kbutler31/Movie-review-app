import logo from './logo.svg';
import './App.css';
// import Stores.js from './assets/'
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';
import Movies from './components/Movies';

function App() {

let reviewsData = [
  {
    id: 1,
    review: "review data here"
  },
  {
    id: 2,
    review: "more review data here"
  }
]

  return (
    <div className="App">
<Header />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

{/* Outputs the review list component */}
      <Movies/>
      <ReviewForm />
      <ReviewList reviews={reviewsData} />
    </div>
  );
}

export default App;
