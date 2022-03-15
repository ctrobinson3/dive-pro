import { useState } from 'react';
import jsPDF from 'jspdf';
import DiveCardLandscape from '../Img/DiveCardLandscape.png'




const DiveCardSix = (props) => {
    const { back, infoData, diveData } = props
    //Set Data
    const name = infoData.diverName
    const team = infoData.team
    const coach = infoData.coach
    const meet = infoData.meet
    const date = infoData.date

    //Dives
    const d1 = diveData.vol1
    const d2 = diveData.opt1
    const d3 = diveData.opt2
    const d4 = diveData.opt3
    const d5 = diveData.opt4
    const d6 = diveData.opt5
    const printInfo = (d) => {
        if (d === 'invalid dive')
            return <div className="invalid-text"> (empty) </div>
        else
            return <div> {d.direction} {d.rotation} {d.position} DD: {d.difficulty}</div>
    }

    //Position    
    const pos = [d1, d2, d3, d4, d5, d6]
    const divePos = pos.map(d => {
        if (d.position === 'Straight')
            return ('a')
        else if (d.position === 'Pike')
            return ('b')
        else if (d.position === 'Tuck')
            return ('c')
        else if (d.position === 'Free')
            return ('d')
        else
            return ('')
    })

    //Download PDF
    const [docName, setDocName] = useState('')

    const onChange = (e) => {
        const newValue = e.target.value
        setDocName(newValue)
    }

    function printDocument() {
        var doc = new jsPDF('l', 'mm', [297, 210])
        var imgData = DiveCardLandscape

        doc.addImage(imgData, 'PNG', 0, 0, 297, 210)
        //(width, height, text)
        //info
        doc.setFont('Courier')
        doc.setFontSize(10)
        doc.text(29, 16, name)
        doc.text(33, 20.5, team)
        doc.text(30.6, 24.8, coach)
        doc.text(163, 16, meet)
        doc.text(163, 20.5, date)
        doc.text(165.5, 25, '1-Meter, 6 Dive')
        //dives
        //dive one
        doc.text(50, 50, d1.direction)
        // doc.text(65, 50, d1.rotation)
        // doc.text(80, 50, d1.position)
        // doc.text(95, 50, d1.difficulty)

        doc.save(docName)
    }


    return (<>
        <div className="profile">
            <h1>Six Dives</h1>
            <div>
                <h1>Information:</h1>
                <div>Diver's Name: {name}</div>
                <div>Team: {team}</div>
                <div>Coach: {coach}</div>
                <div>Meet: {meet}</div>
                <div>Date: {date}</div>
                <h1>Dive List:</h1>
                <div>
                    First Dive(Voluntary): {printInfo(d1)}
                </div>
                <div>
                    Second Dive: {printInfo(d2)}
                </div>
                <div>
                    Third Dive: {printInfo(d3)}
                </div>
                <div>
                    Fourth Dive: {printInfo(d4)}
                </div>
                <div>
                    Fifth Dive: {printInfo(d5)}
                </div>
                <div>
                    Second Dive: {printInfo(d6)}
                </div>
            </div>
            <div>
                <h1>Name PDF:</h1>
                <input className="formInput" onChange={onChange}></input>
            </div>
            <button type="button" className="primaryButton createListingButton" onClick={printDocument}>Download Dive Card</button>
            <button type="button" className="primaryButton createListingButton" onClick={back}>Back</button>
        </div>
    </>
    )
}

export default DiveCardSix





















/* <div className="dc-head">
    <p className="dc-content">{infoData.meet}</p>
    <p className="dc-content"> 1-Meter, 6 Dives </p>
    <p className="dc-content">{infoData.date}</p>
</div>
<div className="dc-info">
    <p className="dc-info-content">{infoData.diverName}</p>
    <p className="dc-info-content">{infoData.team}</p>
    <p className="dc-info-content">{infoData.coach}</p>
</div> */