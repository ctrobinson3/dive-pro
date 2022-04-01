import FirstRound from "./FirstRound"
import SecondRound from "./SecondRound"
import ThirdRound from "./ThirdRound"
import { useState } from "react"

export default function RoundIndex() {

    //dive entry
    const [firstRound, setFirstRound] = useState({
        d1: '',
        d1opt: 'v',
        d2: '',
        d2opt: 'o',
        d3: '',
        d3opt: 'v',
        d4: '',
        d4opt: 'o',
        d5: '',
        d5opt: 'o',
    })
    const [secondRound, setSecondRound] = useState({
        d6: '',
        d6opt: 'v',
        d7: '',
        d7opt: 'o',
        d8: '',
        d8opt: 'v',
    })
    const [thirdRound, setThirdRound] = useState({
        d9: '',
        d9opt: 'o',
        d10: '',
        d10opt: 'v',
        d11: '',
        d11opt: 'o',
    })

    //on change
    const handleFirst = (e) => {
        setFirstRound({
            ...firstRound,
            [e.target.id]: e.target.value
        })
    }
    const handleSecond = (e) => {
        setSecondRound({
            ...secondRound,
            [e.target.id]: e.target.value
        })
    }
    const handleThird = (e) => {
        setThirdRound({
            ...thirdRound,
            [e.target.id]: e.target.value
        })
    }

    //set pages
    const [formPage, setFormPage] = useState(1)
    const formNext = () => {
        setFormPage(formPage + 1)
    }
    const formBack = () => {
        setFormPage(formPage - 1)
    }

    //Layout
    switch (formPage) {
        case 1:
            return (
                <FirstRound
                    next={formNext}
                    firstRound={firstRound}
                    onChange={handleFirst}
                />
            )
        case 2:
            return (
                <SecondRound
                    next={formNext}
                    back={formBack}
                    secondRound={secondRound}
                    onChange={handleSecond}
                />
            )
        default:
            return (
                <ThirdRound
                    back={formBack}
                    thirdRound={thirdRound}
                    onChange={handleThird}
                />
            )
    }
}
