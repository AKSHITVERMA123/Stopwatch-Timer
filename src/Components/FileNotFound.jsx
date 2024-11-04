import React from 'react';
import "./style/style.css";

const FileNotFound = () => {
    return (
        <div>
            <h4>File Does'not Exist</h4>
            <h3>Invalid URL</h3>
            <a href='/' className='Back'>Go Back</a>
        </div>
    )
}

export default FileNotFound;