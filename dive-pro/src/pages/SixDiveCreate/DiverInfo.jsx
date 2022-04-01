const DiverInfo = (props) => {
    const { data, onChange, next } = props
    return (
        <div className='profile'>
            <header className='head'>
                <h3>(6-Dives)</h3>
                <h1>Enter Diver and Meet Info</h1>
            </header>
            <form>
                {/* Diver Name */}
                <div className='input-div'>
                    <label htmlFor="name" className='formLabel'>Diver's Name</label>
                    <input
                        className='form-input'
                        id='diverName'
                        type='text'
                        value={data.diverName}
                        onChange={onChange}
                    />
                </div>
                {/* Team */}
                <div className='input-div'>
                    <label className='formLabel'>Team</label>
                    <input
                        className='form-input'
                        type='text'
                        id='team'
                        value={data.team}
                        onChange={onChange}
                    />
                </div>
                {/* Coach */}
                <div className='input-div'>
                    <label className='formLabel'>Coach's Name</label>
                    <input
                        className='form-input'
                        type='text'
                        id='coach'
                        value={data.coach}
                        onChange={onChange}
                    />
                </div>
                {/* Meet */}
                <div className='input-div'>
                    <label className='formLabel'>Meet Name</label>
                    <input
                        className='form-input'
                        type='text'
                        id='meet'
                        value={data.meet}
                        onChange={onChange}
                    />
                </div>
                {/* Date */}
                <div className='input-div'>
                    <label className='formLabel'>Date</label>
                    <input
                        className='form-input'
                        type='text'
                        id='date'
                        value={data.date}
                        onChange={onChange}
                    />
                </div>
            </form>
            <button
                type="button"
                className="primaryButton createListingButton"
                onClick={next}>
                Enter Info
            </button>


        </div>
    )
}

export default DiverInfo