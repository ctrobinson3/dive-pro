export default function DiveCardEleven(props) {
    const { back, dataInfo, dataDive } = props
    return (
        <div className='profile'>
            <header>
                <h1>Eleven Dives</h1>
            </header>

            <button
                type="button"
                className="primaryButton createListingButton"
                onClick>
                Download Dive Card
            </button>
            <button
                type="button"
                className="primaryButton createListingButton"
                onClick={back}>
                Back
            </button>
        </div>
    )
}
