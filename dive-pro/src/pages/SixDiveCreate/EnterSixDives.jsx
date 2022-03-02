import React, { useState } from "react"

const EnterSixDives = (props) => {
    const { next, back, handleDiveChange, data } = props

    //Dive Modal
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className='profile'>
                <header>
                    <h3>(6-Dives)</h3>
                    <h1>Enter Six Dives</h1>
                </header>
                <form>
                    {/* First Dive */}
                    <div>
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
                    <div>
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
                    <div>
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
                    <div>
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
                    <div>
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
                    <div>
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
                <button type="button" className="primaryButton createListingButton btn-modal" onClick={toggleModal}>Next</button>
                <button type="button" className="primaryButton createListingButton" onClick={back}>Back</button>
            </div>
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <h2>ass</h2>
                    <p>
                        assassassassassassassass ass ass ass ass ass ass
                    </p>
                    <button
                        className='close-modal'
                        onClick={toggleModal}>
                        CLOSE
                    </button>
                </div>
            </div>
        </>
    )
}

export default EnterSixDives