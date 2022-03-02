import React from 'react'

const DiverInfo = (props) => {
    const { data, handleInfoChange, next } = props
    return (
        <div className='profile'>
            <header>
                <h1>Enter Diver and Meet Info</h1>
            </header>
            <form>
                {/* Diver Name */}
                <div>
                    <label htmlFor="name" className='formLabel'>Diver's Name</label>
                    <input
                        className='formInputName'
                        id='diverName'
                        type='text'
                        value={data.diverName}
                        onChange={handleInfoChange}
                    />
                </div>
                {/* Team */}
                <div>
                    <label className='formLabel'>Team</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='team'
                        value={data.team}
                        onChange={handleInfoChange}
                    />
                </div>
                {/* Coach */}
                <div>
                    <label className='formLabel'>Coach's Name</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='coach'
                        value={data.coach}
                        onChange={handleInfoChange}
                    />
                </div>
                {/* Meet */}
                <div>
                    <label className='formLabel'>Meet Name</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='meet'
                        value={data.meet}
                        onChange={handleInfoChange}
                    />
                </div>
                {/* Date */}
                <div>
                    <label className='formLabel'>Date</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='date'
                        value={data.date}
                        onChange={handleInfoChange}
                    />
                </div>
                <button type="button" className="primaryButton createListingButton" onClick={next}>Select Dives</button>
            </form>
        </div>
    )
}

export default DiverInfo