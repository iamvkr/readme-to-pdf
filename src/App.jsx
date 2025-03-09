import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ReadmeEditor from './components/ReadmeEditor'
import PdfBox from './components/PdfBox'
import PrintPage from './components/PrintPage'

function App() {
  const [markdownText, setmarkdownText] = useState("");
  const [textAreaText, settextAreaText] = useState("");
  const [isPrint, setisPrint] = useState(false);

  return (
    !isPrint ? (<section className='bg-[#313131] text-white h-screen'>
      <Navbar setisPrint={setisPrint} setmarkdownText={setmarkdownText} textAreaText={textAreaText} settextAreaText={settextAreaText} />
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-2">
        <ReadmeEditor markdownText={markdownText} setmarkdownText={setmarkdownText} textAreaText={textAreaText} settextAreaText={settextAreaText} />
        <PdfBox markdownText={markdownText} setmarkdownText={setmarkdownText} />
      </div>
    </section>)
      :
      <PrintPage markdownText={markdownText} setisPrint={setisPrint} />
  )
}

export default App
