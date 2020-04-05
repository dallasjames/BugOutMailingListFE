import React from "react"
import yurt from "./yurt.jpg"
import storageContainer from "./storageContainer.jpg"
import Pack from "./72-hourPack.jpg"

function Info() {
    return (
        <>
        <h1>Bug Out Shelter</h1>
        <p>If you experience a natural disaster such as fire, flooding, earthquake or if shit just hits the fan you can be protected.</p>
        <h2>What we offer</h2>
        <p>In the case of a disaster we lease you land for 60 days, a yurt, a 72-hour pack and a 20 foot storage container filled with food.</p>
        <div className="breakDown">
            <div>
            <img src={yurt} alt="Yurt" />
            <p>A yurt like this one is where you'll be staying while you wait out the disaster.</p>
            </div>
            <div>
            <img src={storageContainer} alt="Storage Container 8' by 8.6' by 20'" />
            <p>Your food will be stored in a 8 X 8 X 20 storage container like this one here.</p>
            </div>
            <div>
                <img src={Pack} alt="72-hour pack" />
                <p>A pack like this will be provided to you so you can bug out.</p>
            </div>
        </div>
        </>
    )
}

export default Info