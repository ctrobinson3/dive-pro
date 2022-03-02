import { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'


function Create() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        type: '6-dive',
        height: '1-meter',
        diverName: '',
        gender: 'female',
        team: '',
        coach: '',
        meet: '',
        date: ''

    })

    const { type, height, diverName, gender, team, coach, meet, date } = formData

    const auth = getAuth()
    const navigate = useNavigate()
    const isMounted = useRef(true)

    useEffect(() => {
        if (isMounted) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setFormData({ ...formData, userRef: user.uid })
                }
                //maybe take this out later... navigates user to "sign in" if they don't have an account
                else {
                    navigate('/sign-in')
                }
            })
        }
        return () => {
            isMounted.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMounted])

    const onSubmit = e => {
        e.preventDefault()

        setLoading(true)

        if (type === "6-dive") {

            navigate('/create-six-dive')
            setLoading(false)
        }

        else if (type === "11-dive") {
            navigate('/create-eleven-dive')
            setLoading(false)
        }
        else {
            console.log("something went wrong")
            setLoading(false)
        }


    }

    const onMutate = e => {
        let boolean = null

        if (e.target.value === 'true') {
            boolean = true
        }
        if (e.target.value === 'false') {
            boolean = false
        }
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: boolean ?? e.target.value
        }))
    }



    if (loading) {
        return <Spinner />
    }
    return <div className='profile'>
        <header>
            <p className="pageHeader">Create a Dive Card</p>
        </header>

        <main>
            <form onSubmit={onSubmit}>
                {/* Diver Name */}
                <label className='formLabel'>Diver's Name</label>
                <input
                    className='formInputName'
                    type='text'
                    id='diverName'
                    value={diverName}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Gender */}
                <label className='formLabel'>Gender</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={gender === 'female' ? 'formButtonActive' : 'formButton'}
                        id='gender'
                        value='female'
                        onClick={onMutate}>
                        Female
                    </button>
                    <button
                        type='button'
                        className={gender === 'male' ? 'formButtonActive' : 'formButton'}
                        id='gender'
                        value='male'
                        onClick={onMutate}>
                        Male
                    </button>
                </div>

                {/* Dive Amount */}
                <label className='formLabel'>Dive Amount</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={type === '6-dive' ? 'formButtonActive' : 'formButton'}
                        id='type'
                        value='6-dive'
                        onClick={onMutate}>
                        6 Dive
                    </button>
                    <button
                        type='button'
                        className={type === '11-dive' ? 'formButtonActive' : 'formButton'}
                        id='type'
                        value='11-dive'
                        onClick={onMutate}>
                        11 Dive
                    </button>
                </div>

                {/* Height */}
                <label className='formLabel'>Springboard Height</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={height === '1-meter' ? 'formButtonActive' : 'formButton'}
                        id='height'
                        value='1-meter'
                        onClick={onMutate}>
                        1 Meter
                    </button>
                    <button
                        type='button'
                        className={height === '3-meter' ? 'formButtonActive' : 'formButton'}
                        id='height'
                        value='3-meter'
                        onClick={onMutate}>
                        3 meter
                    </button>
                </div>

                {/* Team Name */}
                <label className='formLabel'>Team</label>
                <input
                    className='formInputName'
                    type='text'
                    id='team'
                    value={team}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Coach's Name */}
                <label className='formLabel'>Coach's Name</label>
                <input
                    className='formInputName'
                    type='text'
                    id='coach'
                    value={coach}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Meet */}
                <label className='formLabel'>Meet Name</label>
                <input
                    className='formInputName'
                    type='text'
                    id='meet'
                    value={meet}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Date */}
                <label className='formLabel'>Meet Date</label>
                <input
                    className='formInputName'
                    type='text'
                    id='date'
                    value={date}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />
                <button type='submit' className="primaryButton createListingButton">Enter Info</button>

            </form>
        </main>
    </div>;
}

export default Create;
