
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name='og:title' content='Little Lemon' />
        <meta name='og:description' content='Little Lemon Restaurant' />
        <meta name='og:image' content='/src/little-lemon.jpg' />
      </Helmet>

      <Header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
       }
      </Header>
      <Nav>
        <ul>
          <li></li>
        </ul>
      </Nav>
      <Footer> </Footer>
    </div>
    // <div> Homepage </div>
  );
}

export default App;
