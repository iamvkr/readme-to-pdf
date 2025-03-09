import React, { useEffect, useRef, useState } from 'react'

const ReadmeEditor = ({ markdownText, setmarkdownText, textAreaText, settextAreaText }) => {
  const dropareaRef = useRef();

  useEffect(() => {
    const tm = setTimeout(() => {
      setmarkdownText(textAreaText)
    }, 1000);

    return () => {
      clearTimeout(tm)
    }
  }, [textAreaText]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropareaRef.current.classList.add('border-4');
    dropareaRef.current.classList.add('border-dashed');
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropareaRef.current.classList.add('border-4');
    dropareaRef.current.classList.add('border-dashed');
  }
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropareaRef.current.classList.remove('border-4');
    dropareaRef.current.classList.remove('border-dashed');
  }
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropareaRef.current.classList.remove('border-4');
    dropareaRef.current.classList.remove('border-dashed');
    let dt = e.dataTransfer;
    const file = Array.from(dt.files)[0];
    if (!file) {
      return false;
    }
    if (!file.name.includes(".md")) {
      alert("Invalid file selected");
      return false;
    }
    const reader = new FileReader();
    reader.onload = (res) => {
      settextAreaText(res.target.result)
    }
    reader.readAsText(file);
  }

  return (
    <div ref={dropareaRef} className="h-[40vh] md:h-[85vh] rounded p-2"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}>
      <textarea
        name="readmeInput"
        className='w-full h-full resize-none p-2 outline-none'
        placeholder='Drag and drop or Enter Your readme.md text here....'
        value={textAreaText}
        onChange={(e) => { settextAreaText(e.target.value) }}
      ></textarea>
    </div>
  )
}

export default ReadmeEditor