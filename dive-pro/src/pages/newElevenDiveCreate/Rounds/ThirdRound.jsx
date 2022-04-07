import Left from "@mui/icons-material/ArrowCircleLeft"

export default function ThirdRound({ back, toggleModal, onChange, dives }) {


    const { d9, d9opt, d10, d10opt, d11, d11opt } = dives

    return (<><div className='form-div'>
        <header className='head'>
            <h2>Third Round</h2>
            <p>2 Optionals, 1 Voluntary</p>
        </header>
        <form>
            {/* ninth dive */}
            <div className='diveDiv'>
                <div className='inputForm'>
                    <label className='formLabel'>Ninth Dive</label>
                    <div className="dive-entry">
                        <input
                            className='formInputName dive-entry'
                            type='text'
                            id='d9'
                            value={d9}
                            onChange={onChange}
                            placeholder='(#)'
                        />
                        <button
                            type='button'
                            className={d9opt === 'o' ? 'formButtonActive' : 'formButton'}
                            id='d9opt'
                            value='o'
                            onClick={onChange}
                        >
                            Opt
                        </button>
                        <button
                            type='button'
                            className={d9opt === 'v' ? 'formButtonActive' : 'formButton'}
                            id='d9opt'
                            value='v'
                            onClick={onChange}
                        >
                            Vol
                        </button>
                    </div>
                </div>
                <div className='form-dive-name'>
                    <label className='form-text'>(Dive name goes here)</label>
                </div>
            </div>
            {/* tenth dive */}
            <div className='diveDiv'>
                <div className='inputForm'>
                    <label className='formLabel'>Tenth Dive</label>
                    <div className="dive-entry">
                        <input
                            className='formInputName dive-entry'
                            type='text'
                            id='d10'
                            value={d10}
                            onChange={onChange}
                            placeholder='(#)'
                        />
                        <button
                            type='button'
                            className={d10opt === 'o' ? 'formButtonActive' : 'formButton'}
                            id='d10opt'
                            value='o'
                            onClick={onChange}
                        >
                            Opt
                        </button>
                        <button
                            type='button'
                            className={d10opt === 'v' ? 'formButtonActive' : 'formButton'}
                            id='d10opt'
                            value='v'
                            onClick={onChange}
                        >
                            Vol
                        </button>
                    </div>
                </div>
                <div className='form-dive-name'>
                    <label className='form-text'>(Dive name goes here)</label>
                </div>
            </div>
            {/* eleventh dive */}
            <div className='diveDiv'>
                <div className='inputForm'>
                    <label className='formLabel'>Eleventh Dive</label>
                    <div className="dive-entry">
                        <input
                            className='formInputName dive-entry'
                            type='text'
                            id='d11'
                            value={d11}
                            onChange={onChange}
                            placeholder='(#)'
                        />
                        <button
                            type='button'
                            className={d11opt === 'o' ? 'formButtonActive' : 'formButton'}
                            id='d11opt'
                            value='o'
                            onClick={onChange}
                        >
                            Opt
                        </button>
                        <button
                            type='button'
                            className={d11opt === 'v' ? 'formButtonActive' : 'formButton'}
                            id='d11opt'
                            value='v'
                            onClick={onChange}
                        >
                            Vol
                        </button>
                    </div>
                </div>
                <div className='form-dive-name'>
                    <label className='form-text'>(Dive name goes here)</label>
                </div>
            </div>
        </form>
        <button
            className="form-button"
            type="button"
            onClick={back}>
            <Left sx={{ fontSize: 50 }} />
        </button>
        <button
            className='check-button'
            type='button'
            onClick={toggleModal}
        >Check
        </button>
    </div>
    </>
    )
}
