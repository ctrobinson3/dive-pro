import React from "react";

const Submit = (props) => {
    const { dataInfo, dataDive, back } = props;
    const listInfoItems = Object.entries(dataInfo).map(([key, value]) => (
        <li key={key}>
            {value}
        </li>
    ));
    const listDiveItems = Object.entries(dataDive).map(([key, value]) => (
        <li key={key}>
            {value}
        </li>
    ));
    return (
        <div className='profile'>
            <h1>Diver Info</h1>
            <ul>{listInfoItems}</ul>
            <h1>Dives</h1>
            <ul>{listDiveItems}</ul>
            <button type="submit">Submit</button>
            <button type="button" className="primaryButton createListingButton" onClick={back}>Back</button>
        </div>
    );
};
export default Submit;