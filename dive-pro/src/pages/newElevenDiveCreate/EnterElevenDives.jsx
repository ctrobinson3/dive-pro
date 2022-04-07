import { useState } from 'react'
import './ElevenDive.css'
import { diveArrayFunction } from '../../components/DiveArray'
import DiveCheck from '../../components/DiveCheck'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import RoundIndex from './Rounds/RoundIndex';

export default function EnterElevenDives({ next, back, handleEntryChange, handleDiveChange, dataEntry, dataDive, getDives, getInfo }) {
    //modal
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    //entered dives
    const d1 = dataEntry.d1.toLowerCase()
    const d1opt = dataEntry.d1opt
    const d2 = dataEntry.d2.toLowerCase()
    const d2opt = dataEntry.d2opt
    const d3 = dataEntry.d3.toLowerCase()
    const d3opt = dataEntry.d3opt
    const d4 = dataEntry.d4.toLowerCase()
    const d4opt = dataEntry.d4opt
    const d5 = dataEntry.d5.toLowerCase()
    const d5opt = dataEntry.d5opt
    const d6 = dataEntry.d6.toLowerCase()
    const d6opt = dataEntry.d6opt
    const d7 = dataEntry.d7.toLowerCase()
    const d7opt = dataEntry.d7opt
    const d8 = dataEntry.d8.toLowerCase()
    const d8opt = dataEntry.d8opt
    const d9 = dataEntry.d9.toLowerCase()
    const d9opt = dataEntry.d9opt
    const d10 = dataEntry.d10.toLowerCase()
    const d10opt = dataEntry.d10opt
    const d11 = dataEntry.d11.toLowerCase()
    const d11opt = dataEntry.d11opt
    const enteredDives = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11]

    //find dives
    const diveCheck = DiveCheck
    const diveArray = diveArrayFunction()
    const diveList = enteredDives.map(d => {
        const isValid = diveCheck.includes(d) ? true : false
        if (isValid === true) {
            const index = diveCheck.indexOf(d)
            const value = diveArray[index]
            return value

        }
        else {
            const value = diveArray[113]    //last dive in array is 'empty'
            return value
        }
    })

    //rules..........
    //change dive
    //check list
    const checkList = () => {
        dataDive.di1[0] = diveList[0]

        console.log(dataDive)
        toggleModal()
    }

    return (
        <>
            <div className='profile'>
                {/* Header */}
                <header className='head'>
                    <h3>(11-Dive)</h3>
                    <h1>Enter Eleven Dives</h1>
                </header>
                <div>
                    <RoundIndex
                        handleEntryChange={handleEntryChange}
                        dataEntry={dataEntry}
                        toggleModal={toggleModal}
                    />
                </div>

                {/* Buttons */}
                <button
                    type="button"
                    className="primaryButton createListingButton"
                    onClick={getDives}>
                    Submit
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
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <h3>Round 1</h3>
                        <p>First Dive: </p>
                        <p>{dataDive.di1[0].rotation}</p>
                        <button type="button" className="close-modal" onClick={checkList}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}
