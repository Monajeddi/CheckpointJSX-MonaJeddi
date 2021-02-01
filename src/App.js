import logo from './logo.svg';
import './App.css';
import './style.css';
import myImage from "./image1.jpeg"


function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
<h1 className="title red"> Your name here</h1>
<br/>
<img src={"/image2.jpeg"} alt="image2"/>
<br/>
<img src={myImage} alt ='image1' /> 
   </div>
<video width="320" height="240" controls>
   <source src="/nature.mp4" type="video/mp4"/>
</video>
     
    </div>
  );
}

export default App;
