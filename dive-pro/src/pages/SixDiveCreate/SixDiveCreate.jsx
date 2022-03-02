import { useState } from 'react'
import DiveCardSix from './DiveCardSix';
import DiverInfo from './DiverInfo';
import EnterSixDives from './EnterSixDives';
import ErrorPage from './ErrorPage';

const CreateSixDive = () => {

    //Dive Class Constructor    
    class Dive {
        constructor(direction, rotation, position, difficulty, cat, num) {
            this.direction = direction;
            this.rotation = rotation;
            this.position = position;
            this.difficulty = difficulty;
            this.cat = cat;
            this.num = num;
        }
    }



    //Diver Info Form
    const [formDataInfo, setFormDataInfo] = useState({
        diverName: '',
        team: '',
        coach: '',
        meet: '',
        date: ''
    })
    //Entered Dive Data Form
    const [formDataDive, setFormDataDive] = useState({
        dive1: '',
        dive2: '',
        dive3: '',
        dive4: '',
        dive5: '',
        dive6: ''
    })
    //Dive Constructors
    const [formDataList, setFormDataList] = useState({
        vol1: new Dive(),
        opt1: new Dive(),
        opt2: new Dive(),
        opt3: new Dive(),
        opt4: new Dive(),
        opt5: new Dive(),
    })
    //Errors
    const [errorList, setErrorList] = useState({
        hasSixDives: false,
        noRepeatDives: false,
        hasFourCategories: false
    })


    //On Change Events
    const handleInfoChange = (event) => {
        setFormDataInfo({
            ...formDataInfo,
            [event.target.id]: event.target.value
        })
    }

    const handleDiveChange = (event) => {
        setFormDataDive({
            ...formDataDive,
            [event.target.id]: event.target.value
        })
    }

    const handleListChange = (event) => {
        setFormDataList({
            ...formDataList,
            [event.target.id]: event.target.value
        })
    }

    const handleErrorChange = (event) => {
        setErrorList({
            ...errorList,
            [event.target.id]: event.target.value
        })
    }

    //Change Pages
    const [currentStep, setCurrentStep] = useState(1)
    const next = () => {
        setCurrentStep(currentStep + 1)
    }
    const back = () => {
        setCurrentStep(currentStep - 1)
    }

    //Layout
    switch (currentStep) {
        case 1:
            return (
                <DiverInfo
                    data={formDataInfo}
                    onChange={handleInfoChange}
                    next={next}
                />
            )
        case 2:
            return (
                <EnterSixDives
                    next={next}
                    back={back}
                    handleDiveChange={handleDiveChange}
                    data={formDataDive}
                />
            )
        case 3:
            return (
                <ErrorPage
                    next={next}
                    back={back}
                />
            )
        default:
            return (
                <DiveCardSix
                    back={back}
                />
            )
    }
}
export default CreateSixDive