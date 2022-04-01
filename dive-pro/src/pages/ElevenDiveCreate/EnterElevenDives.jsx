import { useState } from 'react'
import './ElevenDive.css'
import { diveArrayFunction } from '../../components/DiveArray'
import DiveCheck from '../../components/DiveCheck'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import RoundIndex from './Rounds/RoundIndex';

export default function EnterElevenDives(props) {
    //props
    const { next, back, handleEntryChange, handleDiveChange, dataEntry, dataDive } = props

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
    //check list
    const checkList = () => {
        toggleModal()
    }

    return (
        <>
            <div className='profile'>
                {/* Header */}
                <header>
                    <h3>(11-Dive)</h3>
                    <h1>Enter Eleven Dives</h1>
                </header>
                <div>
                    <RoundIndex />
                </div>

                {/* Buttons */}
                <button
                    type="button"
                    className="primaryButton createListingButton"
                    onClick={checkList}>
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
                        {/* <p>First Dive: {dive1}</p>
                        <p>{dive1opt}</p>
                        <p>Second Dive: {dive2}</p>
                        <p>{dive2opt}</p>
                        <p>Third Dive: {dive3}</p>
                        <p>{dive3opt}</p>
                        <p>Fourth Dive: {dive4}</p>
                        <p>{dive4opt}</p>
                        <p>Fifth Dive: {dive5}</p>
                        <p>{dive5opt}</p> */}
                        <button type="button" className="close-modal" onClick={toggleModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}
