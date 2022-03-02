import { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'


function CreateSixDive() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        dive1: '',
        dive2: '',
        dive3: '',
        dive4: '',
        dive5: '',
        dive6: ''
    })

    const { dive1, dive2, dive3, dive4, dive5, dive6 } = formData

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
            <p className="pageHeader">Enter 6 Dives</p>
        </header>

        <main>
            <form onSubmit={onSubmit}>
                {/* First Dive */}
                <label className='formLabel'>First Dive</label>
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
                <input
                    className='formInputName'
                    type='text'
                    id='dive5'
                    value={dive5}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />

                {/* Sixth Dive */}
                <label className='formLabel'>Sixth Dive</label>
                <input
                    className='formInputName'
                    type='text'
                    id='dive6'
                    value={dive6}
                    onChange={onMutate}
                    maxLength='99'
                    minLength='0'
                />


            </form>
        </main>
    </div>;
}

export default CreateSixDive