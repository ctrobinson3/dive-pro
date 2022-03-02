import React from 'react'

const SixDiveSelect = (props) => {
    const { data, handleDiveChange, next, back } = props



    return (
        <div className='profile'>
            <header>
                <h1>Enter 6 Dives</h1>
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
                <button type="button" className="primaryButton createListingButton" onClick={next}>Check List</button>
                <button type="button" className="primaryButton createListingButton" onClick={back}>Back to Info</button>
            </form>
        </div>
    )
}

export default SixDiveSelect