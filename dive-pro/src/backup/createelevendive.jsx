import { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'


function CreateElevenDive() {
    const [loading, setLoading] = useState(false)


    const [formData, setFormData] = useState({
        dive1: '',
        isOptional1: 'vol1',
        dive2: '',
        isOptional2: 'opt2',
        dive3: '',
        isOptional3: 'vol3',
        dive4: '',
        isOptional4: 'opt4',
        dive5: '',
        isOptional5: 'opt5',
        dive6: '',
        isOptional6: 'vol6',
        dive7: '',
        isOptional7: 'opt7',
        dive8: '',
        isOptional8: 'vol8',
        dive9: '',
        isOptional9: 'vol9',
        dive10: '',
        isOptional10: 'opt10',
        dive11: '',
        isOptional11: 'opt11'
    })

    const { dive1, isOptional1, dive2, isOptional2, dive3, isOptional3, dive4, isOptional4, dive5, isOptional5, dive6, isOptional6, dive7, isOptional7, dive8, isOptional8, dive9, isOptional9, dive10, isOptional10, dive11, isOptional11 } = formData

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

        console.log(formData)


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
            <p className="pageHeader">Enter 11 Dives</p>
            <h3>*Please enter dive numbers*</h3>

        </header>

        <main>
            <form onSubmit={onSubmit}>
                <h1 className="createHeader">Round 1</h1>
                {/* First Dive */}
                <label className='formLabel'>First Dive</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={isOptional1 === 'opt1' ? 'formButtonActive' : 'formButton'}
                        id='isOptional1'
                        value='opt1'
                        onClick={onMutate}>
                        Optional
                    </button>
                    <button
                        type='button'
                        className={isOptional1 === 'vol1' ? 'formButtonActiveVol' : 'formButton'}
                        id='isOptional1'
                        value='vol1'
                        onClick={onMutate}>
                        Voluntary
                    </button>
                </div>

                <input
                    className='formInputName'
                    type='text'
                    id='dive1'
                    value={dive1}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Second Dive */}
                <label className='formLabel'>Second Dive</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={isOptional2 === 'opt2' ? 'formButtonActive' : 'formButton'}
                        id='isOptional2'
                        value='opt2'
                        onClick={onMutate}>
                        Optional
                    </button>
                    <button
                        type='button'
                        className={isOptional2 === 'vol2' ? 'formButtonActiveVol' : 'formButton'}
                        id='isOptional2'
                        value='vol2'
                        onClick={onMutate}>
                        Voluntary
                    </button>
                </div>
                <input
                    className='formInputName'
                    type='text'
                    id='dive2'
                    value={dive2}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Third Dive */}
                <label className='formLabel'>Third Dive</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={isOptional3 === 'opt3' ? 'formButtonActive' : 'formButton'}
                        id='isOptional3'
                        value='opt3'
                        onClick={onMutate}>
                        Optional
                    </button>
                    <button
                        type='button'
                        className={isOptional3 === 'vol3' ? 'formButtonActiveVol' : 'formButton'}
                        id='isOptional3'
                        value='vol3'
                        onClick={onMutate}>
                        Voluntary
                    </button>
                </div>
                <input
                    className='formInputName'
                    type='text'
                    id='dive3'
                    value={dive3}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Fourth Dive */}
                <label className='formLabel'>Fourth Dive</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={isOptional4 === 'opt4' ? 'formButtonActive' : 'formButton'}
                        id='isOptional4'
                        value='opt4'
                        onClick={onMutate}>
                        Optional
                    </button>
                    <button
                        type='button'
                        className={isOptional4 === 'vol4' ? 'formButtonActiveVol' : 'formButton'}
                        id='isOptional4'
                        value='vol4'
                        onClick={onMutate}>
                        Voluntary
                    </button>
                </div>
                <input
                    className='formInputName'
                    type='text'
                    id='dive4'
                    value={dive4}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Fifth Dive */}
                <label className='formLabel'>Fifth Dive</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={isOptional5 === 'opt5' ? 'formButtonActive' : 'formButton'}
                        id='isOptional5'
                        value='opt5'
                        onClick={onMutate}>
                        Optional
                    </button>
                    <button
                        type='button'
                        className={isOptional5 === 'vol5' ? 'formButtonActiveVol' : 'formButton'}
                        id='isOptional5'
                        value='vol5'
                        onClick={onMutate}>
                        Voluntary
                    </button>
                </div>
                <input
                    className='formInputName'
                    type='text'
                    id='dive5'
                    value={dive5}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                <h1 className="createHeader">Round 2</h1>

                {/* Sixth Dive */}
                <label className='formLabel'>Sixth Dive</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={isOptional6 === 'opt6' ? 'formButtonActive' : 'formButton'}
                        id='isOptional6'
                        value='opt6'
                        onClick={onMutate}>
                        Optional
                    </button>
                    <button
                        type='button'
                        className={isOptional6 === 'vol6' ? 'formButtonActiveVol' : 'formButton'}
                        id='isOptional6'
                        value='vol6'
                        onClick={onMutate}>
                        Voluntary
                    </button>
                </div>
                <input
                    className='formInputName'
                    type='text'
                    id='dive6'
                    value={dive6}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Seventh Dive */}
                <label className='formLabel'>Seventh Dive</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={isOptional7 === 'opt7' ? 'formButtonActive' : 'formButton'}
                        id='isOptional7'
                        value='opt7'
                        onClick={onMutate}>
                        Optional
                    </button>
                    <button
                        type='button'
                        className={isOptional7 === 'vol7' ? 'formButtonActiveVol' : 'formButton'}
                        id='isOptional7'
                        value='vol7'
                        onClick={onMutate}>
                        Voluntary
                    </button>
                </div>
                <input
                    className='formInputName'
                    type='text'
                    id='dive7'
                    value={dive7}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Eighth Dive */}
                <label className='formLabel'>Eighth Dive</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={isOptional8 === 'opt8' ? 'formButtonActive' : 'formButton'}
                        id='isOptional8'
                        value='opt8'
                        onClick={onMutate}>
                        Optional
                    </button>
                    <button
                        type='button'
                        className={isOptional8 === 'vol8' ? 'formButtonActiveVol' : 'formButton'}
                        id='isOptional8'
                        value='vol8'
                        onClick={onMutate}>
                        Voluntary
                    </button>
                </div>
                <input
                    className='formInputName'
                    type='text'
                    id='dive8'
                    value={dive8}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                <h1 className="createHeader">Final Round</h1>

                {/* Ninth Dive */}
                <label className='formLabel'>Ninth Dive</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={isOptional9 === 'opt9' ? 'formButtonActive' : 'formButton'}
                        id='isOptional9'
                        value='opt9'
                        onClick={onMutate}>
                        Optional
                    </button>
                    <button
                        type='button'
                        className={isOptional9 === 'vol9' ? 'formButtonActiveVol' : 'formButton'}
                        id='isOptional9'
                        value='vol9'
                        onClick={onMutate}>
                        Voluntary
                    </button>
                </div>
                <input
                    className='formInputName'
                    type='text'
                    id='dive9'
                    value={dive9}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Tenth Dive */}
                <label className='formLabel'>Tenth Dive</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={isOptional10 === 'opt10' ? 'formButtonActive' : 'formButton'}
                        id='isOptional10'
                        value='opt10'
                        onClick={onMutate}>
                        Optional
                    </button>
                    <button
                        type='button'
                        className={isOptional10 === 'vol10' ? 'formButtonActiveVol' : 'formButton'}
                        id='isOptional10'
                        value='vol10'
                        onClick={onMutate}>
                        Voluntary
                    </button>
                </div>
                <input
                    className='formInputName'
                    type='text'
                    id='dive10'
                    value={dive10}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Eleventh Dive */}
                <label className='formLabel'>Eleventh Dive</label>
                <div className="formButtons">
                    <button
                        type='button'
                        className={isOptional11 === 'opt11' ? 'formButtonActive' : 'formButton'}
                        id='isOptional11'
                        value='opt11'
                        onClick={onMutate}>
                        Optional
                    </button>
                    <button
                        type='button'
                        className={isOptional11 === 'vol11' ? 'formButtonActiveVol' : 'formButton'}
                        id='isOptional11'
                        value='vol11'
                        onClick={onMutate}>
                        Voluntary
                    </button>
                </div>
                <input
                    className='formInputName'
                    type='text'
                    id='dive11'
                    value={dive11}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />
                <button type='submit' className="primaryButton createListingButton">Enter Info</button>

            </form>
        </main>
    </div>;
}

export default CreateElevenDive

//  <input
// type="checkbox"
// className="isOptional"
// id="isOptional1"
// value={isOptional1}
// onChange={onMutate}
// />