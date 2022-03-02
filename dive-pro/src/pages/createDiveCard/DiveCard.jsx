

const DiveCard = (props) => {
    const { dataInfo, dataList, back } = props

    //info
    const name = dataInfo.diverName
    const coach = dataInfo.coach
    const team = dataInfo.team
    const date = dataInfo.date
    const meet = dataInfo.meet

    //dives
    const dive1 = dataList.vol1
    const dive2 = dataList.opt1
    const dive3 = dataList.opt2
    const dive4 = dataList.opt3
    const dive5 = dataList.opt4
    const dive6 = dataList.opt5

    //dive number
    const p1 = dataList.vol1
    const p2 = dataList.opt1
    const p3 = dataList.opt2
    const p4 = dataList.opt3
    const p5 = dataList.opt4
    const p6 = dataList.opt5
    const pos = [p1, p2, p3, p4, p5, p6]
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

    //generate pdf



    return (
        <>
            <div className="card-container">
                <table className="card-table">
                    <thread className="top-thread">
                        <tr className="tr-1">
                            <th className="long-dc">Diver:
                                <table className="entry-dc">
                                    <th className="entry-dc">{name}</th>
                                </table>
                            </th>
                            <th className="long-dc">Meet:
                                <table className="entry-dc">
                                    <th className="entry-dc">{meet}</th>
                                </table></th>
                            <th className="short-dc">Date:
                                <table className="entry-dc">
                                    <th className="entry-dc">{date}</th>
                                </table></th>
                            <th className="short-dc">Dive Order:</th>
                        </tr>
                        <tr className="tr-2">
                            <th>Coach:
                                <table className="entry-dc">
                                    <th className="entry-dc">{coach}</th>
                                </table>
                            </th>

                            <th>Team:
                                <table className="entry-dc">
                                    <th className="entry-dc">{team}</th>
                                </table>
                            </th>

                            <th>Event:
                                <table className="entry-dc">
                                    <th className="entry-dc">1-Meter, 6 Dive</th>
                                </table>
                            </th>

                            <th>List Check:
                                <table className="entry-dc">
                                    <th className="entry-dc"></th>
                                </table>
                            </th>

                        </tr>
                    </thread>
                </table>
                <table className="judges-scores-table">
                    <thread className="judges-scores-thread">
                        <tr className="judges-scores-tr">
                            <th className="judges-scores-th">JUDGES SCORES</th>
                        </tr>
                    </thread>
                </table>
                <table className="dive-card">
                    <thread className="dive-card-top">
                        <tr className="tr-4">
                            <th></th>
                            <th>Dive #</th>
                            <th className="description-dc">Description</th>
                            <th>Pos.</th>
                            <th>DD</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>NET</th>
                            <th className="total-text">TOTALS</th>
                        </tr>
                        <tr className="first-dive">
                            <th>1</th>
                            <th>{dive1.num}{divePos[0]}</th>
                            <th>{dive1.direction} {dive1.rotation}</th>
                            <th>{dive1.position}</th>
                            <th>{dive1.difficulty}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="totals-cell">
                                <table className="totals-table">
                                    <tr>
                                        <th className="totals"></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                    </tr>
                                </table>
                            </th>
                        </tr>
                        <tr className="second-dive">
                            <th>2</th>
                            <th>{dive2.num}{divePos[1]}</th>
                            <th>{dive2.direction} {dive2.rotation}</th>
                            <th>{dive2.position}</th>
                            <th>{dive2.difficulty}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="totals-cell">
                                <table className="totals-table">
                                    <tr>
                                        <th className="totals"></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                    </tr>
                                </table>
                            </th>
                        </tr>
                        <tr className="third-dive">
                            <th>3</th>
                            <th>{dive3.num}{divePos[2]}</th>
                            <th>{dive3.direction} {dive3.rotation}</th>
                            <th>{dive3.position}</th>
                            <th>{dive3.difficulty}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="totals-cell">
                                <table className="totals-table">
                                    <tr>
                                        <th className="totals"></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                    </tr>
                                </table>
                            </th>
                        </tr>
                        <tr className="fourth-dive">
                            <th>4</th>
                            <th>{dive4.num}{divePos[3]}</th>
                            <th>{dive4.direction} {dive4.rotation}</th>
                            <th>{dive4.position}</th>
                            <th>{dive4.difficulty}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="totals-cell">
                                <table className="totals-table">
                                    <tr>
                                        <th className="totals"></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                    </tr>
                                </table>
                            </th>
                        </tr>
                        <tr className="fifth-dive">
                            <th>5</th>
                            <th>{dive5.num}{divePos[4]}</th>
                            <th>{dive5.direction} {dive5.rotation}</th>
                            <th>{dive5.position}</th>
                            <th>{dive5.difficulty}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="totals-cell">
                                <table className="totals-table">
                                    <tr>
                                        <th className="totals"></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                    </tr>
                                </table>
                            </th>
                        </tr>
                        <tr className="sixth-dive">
                            <th>6</th>
                            <th>{dive6.num}{divePos[5]}</th>
                            <th>{dive6.direction} {dive6.rotation}</th>
                            <th>{dive6.position}</th>
                            <th>{dive6.difficulty}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="totals-cell">
                                <table className="totals-table">
                                    <tr>
                                        <th className="totals"></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                        <th className="totals-bottom"></th>
                                    </tr>
                                </table>
                            </th>
                        </tr>
                    </thread>
                </table>
            </div>
            <button type="button" className="primaryButton createListingButton">Generate</button>
            <button type="button" className="primaryButton createListingButton" onClick={back}>Back to Dive Check</button>
        </>
    )
}

export default DiveCard