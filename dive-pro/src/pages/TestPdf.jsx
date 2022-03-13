import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import TestDiveCard from './Tests/TestDiveCard'
// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';


export default function TestPdf() {
    const [docName, setDocName] = useState('')

    const onChange = (e) => {
        const newValue = e.target.value
        setDocName(newValue)
    }

    function printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(docName);
            })
            ;
    }
    return (<div>
        <div className="mb5">
            <input onChange={onChange}></input>
            <button onClick={printDocument}>Download</button>
        </div>
        <div id="divToPrint" className="mt4" {...({})}>
            <TestDiveCard />
        </div>
    </div>);
}
