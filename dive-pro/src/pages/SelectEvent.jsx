import { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

function SelectEvent() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        type: '6-dive'
    })

    const { type } = formData

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
                <button type='submit' className="primaryButton createListingButton">Select</button>
            </form>
        </main>
    </div>;
}

export default SelectEvent; 
