const DiveCardSix = (props) => {
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

    return (
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
            <button type="button" className="primaryButton createListingButton">Download Dive Card</button>
            <button type="button" className="primaryButton createListingButton" onClick={back}>Back</button>
        </div>
    )
}

export default DiveCardSix