// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="bot" src= "/img/navbar.png"></img>
      <div className="txt">
      <a className="fis"> Back</a>
      <h1 className="h1">Sign in with myGov</h1>
      <p className="p" >Choose how to sign in from these 2 options</p>
      <h2>Using your myGov sign in details</h2>
      </div>
      <div className="cont">
      <label className="labels"><strong>Username or email</strong></label><br></br>
      <input className="input" type={Text}></input><br></br>
      <a className="labelf"  >forgot password</a><br></br>
      <div className="pass">
      <label className="labelp"><strong>password</strong></label><br></br>
      <input className="input" type={Text} ></input><br></br>
      <a className="labelf"  >forgot password</a><br></br>
      </div>
      <div className="btnc">
        <button className="btn" >Sign in</button><br></br>
        <p className="p2"><a className="ash">Create a myGov account</a>  if you don't have one already.</p>
        
      </div>
      <img className="line" src= "/img/line.png"></img>
      </div>
      <h2 className="h4">Using your myGovID Digital Identity</h2>
      <p className="p4">What is <a className="anch">Digital Identity</a> and <a className="anch">myGovID?</a></p>
      <button className="btn" >Continue with digital identity</button><br></br>
      <p className="p0"></p>
      <img className="bot" src= "/img/bot.png"></img>
      
      
    </div>
  );
}

export default App;
