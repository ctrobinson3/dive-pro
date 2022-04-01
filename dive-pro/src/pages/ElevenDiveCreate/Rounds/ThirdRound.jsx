import Left from "@mui/icons-material/ArrowCircleLeft"

export default function ThirdRound(props) {
    const { back, thirdRound, onChange } = props

    const { d9, d9opt, d10, d10opt, d11, d11opt } = thirdRound

    return (<><div className='form-div'>
        <header className='form-header'><h2>Third Round</h2></header>
        <form>
            {/* ninth dive */}
            <div className='diveDiv'>
                <div className='inputForm'>
                    <label className='formLabel'>Ninth Dive</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='d9'
                        value={d9}
                        onChange={onChange}
                    />
                </div>
                <div className='formButtons'>
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
            {/* tenth dive */}
            <div className='diveDiv'>
                <div className='inputForm'>
                    <label className='formLabel'>Tenth Dive</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='d10'
                        value={d10}
                        onChange={onChange}
                    />
                </div>
                <div className='formButtons'>
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
            {/* eleventh dive */}
            <div className='diveDiv'>
                <div className='inputForm'>
                    <label className='formLabel'>Eleventh Dive</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='d11'
                        value={d11}
                        onChange={onChange}
                    />
                </div>
                <div className='formButtons'>
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
        </form>
        <button
            className="form-button"
            type="button"
            onClick={back}>
            <Left sx={{ fontSize: 50 }} />
        </button>
    </div>
    </>
    )
}
