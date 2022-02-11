import './App.css';
import Header from'./Header.js';
import Content from'./Content.js'
import Footer from'./Footer.js'

function App() {
  return (
    <div className='container vh-100'>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <Content />
      </div>
      <div className="row pt-5 my-5 text-muted border-top">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
