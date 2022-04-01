import { useState } from 'react'
import DiverInfo11 from './DiverInfo11'
import EnterElevenDives from './EnterElevenDives'
import DiveCardEleven from './DiveCardEleven'

export default function ElevenDiveCreate() {

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
    const [dataInfo, setDataInfo] = useState({
        diverName: '',
        team: '',
        coach: '',
        meet: '',
        date: ''
    })

    //Entry Data
    const [dataEntry, setDataEntry] = useState({
        //round 1
        dive1: '',
        dive1opt: 'vol',
        dive2: '',
        dive2opt: 'opt',
        dive3: '',
        dive3opt: 'vol',
        dive4: '',
        dive4opt: 'opt',
        dive5: '',
        dive5opt: 'opt',
        //round 2
        dive6: 'vol',
        dive6opt: '',
        dive7: '',
        dive7opt: 'vol',
        dive8: '',
        dive8opt: 'opt',
        //round 3
        dive9: '',
        dive9opt: 'vol',
        dive10: '',
        dive10opt: 'opt',
        dive11: '',
        dive11opt: 'opt',
    })

    //Dive Data
    const [dataDive, setDataDive] = useState({
        //round 1
        di1: new Dive(),
        di1o: false,
        di2: new Dive(),
        di2o: false,
        di3: new Dive(),
        di3o: false,
        di4: new Dive(),
        di4o: false,
        di5: new Dive(),
        di5o: false,
        //round 2
        di6: new Dive(),
        di6o: false,
        di7: new Dive(),
        di7o: false,
        di8: new Dive(),
        di8o: false,
        //round 3
        di9: new Dive(),
        di9o: false,
        di10: new Dive(),
        di10o: false,
        di11: new Dive(),
        di11o: false,
    })

    //On Change Events
    const handleInfoChange = (e) => {
        setDataInfo({
            ...dataInfo,
            [e.target.id]: e.target.value
        })
    }

    const handleEntryChange = (e) => {
        setDataEntry({
            ...dataEntry,
            [e.target.id]: e.target.value
        })
    }

    const handleDiveChange = (e) => {
        setDataDive({
            ...dataDive,
            [e.target.id]: e.target.value
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
                <DiverInfo11
                    dataInfo={dataInfo}
                    onChange={handleInfoChange}
                    next={next}
                />
            )
        case 2:
            return (
                <EnterElevenDives
                    next={next}
                    back={back}
                    handleEntryChange={handleEntryChange}
                    handleDiveChange={handleDiveChange}
                    dataEntry={dataEntry}
                    dataDive={dataDive}
                />
            )
        default:
            return (
                <DiveCardEleven
                    back={back}
                    dataInfo={dataInfo}
                    dataDive={dataDive}
                />
            )
    }

}
