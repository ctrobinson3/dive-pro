const ErrorPage = (props) => {
    const { next, back } = props

    return (
        <div>
            <h1>Error Page</h1>
            <button type="button" className="primaryButton createListingButton" onClick={next}>Next</button>
            <button type="button" className="primaryButton createListingButton" onClick={back}>Back</button>
        </div>
    )
}

export default ErrorPage