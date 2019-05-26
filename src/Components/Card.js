import React, { Component } from 'react';

const Card = (props) =>  (
    <div className="container text-center text-white" id="leagues">
        <div className="row">
            <div className="col-12 padding-bottom-30">
                <h2>{props.name}</h2>
                <img src={`../Images/${props.imgLink}.png`} alt=""/>
            </div>
        </div>
        <div className="row padding-bottom-30">
            <div className="offset-1 col-1">
                <img src="../Images/logos/Serie-A/Small/Inter.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Atalanta.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Juventus.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Inter.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Atalanta.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Juventus.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Inter.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Atalanta.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Juventus.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Juventus.png"/>
            </div>    
        </div>


        <div className="row">
            <div className="offset-1 col-1">
                <img src="../Images/logos/Serie-A/Small/Inter.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Atalanta.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Juventus.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Inter.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Atalanta.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Juventus.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Juventus.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Inter.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Atalanta.png"/>
            </div>
            <div className="col-1">
                <img src="../Images/logos/Serie-A/Small/Juventus.png"/>
            </div>
            
        </div>
    </div>
  );

  export default Card;

 