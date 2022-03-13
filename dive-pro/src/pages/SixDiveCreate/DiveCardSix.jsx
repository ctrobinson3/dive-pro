import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './SixDiveCard.css'

const DiveCardSix = (props) => {
    //Download PDF
    const [docName, setDocName] = useState('')

    const onChange = (e) => {
        const newValue = e.target.value
        setDocName(newValue)
    }

    function printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(docName);
            })
            ;
    }

    //Dive Info
    const { back, infoData, diveData } = props
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

    return (<>
        <div className="profile">
            <h1>Six Dives</h1>
            <div>
                <h1>yer feckin name?</h1>
                <div>Diver's Name: {infoData.diverName}</div>
                <div>Team: {infoData.team}</div>
                <div>Coach: {infoData.coach}</div>
                <div>Meet: {infoData.meet}</div>
                <div>Date: {infoData.date}</div>
                <h1>yer feckin lest eh?</h1>
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
                <h1>Name Download:</h1>
                <input className="formInput" onChange={onChange}></input>
            </div>
            <button type="button" className="primaryButton createListingButton" onClick={printDocument}>Download Dive Card</button>
            <button type="button" className="primaryButton createListingButton" onClick={back}>Back</button>
        </div>

        <div id="divToPrint" className="mt4" {...({})}>
            <div className="table-div">
                <table className="infoTable-top">
                    <thead>
                        <tr className="top-row">
                            <th className="top-row-1">Diver</th>
                            <th className="top-row-2">Meet</th>
                            <th className="top-row-3">Date</th>
                            <th className="top-row-4">Dive Order</th>
                        </tr>
                        <tr>
                            <th>{infoData.diverName}</th>
                            <th>{infoData.meet}</th>
                            <th>{infoData.date}</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
                <table className="infoTable-bottom">
                    <thead>
                        <tr>
                            <th className="bottom-row-1">Team</th>
                            <th className="bottom-row-2">Event</th>
                            <th className="bottom-row-3">Coach</th>
                            <th className="bottom-row-4">List Check</th>
                        </tr>
                        <tr>
                            <th>{infoData.team}</th>
                            <th>One Meter</th>
                            <th>{infoData.coach}</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </>
    )
}

export default DiveCardSix