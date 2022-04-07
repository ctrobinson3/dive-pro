import FirstRound from "./FirstRound"
import SecondRound from "./SecondRound"
import ThirdRound from "./ThirdRound"
import { useState } from "react"

export default function RoundIndex({ handleEntryChange, dataEntry, toggleModal }) {

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
                    dives={dataEntry}
                    onChange={handleEntryChange}
                />
            )
        case 2:
            return (
                <SecondRound
                    next={formNext}
                    back={formBack}
                    dives={dataEntry}
                    onChange={handleEntryChange}
                />
            )
        default:
            return (
                <ThirdRound
                    back={formBack}
                    dives={dataEntry}
                    onChange={handleEntryChange}
                    toggleModal={toggleModal}
                />
            )
    }

}
