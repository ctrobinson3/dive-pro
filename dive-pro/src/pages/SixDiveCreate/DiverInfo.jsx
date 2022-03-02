const DiverInfo = (props) => {
    const { data, onChange, next } = props
    return (
        <div className='profile'>
            <header>
                <h3>(6-Dives)</h3>
                <h1>Enter Dive and Meet Info</h1>
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
                    />
                </div>
            </form>
            <button type="button" className="primaryButton createListingButton" onClick={next}>Next</button>
        </div>
    )
}

export default DiverInfo