import React from 'react';


const erStyles = {
    display:"flex",
    color:'white', 
    height:"100vh", 
    fontSize:'30px', 
    backgroundColor:"black", 
    justifyContent:"center", 
    alignItems:"center", 
    flexDirection:"column"
}

const Er = () => {
    return (
        <div>
            <div style={erStyles}>
                <h1 >Erreur 404 ! </h1>
                <div>:x </div>
            </div>
        </div>
    );
};

export default Er;