import Left from "@mui/icons-material/ArrowCircleLeft"
import Right from "@mui/icons-material/ArrowCircleRight"

export default function SecondRound(props) {
    const { next, back, secondRound, onChange } = props

    //decon
    const { d6, d6opt, d7, d7opt, d8, d8opt } = secondRound

    return (<>
        <div className='form-div'>
            <header className='form-header'><h2>Second Round</h2></header>

            <form>
                {/* sixth dive */}
                <div className='diveDiv'>
                    <div className='inputForm'>
                        <label className='formLabel'>Sixth Dive</label>
                        <input
                            className='formInputName'
                            type='text'
                            id='d6'
                            value={d6}
                            onChange={onChange}
                        />

                    </div>
                    <div className='formButtons'>
                        <button
                            type='button'
                            className={d6opt === 'o' ? 'formButtonActive' : 'formButton'}
                            id='d6opt'
                            value='o'
                            onClick={onChange}
                        >
                            Opt
                        </button>
                        <button
                            type='button'
                            className={d6opt === 'v' ? 'formButtonActive' : 'formButton'}
                            id='d6opt'
                            value='v'
                            onClick={onChange}
                        >
                            Vol
                        </button>
                    </div>
                </div>
                {/* seventh dive */}
                <div className='diveDiv'>
                    <div className='inputForm'>
                        <label className='formLabel'>Seventh Dive</label>
                        <input
                            className='formInputName'
                            type='text'
                            id='d7'
                            value={d7}
                            onChange={onChange}
                        />
                    </div>
                    <div className='formButtons'>
                        <button
                            type='button'
                            className={d7opt === 'o' ? 'formButtonActive' : 'formButton'}
                            id='d7opt'
                            value='o'
                            onClick={onChange}
                        >
                            Opt
                        </button>
                        <button
                            type='button'
                            className={d7opt === 'v' ? 'formButtonActive' : 'formButton'}
                            id='d7opt'
                            value='v'
                            onClick={onChange}
                        >
                            Vol
                        </button>
                    </div>
                </div>
                {/* eighth dive */}
                <div className='diveDiv'>
                    <div className='inputForm'>
                        <label className='formLabel'>Eighth Dive</label>
                        <input
                            className='formInputName'
                            type='text'
                            id='d8'
                            value={d8}
                            onChange={onChange}
                        />
                    </div>
                    <div className='formButtons'>
                        <button
                            type='button'
                            className={d8opt === 'o' ? 'formButtonActive' : 'formButton'}
                            id='d8opt'
                            value='o'
                            onClick={onChange}
                        >
                            Opt
                        </button>
                        <button
                            type='button'
                            className={d8opt === 'v' ? 'formButtonActive' : 'formButton'}
                            id='d8opt'
                            value='v'
                            onClick={onChange}
                        >
                            Vol
                        </button>
                    </div>
                </div>
            </form>
            <div className="form-buttons">
                <button
                    className="form-button"
                    type="button"
                    onClick={back}>
                    <Left sx={{ fontSize: 50 }} />
                </button>
                <button
                    className="form-button"
                    type="button"
                    onClick={next}>
                    <Right sx={{ fontSize: 50 }} />
                </button>
            </div>
        </div>
    </>
    )
}
