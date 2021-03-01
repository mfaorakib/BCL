import React from 'react';
import './PlayerDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


//import BuyPlayer from './components/BuyPlayer/BuyPlayer';

const PlayerDetails = (props) => {
const handlePlayer = props.HandleAddplayer;
    return (
      
        <div className="PlayerDetails">
            <div className="PlayerBuy">
            <img src={props.PlayerImg}/>
            <h5>Name: {props.PlayerName}</h5>
             <p>Salary : ${props.PlayerSalary}</p>
            <button onClick={()=>handlePlayer(props)} className="buyButton"><FontAwesomeIcon icon={faPlus} />BuyPlayer</button>
           
            </div>
    
        </div>
       
        
    );
};

export default PlayerDetails;