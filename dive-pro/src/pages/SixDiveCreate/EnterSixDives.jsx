import React, { useState } from "react"
import "./SixDive.css"
import { diveArrayFunction } from '../../components/DiveArray'
import DiveCheck from "../../components/DiveCheck"

const EnterSixDives = (props) => {
    const { next, back, handleDiveChange, data, dataList } = props
    //Dive Modal
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    //Dive Check Array
    const diveCheck = DiveCheck
    const diveArray = diveArrayFunction()

    //Entered Dives
    const d1 = data.dive1.toLowerCase()
    const d2 = data.dive2.toLowerCase()
    const d3 = data.dive3.toLowerCase()
    const d4 = data.dive4.toLowerCase()
    const d5 = data.dive5.toLowerCase()
    const d6 = data.dive6.toLowerCase()
    const enteredDives = [d1, d2, d3, d4, d5, d6]

    //Find Dives
    const diveList = enteredDives.map(d => {
        const isValid = diveCheck.includes(d) ? true : false
        if (isValid === true) {
            const index = diveCheck.indexOf(d)
            const value = diveArray[index]
            return value

        }
        else {
            const value = 'invalid dive'
            return value
        }
    })
    //Dive Breakdown (voluntaries/optionals)
    const [v1, o1, o2, o3, o4, o5] = diveList


    //Valid List variables
    var validList = false
    var sixDives = false
    var fourCategories = false
    var noRepeat = false


    //Six Dive Check
    if (diveList.includes('invalid dive')) {
        sixDives = false
    } else { sixDives = true }
    //Four Category Check (Optionals need 4 seperate categories)
    const oCat = [o1.cat, o2.cat, o3.cat, o4.cat, o5.cat]
    const oAmt = Array.from(new Set(oCat))
    if (oAmt.length > 3) {
        fourCategories = true
    } else { fourCategories = false }
    //No Repeat Dives (Check to make sure all values in dive.num are unique)
    const dNum = [v1.num, o1.num, o2.num, o3.num, o4.num, o5.num]
    const numAmt = dNum.map((dive) => {
        return {
            count: 1,
            dive: dive
        }
    })
        .reduce((a, b) => {
            a[b.dive] = (a[b.dive] || 0) + b.count
            return a
        }, {})
    const duplicate = Object.keys(numAmt).filter((a) => numAmt[a] > 1)
    if (duplicate.length === 0) {
        noRepeat = true
    } else { noRepeat = false }

    //Attempting to get the index of duplicate dives to return to the user to show which dives are duplicated
    //still a work in progess

    dNum.forEach((dive, index) => {
        duplicate.forEach((dup) => {
            if (parseInt(dup) === dive) {
                return (diveList[index])
            }
        })
    })

    //Valid List Check
    if (sixDives && fourCategories && noRepeat) {
        validList = true
    } else { validList = false }

    //Error Messages
    const sixDiveE = () => {
        if (!sixDives)
            return <div>There were some issues with the dive numbers you entered!</div>
    }
    const fourCatE = () => {
        if (!fourCategories)
            return <div>Four categories must be represented in your optional dives!</div>
    }
    const noRepE = () => {
        if (!noRepeat)
            return <div>There are duplicate dives in your list!</div>
    }


    //Check List
    const checkList = () => {

        //Change Dives in dataList
        dataList.vol1 = diveList[0]
        dataList.opt1 = diveList[1]
        dataList.opt2 = diveList[2]
        dataList.opt3 = diveList[3]
        dataList.opt4 = diveList[4]
        dataList.opt5 = diveList[5]

        toggleModal()
        getInfo()
    }



    //Get Info
    const getInfo = (d) => {
        const dive = diveList[d]
        if (dive === 'invalid dive')
            return <div className="invalid-text" >Invalid Dive</div>
        else
            return
        // <div className="valid-text" >{dive.direction} {dive.rotation} {dive.position} DD: {dive.difficulty}</div>
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ass//////////
    return (
        <>

            <div className='profile'>
                <header className='head'>
                    <h3>(6-Dives)</h3>
                    <h1>Enter Six Dives</h1>
                </header>
                <form>
                    {/* First Dive */}
                    <div className='input-div'>
                        <label className='formLabel'>First Dive</label>
                        <p>(Voluntary Dive)</p>
                        <input
                            className='formInputName'
                            type='text'
                            id='dive1'
                            value={data.dive1}
                            onChange={handleDiveChange}
                        />
                    </div>
                    {/* Second Dive */}
                    <div className='input-div'>
                        <label className='formLabel'>Second Dive</label>
                        <input
                            className='formInputName'
                            type='text'
                            id='dive2'
                            value={data.dive2}
                            onChange={handleDiveChange}
                        />
                    </div>
                    {/* Third Dive */}
                    <div className='input-div'>
                        <label className='formLabel'>Third Dive</label>
                        <input
                            className='formInputName'
                            type='text'
                            id='dive3'
                            value={data.dive3}
                            onChange={handleDiveChange}
                        />
                    </div>
                    {/* Fourth Dive */}
                    <div className='input-div'>
                        <label className='formLabel'>Fourth Dive</label>
                        <input
                            className='formInputName'
                            type='text'
                            id='dive4'
                            value={data.dive4}
                            onChange={handleDiveChange}
                        />
                    </div>
                    {/* Fifth Dive */}
                    <div className='input-div'>
                        <label className='formLabel'>Fifth Dive</label>
                        <input
                            className='formInputName'
                            type='text'
                            id='dive5'
                            value={data.dive5}
                            onChange={handleDiveChange}
                        />
                    </div>
                    {/* Sixth Dive */}
                    <div className='input-div'>
                        <label className='formLabel'>Sixth Dive</label>
                        <input
                            className='formInputName'
                            type='text'
                            id='dive6'
                            value={data.dive6}
                            onChange={handleDiveChange}
                        />
                    </div>
                </form>
                <button
                    type="button"
                    className="primaryButton createListingButton"
                    onClick={checkList}>
                    Check List
                </button>
                <button
                    type="button"
                    className="primaryButton createListingButton"
                    onClick={back}>
                    Back
                </button>
            </div>

            {/* Modal */}
            {modal && (
                <div className='modal'>
                    <div className="overlay"></div>
                    {validList && (
                        <div className="modal-content">
                            <h2>BITCH CHECKS OUT</h2>
                            <p>SUBMIT THA SHIT</p>
                            {/* Enter List Info Here */}
                            <button
                                type="button"
                                className="close-modal"
                                onClick={toggleModal}>
                                Close
                            </button>
                            <button
                                type="button"
                                className="primaryButton createListingButton"
                                onClick={next}>
                                Submit
                            </button>
                        </div>
                    )}
                    {!validList && (
                        <div className="modal-content">
                            <h2 className="invalid-text">INVALID LIST</h2>
                            <div>{sixDiveE()}</div>
                            <div>{fourCatE()}</div>
                            <div>{noRepE()}</div>
                            {/* Enter List Info Here */}
                            <button
                                type="button"
                                className="primaryButton createListingButton"
                                onClick={toggleModal}>
                                Back
                            </button>
                            <button
                                type="button"
                                className="btn-modal"
                                onClick={next}>
                                Submit Anyway
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default EnterSixDives