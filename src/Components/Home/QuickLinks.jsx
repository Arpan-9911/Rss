import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'

const QuickLinks = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []); 
  return (
    <div data-aos="fade-left" className="w-96 texl-left my-5">
      <h1 className="w-full text-center text-2xl text-red-600 mb-2 font-bold">Quick Links</h1>
      <h1 className="text-sm text-blue-700 underline"><a href="/">Employee Provident Fund-1952</a></h1>
      <h1 className="text-sm text-blue-700 underline"><a href="/">Employee State Insurance Corporation-1948</a></h1>
      <h1 className="text-sm text-blue-700 underline"><a href="/">Factory Act-1948</a></h1>
      <h1 className="text-sm text-blue-700 underline"><a href="/">Payment of Wages Act-1936</a></h1>
      <h1 className="text-sm text-blue-700 underline"><a href="/">Minimum Wages Act-1948</a></h1>
      <h1 className="text-sm text-blue-700 underline"><a href="/">Employee Compensation Act-1923</a></h1>
      <h1 className="text-sm text-blue-700 underline"><a href="/">Payment of Bonus Act-1975</a></h1>
      <h1 className="text-sm text-blue-700 underline"><a href="/">Payment of Maternity Benefit Act-1960</a></h1>
      <h1 className="text-sm text-blue-700 underline"><a href="/">Equal Remuneration Act-1976</a></h1>
      <h1 className="text-sm text-blue-700 underline"><a href="/">Industrial Employment Standing Order Act-1946</a></h1>
      <h1 className="text-sm text-blue-700 underline"><a href="/">Shop & Commercial Establishment Act-1962</a></h1>
    </div>
  )
}

export default QuickLinks