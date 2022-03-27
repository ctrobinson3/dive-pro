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
    const position = pos.map(d => {
        if (d.position === 'Straight')
            return ('Str.')
        else if (d.position === 'Pike')
            return ('Pike')
        else if (d.position === 'Tuck')
            return ('Tuck')
        else if (d.position === 'Free')
            return ('Free')
        else
            return ('')
    })

    //DDs
    const optdifficulty = (parseFloat(d2.difficulty) + parseFloat(d3.difficulty) + parseFloat(d4.difficulty) + parseFloat(d5.difficulty) + parseFloat(d6.difficulty))
    function financial(x) {
        return x.toFixed(1)
    }
    const finalDD = financial(optdifficulty)
    var volDifficulty = ''
    const dv = parseFloat(d1.difficulty)
    if (dv > 1.8)
        volDifficulty = 1.8
    else
        volDifficulty = d1.difficulty




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
        doc.text(name, 29, 16)
        doc.text(team, 33, 20.5)
        doc.text(coach, 30.6, 24.8)
        doc.text(meet, 163, 16)
        doc.text(date, 163, 20.5)
        doc.text('1-Meter, 6 Dive', 165.5, 25)
        //dives
        //dive one
        doc.text(d1.num + divePos[0], 26, 67)
        doc.text(d1.direction + " " + d1.rotation, 41, 67,)
        doc.text(position[0], 99, 67)
        doc.text('' + volDifficulty, 115, 67)
        //dive two
        doc.text(d2.num + divePos[1], 26, 77)
        doc.text(d2.direction + " " + d2.rotation, 41, 77,)
        doc.text(position[1], 99, 77)
        doc.text(d2.difficulty, 115, 77)
        //dive three
        doc.text(d3.num + divePos[2], 26, 86.5)
        doc.text(d3.direction + " " + d3.rotation, 41, 86.5,)
        doc.text(position[2], 99, 86.5)
        doc.text(d3.difficulty, 115, 86.5)
        //dive four
        doc.text(d4.num + divePos[3], 26, 96)
        doc.text(d4.direction + " " + d4.rotation, 41, 96,)
        doc.text(position[3], 99, 96)
        doc.text(d4.difficulty, 115, 96)
        //dive five
        doc.text(d5.num + divePos[4], 26, 106)
        doc.text(d5.direction + " " + d5.rotation, 41, 106,)
        doc.text(position[4], 99, 106)
        doc.text(d5.difficulty, 115, 106)
        //dive six
        doc.text(d6.num + divePos[5], 26, 116)
        doc.text(d6.direction + " " + d6.rotation, 41, 116,)
        doc.text(position[5], 99, 116)
        doc.text(d6.difficulty, 115, 116)
        //Vol dd
        doc.text("" + volDifficulty, 87, 132.7)
        //Opt dd
        doc.text("" + finalDD, 109, 132.7)


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