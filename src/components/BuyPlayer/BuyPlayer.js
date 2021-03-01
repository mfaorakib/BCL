import React from 'react';
import './BuyPlayer.css';

 
const BuyPlayer = (props) => {
    const player= props.Details
   let total = 0;
  for (let i = 0; i < player.length; i++) {
  const PlayerDetails = player[i];
    total= total + parseInt(PlayerDetails.PlayerSalary) ;

// // const total=player.reduce((total,plr) => total+plr.PlayerSalary,0)
  }
 // const total=player.reduce((total,plr) => total+ plr.PlayerSalary,0)
    //console.log(props.Details.PlayerName); 
    return ( 
        <div className="ClubCart">
            <h3>Buying Player : {props.Details.length}</h3>
            <h2>Total Club Budget: ${total}</h2>
             {
                player.map(details =>
                    <div className="Cart">
                       <h3>Name: {details.PlayerName}</h3> 
                        <p>Salary : ${details.PlayerSalary}</p> 
                        {/* <p>total : {total}</p> */}
                    </div> 
                     
                    )
             } 
            
        </div>
        
    );
};

export default BuyPlayer;