import Right from '@mui/icons-material/ArrowCircleRight';

export default function FirstRound(props) {
    const { next, firstRound, onChange } = props

    //deconstruct
    const { d1, d1opt, d2, d2opt, d3, d3opt, d4, d4opt, d5, d5opt } = firstRound


    return (<>
        <div className='form-div'>
            <header className='form-header'><h2>First Round</h2></header>
            <form className='form-content'>
                {/* first dive */}
                <div className='diveDiv'>
                    <div className='inputForm'>
                        <label className='formLabel '>First Dive</label>
                        <div className='dive-entry'>
                            <input
                                className='formInputName '
                                type='text'
                                id='d1'
                                value={d1}
                                onChange={onChange}
                            />
                            <label className='form-text'>(Dive name goes here)</label>
                        </div>
                    </div>
                    <div className='formButtons'>
                        <button
                            type='button'
                            className={d1opt === 'o' ? 'formButtonActive' : 'formButton'}
                            id='d1opt'
                            value='o'
                            onClick={onChange}
                        >
                            Opt
                        </button>
                        <button
                            type='button'
                            className={d1opt === 'v' ? 'formButtonActive' : 'formButton'}
                            id='d1opt'
                            value='v'
                            onClick={onChange}
                        >
                            Vol
                        </button>
                    </div>
                </div>
                {/* second dive */}
                <div className='diveDiv'>
                    <div className='inputForm'>
                        <label className='formLabel'>Second Dive</label>
                        <input
                            className='formInputName'
                            type='text'
                            id='d2'
                            value={d2}
                            onChange={onChange}
                        />
                    </div>
                    <div className='formButtons'>
                        <button
                            type='button'
                            className={d2opt === 'o' ? 'formButtonActive' : 'formButton'}
                            id='d2opt'
                            value='o'
                            onClick={onChange}
                        >
                            Opt
                        </button>
                        <button
                            type='button'
                            className={d2opt === 'v' ? 'formButtonActive' : 'formButton'}
                            id='d2opt'
                            value='v'
                            onClick={onChange}
                        >
                            Vol
                        </button>
                    </div>
                </div>
                {/* third dive */}
                <div className='diveDiv'>
                    <div className='inputForm'>
                        <label className='formLabel'>Third Dive</label>
                        <input
                            className='formInputName'
                            type='text'
                            id='d3'
                            value={d3}
                            onChange={onChange}
                        />
                    </div>
                    <div className='formButtons'>
                        <button
                            type='button'
                            className={d3opt === 'o' ? 'formButtonActive' : 'formButton'}
                            id='d3opt'
                            value='o'
                            onClick={onChange}
                        >
                            Opt
                        </button>
                        <button
                            type='button'
                            className={d3opt === 'v' ? 'formButtonActive' : 'formButton'}
                            id='d3opt'
                            value='v'
                            onClick={onChange}
                        >
                            Vol
                        </button>
                    </div>
                </div>
                {/* fourth dive */}
                <div className='diveDiv'>
                    <div className='inputForm'>
                        <label className='formLabel'>Fourth Dive</label>
                        <input
                            className='formInputName'
                            type='text'
                            id='d4'
                            value={d4}
                            onChange={onChange}
                        />
                    </div>
                    <div className='formButtons'>
                        <button
                            type='button'
                            className={d4opt === 'o' ? 'formButtonActive' : 'formButton'}
                            id='d4opt'
                            value='o'
                            onClick={onChange}
                        >
                            Opt
                        </button>
                        <button
                            type='button'
                            className={d4opt === 'v' ? 'formButtonActive' : 'formButton'}
                            id='d4opt'
                            value='v'
                            onClick={onChange}
                        >
                            Vol
                        </button>
                    </div>
                </div>
                {/* fifth dive */}
                <div className='diveDiv'>
                    <div className='inputForm'>
                        <label className='formLabel'>Fifth Dive</label>
                        <input
                            className='formInputName'
                            type='text'
                            id='d5'
                            value={d5}
                            onChange={onChange}
                        />
                    </div>
                    <div className='formButtons'>
                        <button
                            type='button'
                            className={d5opt === 'o' ? 'formButtonActive' : 'formButton'}
                            id='d5opt'
                            value='o'
                            onClick={onChange}
                        >
                            Opt
                        </button>
                        <button
                            type='button'
                            className={d5opt === 'v' ? 'formButtonActive' : 'formButton'}
                            id='d5opt'
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
                onClick={next}>
                <Right sx={{ fontSize: 50 }} />
            </button>
        </div>
    </>
    )
}
