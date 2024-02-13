import React, {useState} from 'react';
import BodiesSelector from "./components/bodies-selector/Bodies-selector";
import Gravity from "./components/gravity/Gravity";
import IsPlanet from "./components/isPlanet/IsPlanet";
import BodyInfo from "./components/body-info/BodyInfo";

const App = () => {
    const [selectedBody, setSelectedBody] = useState(null);
    const [isPlanet, setIsPlanet] = useState(false);
    const [gravity, setGravity] = useState(12.5);
    const handleCheckChange = (isChecked) => {
        setIsPlanet(isChecked);
        setSelectedBody(null);
    }
    const handleGravityChange = (gravityValue) => {
        setGravity(gravityValue)
    }
    const handleSelect = (body) => {
        setSelectedBody(body);
    };
    return (
        <div className="App">
            <div className="app-container">
                <div className="title">
                    <h2>
                        RHOBS Challenge
                    </h2>
                </div>
                <div className="container1">
                    <IsPlanet onCheckboxChange={handleCheckChange}/>
                    <Gravity changeGravity={handleGravityChange}/>
                </div>
                <BodiesSelector isPlanet={isPlanet} gravity={gravity} onSelect={handleSelect}/>
                <BodyInfo body={selectedBody}/>
            </div>
        </div>
    );
}
export default App

