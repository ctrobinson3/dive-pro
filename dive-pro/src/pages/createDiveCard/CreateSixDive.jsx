import { useState } from 'react'
import DiveCheck from './DiveCheck'
import DiverInfo from './DiverInfo'
import SixDiveSelect from './SixDiveSelect'
import DiveCard from './DiveCard'
import Submit from './Submit'

const CreateSixDive = () => {
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
    const [currentStep, setCurrentStep] = useState(1)
    const [formDataInfo, setFormDataInfo] = useState({
        diverName: '',
        team: '',
        coach: '',
        meet: '',
        date: ''
    })
    const [formDataDive, setFormDataDive] = useState({
        dive1: '',
        dive2: '',
        dive3: '',
        dive4: '',
        dive5: '',
        dive6: ''
    })
    const [formDataList, setFormDataList] = useState({
        vol1: new Dive(),
        opt1: new Dive(),
        opt2: new Dive(),
        opt3: new Dive(),
        opt4: new Dive(),
        opt5: new Dive(),
    })

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

    const next = () => {
        setCurrentStep(currentStep + 1)
    }
    const back = () => {
        setCurrentStep(currentStep - 1)
    }

    switch (currentStep) {
        case 1:
            return (
                <DiverInfo
                    data={formDataInfo}
                    handleInfoChange={handleInfoChange}
                    next={next}
                    back={back}
                />
            )
        case 2:
            return (
                <SixDiveSelect
                    data={formDataDive}
                    handleDiveChange={handleDiveChange}
                    next={next}
                    back={back}
                />
            )
        case 3:
            return (
                <DiveCheck
                    dataDive={formDataDive}
                    dataList={formDataList}
                    handleListChange={handleListChange}
                    next={next}
                    back={back}
                />
            )
        case 4:
            return (
                <DiveCard
                    dataInfo={formDataInfo}
                    dataList={formDataList}
                    back={back}
                />
            )
        default:
            return <Submit dataInfo={formDataInfo} dataDive={formDataDive} back={back} />
    }
}
export default CreateSixDive