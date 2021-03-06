export default function DiverInfo11(props) {
    const { dataInfo, onChange, next } = props
    return (
        <div className='profile'>
            {/* 
            Header
             */}
            <header className="head">
                <h3>(11-Dives)</h3>
                <h1>Enter Diver and Meet Info</h1>
            </header>

            {/* 
            Form
            */}
            <form>
                {/* Diver Name */}
                <div className='input-div'>
                    <label htmlFor="name" className='formLabel'>Diver's Name</label>
                    <input
                        className='form-input'
                        id='diverName'
                        type='text'
                        value={dataInfo.diverName}
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
                        value={dataInfo.team}
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
                        value={dataInfo.coach}
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
                        value={dataInfo.meet}
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
                        value={dataInfo.date}
                        onChange={onChange}
                    />
                </div>

            </form>

            {/* 
            Buttons
             */}
            <button
                type="button"
                className="primaryButton createListingButton"
                onClick={next}>
                Enter Info
            </button>
        </div>
    )
}
