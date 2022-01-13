import React, { useState } from 'react'
import resume from './pdf/KyleBoveConcise.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from '../styles/pdf.css';

export default function Resume() {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
  
    function onDocumentLoadSuccess({numPages}) {
      setNumPages(numPages);
    }
  
    function changePageNumber(event) {
      event.preventDefault();
      if (pageNumber === 2) {
        setPageNumber(1)
      } else {
        setPageNumber(pageNumber + 1)
      }
    }
  
  
    return (
      <div>
             <div>
         <h4 className='download'>
           <a  href={resume} download>Download</a>
           </h4>
       </div>
        <Document
          file={resume} 
          className='resumePos'
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p className='page'><button className='pageBtn' onClick={changePageNumber}>Page</button> {pageNumber} of {numPages}</p>
      </div>
    );
  }