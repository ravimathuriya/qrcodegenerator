import React, { useEffect, useState } from 'react'

function Qrcode() {

    const [qrCode, setQrCode] = useState("");
    const [size, setSize] = useState(400);
    const [word, setWord] = useState("");
    const [bgColor, setBgColor] = useState("ffffff");
    const [search, setSearch] = useState("");


    useEffect(() => {

        setQrCode((`http://api.qrserver.com/v1/create-qr-code/?data=${search}!&size=${size}x${size}&bgcolor=${bgColor}`))
    }, [search, size, bgColor])


    const handlegenerate = () => {
        setSearch(word)
    }


    return (
        <>
            <div id="qrcode" className='d-flex justify-content-center align-items-center flex-column'>
                <h1 className=" my-3">QR Code Generator</h1>
                <div className="input input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter your text" onChange={(e) => setWord(e.target.value)} />
                    <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => handlegenerate()}>Generate</button>
                </div>
                <div className='d-flex justify-content-center align-items-center my-3' >
                    <div className='d-flex justify-content-center align-items-center my-3 mx-4' >
                        <label htmlFor="exampleColorInput" className="form-label" style={{ width: "140px", fontWeight: "500" }}>Background Color</label>
                        <input className='form-control form-control-color' id="exampleColorInput" type="color" onChange={(e) => { setBgColor(e.target.value.substring(1)) }} />
                    </div>
                    <label htmlFor="customRange2" className="form-label" style={{ fontWeight: "500" }}>Size</label>
                    <input type="range" className="form-range mx-3" min="100" max="500" id="customRange2" value={size} onChange={(e) => setSize(e.target.value)}></input>
                </div>
                {search.length > 0 ? <div className="output-box d-flex justify-content-center align-items-center flex-column">
                    <img src={qrCode} alt="" style={{borderRadius:"10px"}}/>
                    <a href={qrCode} download="QRCode">
                        <button className='btn btn-success my-4' type="button">Download</button>
                    </a>
                </div> : ""}

            </div>
        </>
    )
}

export default Qrcode
