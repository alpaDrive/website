import Modal from './assets/Modal/Modal';
import './App.css';
import { MEMBERS } from './assets/members';
import { useState } from 'react';

function App() {

  const [team, showTeam] = useState(false)

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

  const Member = ({ name, role, image }) => {
    return <div className='member'>
      <img
        src={image}
        width={150}
        height={150}
        alt='member'
      />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  }

  return (
    <div className="App">
      {team && <Modal >
        <div className='popup'>
          <div style={{ flex: 2, display: 'flex' }}>
            <div style={{ flex: 2 }} />
            <div style={{ flex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <h2>Meet the team</h2>
            </div>
            <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <div onClick={() => showTeam(false)} className='close'>
                <h1>X</h1>
              </div>
            </div>
          </div>
          <div className='members'>
            {MEMBERS.map((item, index) => {
              return <Member key={index} name={item.name} role={item.role} image={item.image} />
            })}
          </div>
        </div>
      </Modal>}
      <div className='banner'>
        <img
          src={require('./assets/img/banner.jpg')}
          alt='alpaDrive'
        />
      </div>
      <div className='body'>
        <header>
          <HeaderLink onClick={() => showTeam(true)} label={'Team'} />
          <HeaderLink onClick={() => window.open('https://github.com/alpaDrive', '_blank').focus()} label={'GitHub'} />
        </header>
        <div className='content'>
          <div className='top'>
            <div className='content'>
              <div className='bigs'>
                <h1>alpaDrive<span className='blink'>_</span></h1>
                <h2>smart infotainment for old vehicles</h2>
                <div className='buttons'>
                  <button className='primary'>watch on yt</button>
                  <button className='secondary'>github</button>
                </div>
              </div>
            </div>
            <div className='shade' />
          </div>
          <div className='bottom'>
            <div className='content'>
              <div className='cards'>
                <Card heading={'wide range of apps'} content={'the device is essentially a full-blown linux computer. this means you can run anything on it.'} />
                <Card heading={'fully open source'} content={'everything including the backend source code (except user data, ofc), is fully open source.'} />
                <Card heading={'smart dashcam'} content={'tired of dashcams that record everything? alpaDrive has a smart dashcam instead, which watches all the time but only records if something fishy happens.'} />
                <Card heading={'mobile app'} content={'you can keep in touch with yuor car from anywhere using our dedicated mobile app. not available for iOS, and only available from our GitHub repo'} />
              </div>
            </div>
            <footer>
              <p>&copy; 2024 alpaDrive. All rights reserved.</p>
              <p>source code</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
