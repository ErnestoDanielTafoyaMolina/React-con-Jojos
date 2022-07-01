import './App.css';
import { Header, Article } from './components/index_components';
function App() {
  return (
    <div className="App">

        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Header />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12'>
            <Article />
            </div> 
          </div>
        </div>
        
    </div>
  );
}

export default App;
