
import './App.css';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <p style={{color:'royalblue', textDecoration:'underline',textShadow:'2px 2px 3px red',fontSize:'35px'}}>Hello Everyone!!!</p>
      <Header name='priyanka' last='dhawale'/>
      <Header name='riya' last='jain'/>
      <Header name='kiara' last='advani'/>
      <Header name='priti' last='zinta'/>
      
 
    </div>
  );
}

export default App;
