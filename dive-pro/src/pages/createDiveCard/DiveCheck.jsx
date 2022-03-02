import React from 'react'
import { diveArrayFunction } from '../../components/DiveArray'

const DiveCheck = (props) => {
    const { dataDive, dataList, handleListChange, back, next } = props
    const diveCheck = [
        '101a', '101b', '101c', '102a', '102b', '102c', '103a', '103b', '103c', '104a', '104b', '104c', '105b', '105c', '106b', '106c', '107b', '107c',
        '112b', '112c', '113b', '113c',
        '201a', '201b', '201c', '202a', '202b', '202c', '203a', '203b', '203c', '204b', '204c', '205b', '205c',
        '301a', '301b', '301c', '302a', '302b', '302c', '303a', '303b', '303c', '304a', '304b', '304c', '305b', '305c',
        '401a', '401b', '401c', '402a', '402b', '402c', '403b', '403c', '404b', '404c', '405b', '405c',
        '412b', '412c', '413b', '413c',
        '5111a', '5111b', '5111c', '5112a', '5112b', '5121d', '5122d', '5124d', '5126d', '5131d', '5132d', '5134d', '5136d', '5142b', '5142c', '5152b', '5152c',
        '5211a', '5212a', '5221d', '5222d', '5223d', '5225d', '5227d', '5231d', '5233d', '5235d', '5251b', '5251c',
        '5311a', '5312a', '5321d', '5322d', '5323d', '5325d', '5331d', '5333d', '5335d', '5351b', '5351c',
        '5411a', '5411b', '5412a', '5412b', '5421d', '5422d', '5432d', '5434d'
    ]
    const diveArray = diveArrayFunction()

    const d1 = dataDive.dive1.toLowerCase()
    const d2 = dataDive.dive2.toLowerCase()
    const d3 = dataDive.dive3.toLowerCase()
    const d4 = dataDive.dive4.toLowerCase()
    const d5 = dataDive.dive5.toLowerCase()
    const d6 = dataDive.dive6.toLowerCase()

    const diveData = [d1, d2, d3, d4, d5, d6]

    const diveList = diveData.map(d => {
        const isValid = diveCheck.includes(d) ? true : false
        if (isValid === true) {
            const index = diveCheck.indexOf(d)
            const value = diveArray[index]
            return value

        }
        else {
            const value = 'invalid dive'
            return value
        }
    })

    dataList.vol1 = diveList[0]
    dataList.opt1 = diveList[1]
    dataList.opt2 = diveList[2]
    dataList.opt3 = diveList[3]
    dataList.opt4 = diveList[4]
    dataList.opt5 = diveList[5]

    function infoGet(d) {
        const dive = diveList[d]
        if (dive === 'invalid dive')
            return <div >Invalid Dive</div>
        else
            return <div >{dive.direction} {dive.rotation} {dive.position} DD: {dive.difficulty}</div>
    }


    function verifyList(d) {
        var hasSixDives = false
        var noRepeatDives = false
        var hasEnoughCategories = false

        const [v1, o1, o2, o3, o4, o5] = d
        const numList = [v1.num, o1.num, o2.num, o3.num, o4.num, o5.num]
        const oList = [o1.cat, o2.cat, o3.cat, o4.cat, o5.cat]

        //Check for 6 dives
        const optAmt = Array.from(new Set(oList))
        if (d.includes('invalid dive')) {
            hasSixDives = false
        }
        else {
            hasSixDives = true
        }
        //Check for 4 optional categories
        if (optAmt.length > 3) {
            hasEnoughCategories = true
        }
        else {
            hasEnoughCategories = false
        }
        //Check for repeated dives
        const amt = numList.map((dive) => {
            return {
                count: 1,
                dive: dive
            }
        })
            .reduce((a, b) => {
                a[b.dive] = (a[b.dive] || 0) + b.count
                return a
            }, {})
        const duplicate = Object.keys(amt).filter((a) => amt[a] > 1)
        console.log(duplicate)

        numList.forEach((dive, index) => {
            duplicate.forEach((dup) => {
                if (parseInt(dup) === dive) {
                    console.log(index)
                    return index

                }
            })
        })
        console.log(hasSixDives)
        console.log(hasEnoughCategories)
        console.log(noRepeatDives)
    }

    verifyList(diveList)
    return (
        <>
            <div className='profile'>
                <h1>List:</h1>
                <div>
                    <label className='formLabel'>First Dive ({d1})</label>
                    {infoGet(0)}
                </div>
                <div>
                    <label className='formLabel'>Second Dive ({d2})</label>
                    {infoGet(1)}
                </div>
                <div>
                    <label className='formLabel'>Third Dive ({d3})</label>
                    {infoGet(2)}
                </div>
                <div>
                    <label className='formLabel'>Fourth Dive ({d4})</label>
                    {infoGet(3)}
                </div>
                <div>
                    <label className='formLabel'>Fifth Dive ({d5})</label>
                    {infoGet(4)}
                </div>
                <div>
                    <label className='formLabel'>Sixth Dive ({d6})</label>
                    {infoGet(5)}
                </div>

                <button type="button" className="primaryButton createListingButton" onClick={handleListChange, next}>Submit</button>
                <button type="button" className="primaryButton createListingButton" onClick={back}>Back to Dives</button>
            </div>
        </>
    )
}

export default DiveCheck