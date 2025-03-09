import React from 'react'

const Navbar = ({ setisPrint,setmarkdownText,settextAreaText }) => {
    const handleFileChange = (e)=>{
        const file = e.target.files[0];
        if (!file) {
            return false;
        }
        if (!file.name.includes(".md")) {
            alert("Invalid file selected");
            return false;
        }
        const reader = new FileReader();
        reader.onload = (res)=>{
            // console.log("result:",res.target.result);
            settextAreaText(res.target.result)
        }
        reader.readAsText(file)
    }
    return (
        <nav className='p-4 flex justify-between'>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-red-400 to to-white inline bg-clip-text text-transparent'>Readme To Pdf</h1>
            <div className='flex items-center gap-x-2'>
                <button className='w-auto px-8 bg-gradient-to-r from-red-400 to to-black inline rounded-lg font-bold cursor-pointer'
                    onClick={() => { setisPrint(true) }}>Print</button>
                <button className='w-auto px-8 bg-gradient-to-r from-red-400 to to-white inline rounded-lg font-bold cursor-pointer'
                onClick={()=>{document.getElementById("myfILE").click()}}>
                    <img src="./upload.svg" alt="upload" />
                    <input type="file" accept='.md' name="fileUpload" id="myfILE" className='hidden' onChange={handleFileChange} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar