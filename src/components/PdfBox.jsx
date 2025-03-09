import Markdown from 'markdown-to-jsx'
import React from 'react'
import "../github-markdown.css"

const PdfBox = ({markdownText,setmarkdownText}) => {
    return (
        <div className="markdown-body h-[44vh] md:h-[85vh] rounded p-2 overflow-y-auto print:overflow-y-visible">
            <Markdown>
            {markdownText}
            </Markdown>
        </div>
    )
}

export default PdfBox
