import './App.css';

function App() {

  const HeaderLink = ({ label }) => {
    return <div className='link'>
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
      <div className='banner'>
        <img
          src={require('./assets/img/banner.jpg')}
          alt='alpaDrive'
        />
      </div>
      <div className='body'>
        <header>
          <HeaderLink label={'Team'} />
          <HeaderLink label={'GitHub'} />
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
