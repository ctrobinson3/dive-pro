const DiveCardSix = (props) => {
    const { back } = props

    return (
        <div>
            <h1>Six Dives</h1>
            <button type="button" className="primaryButton createListingButton">Submit</button>
            <button type="button" className="primaryButton createListingButton" onClick={back}>Back</button>
        </div>
    )
}

export default DiveCardSix