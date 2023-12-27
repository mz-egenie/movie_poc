import Routing from './Routing'
import './App.css'
import FooterImg from './assets/footer.png'
function App() {

  return (
    <div className="main">
      <Routing/>
      <img className="footer_img" src={FooterImg} alt="" />
    </div>
  );
}

export default App;
