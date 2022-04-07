import { useState } from 'react'
import DiverInfo11 from './DiverInfo11'
import EnterElevenDives from './EnterElevenDives'
import DiveCardEleven from './DiveCardEleven'
import { diveArrayFunction } from '../../components/DiveArray'
import DiveCheck from '../../components/DiveCheck'

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
        //round 2
        d6: '',
        d6opt: 'v',
        d7: '',
        d7opt: 'v',
        d8: '',
        d8opt: 'o',
        //round 3
        d9: '',
        d9opt: 'v',
        d10: '',
        d10opt: 'o',
        d11: '',
        d11opt: 'o',
    })

    //Dive Data
    const [dataDive, setDataDive] = useState({
        //round 1
        di1: [new Dive(), false],
        di2: [new Dive(), false],
        di3: [new Dive(), false],
        di4: [new Dive(), false],
        di5: [new Dive(), false],
        //round 2
        di6: [new Dive(), false],
        di7: [new Dive(), false],
        di8: [new Dive(), false],
        //round 3
        di9: [new Dive(), false],
        di10: [new Dive(), false],
        di11: [new Dive(), false],
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
