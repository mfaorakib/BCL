import logo from './logo.svg';
import './App.css';
import data from './components/Fakedata/data.json'
import { useEffect, useState } from 'react';
import PlayerDetails from './components/PlayerDetails/PlayerDetails';
import BuyPlayer from './components/BuyPlayer/BuyPlayer';

function App() {
  

  const [Players, setPlayers] = useState([])
  const [select, setSelect] = useState([])
  useEffect(() => {
    setPlayers(data)
  }, [])


  // useState(props)
  const HandlePlayer=(PlayerName)=>{
     const newSelect = [...select,PlayerName]
     setSelect(newSelect)
    
  }
  return (
    <div className="App">

      <div className="pageFormat">
        <h1> Bangladesh Club League</h1>
        <h1>Total Player : {Players.length}</h1>
         
        
        <div className='playerInfo'>
          {
            Players.map(playerDetails => <PlayerDetails
              PlayerName={playerDetails.name}
              PlayerImg={playerDetails.image}
              PlayerSalary={playerDetails.salary}

              HandleAddplayer={HandlePlayer}
              >
            </PlayerDetails>)
          }
        </div>
        <div className='ClubCart'> 
        
          {
           <BuyPlayer Details={select}></BuyPlayer>
            
            }
            
            
        </div>

      </div>

    </div>
  );
}

export default App;
