import './App.css';
import { useState } from 'react';
import { CARDS } from './assets/cards';
import Team from './components/Team';

function App() {

  const [team, showTeam] = useState(false)
  const openGitHub = () => window.open('https://github.com/alpaDrive', '_blank').focus()

  const HeaderLink = ({ label, onClick }) => {
    return <div onClick={onClick} className='link'>
      <p>{label}</p>
    </div>
  }

  const Card = ({ heading, content }) => {
    return <div className='card' >
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  }

  return (
    <div className="App">
      {team && <Team onClose={() => showTeam(false)} />}
      <div className='banner'>
        <img
          src={require('./assets/img/banner.jpg')}
          alt='alpaDrive'
        />
      </div>
      <div className='body'>
        <header>
          <HeaderLink onClick={() => showTeam(true)} label={'Team'} />
          <HeaderLink onClick={openGitHub} label={'GitHub'} />
        </header>
        <div className='content'>
          <div className='top'>
            <div className='content'>
              <div className='bigs'>
                <h1>alpaDrive<span className='blink'>_</span></h1>
                <h2>smart infotainment for old vehicles</h2>
                <div className='buttons'>
                  <button onClick={() => window.open('https://youtu.be/ECYxNBjZ998', '_blank').focus()} className='primary'>watch on yt</button>
                  <button onClick={openGitHub} className='secondary'>github</button>
                </div>
              </div>
            </div>
            <div className='shade' />
          </div>
          <div className='bottom'>
            <div className='content'>
              <div className='cards'>
                {CARDS.map((item, index) => {
                  return <Card key={index} heading={item.heading} content={item.content} />
                })}
              </div>
            </div>
            <footer>
              <p>&copy; 2024 alpaDrive. All rights reserved.</p>
              <p onClick={openGitHub} >source code</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
