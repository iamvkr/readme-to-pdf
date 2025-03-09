import Markdown from 'markdown-to-jsx'
import React, { useEffect } from 'react'

const PrintPage = ({ markdownText,setisPrint }) => {
    useEffect(() => {
        setTimeout(() => {
            window.print();
        }, 2500);

        window.onafterprint = function () {
            setisPrint(false);
        }
    }, [])

    return (
        <div className="markdown-body">
            <Markdown>
                {markdownText}
            </Markdown>
        </div>
    )
}

export default PrintPage