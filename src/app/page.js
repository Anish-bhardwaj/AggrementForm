"use client"


import React, { useRef, useEffect } from "react";
import './style.css'; // Assuming you import your styles
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewerComponent = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl="/formpdf.pdf" />
      </Worker>
    </div>
  );
};



export function Home() {
  

  const [formData, setFormData] = React.useState({
    t1: "",
    t2: "",
    t3: "",
    t4: "",
    t5: "",
    t6: "",
    t7: "",
    t8: "",
    t9: "",
    t10: "",
    t11: "",
    t12: "",
    t13: "",
    t14: "",
    t15: "",
    t16: "",
    t17: "",
    t18: "",
    t19: "",
    t20: "",
    t21: "",
    t22: "",
    t23: "",
    t24: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here, e.g., send to an API or log in the console
    console.log("Form submitted:", formData);
  };
 

  return (
    <div className='container'>
      <div className='left-panel'>
        <div className='pdfContainer'>
          <PdfViewerComponent />
        </div>
      </div>
      <div className='right-panel'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="t1">1:</label>
            <input
              type="text"
              id="t1"
              name="t1"
              value={formData.t1}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t2">2:</label>
            <input
              type="text"
              id="t2"
              name="t2"
              value={formData.t2}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t3">3:</label>
            <input
              type="text"
              name="t3"
              value={formData.t3}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t4">4:</label>
            <input
              type="text"
              id="t4"
              name="t4"
              value={formData.t4}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t5">5:</label>
            <input
              type="text"
              id="t5"
              name="t5"
              value={formData.t5}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t6">6:</label>
            <input
              type="text"
              id="t6"
              name="t6"
              value={formData.t6}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t7">7:</label>
            <input
              type="text"
              id="t7"
              name="t7"
              value={formData.t7}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t8">8:</label>
            <input
              type="text"
              id="t8"
              name="t8"
              value={formData.t8}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t9">9:</label>
            <input
              type="text"
              name="t9"
              value={formData.t9}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t10">10:</label>
            <input
              type="text"
              id="t10"
              name="t10"
              value={formData.t10}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t11">11:</label>
            <input
              type="text"
              id="t11"
              name="t11"
              value={formData.t11}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t12">12:</label>
            <input
              type="text"
              id="t12"
              name="t12"
              value={formData.t12}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t13">13:</label>
            <input
              type="text"
              id="t13"
              name="t13"
              value={formData.t13}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t14">14:</label>
            <input
              type="text"
              id="t14"
              name="t14"
              value={formData.t14}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t15">15:</label>
            <input
              type="text"
              id="t15"
              name="t15"
              value={formData.t15}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t16">16:</label>
            <input
              type="text"
              id="t16"
              name="t16"
              value={formData.t16}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t17">17:</label>
            <input
              type="text"
              id="t17"
              name="t17"
              value={formData.t17}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t18">18:</label>
            <input
              type="text"
              id="t18"
              name="t18"
              value={formData.t18}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t19">19:</label>
            <input
              type="text"
              id="t19"
              name="t19"
              value={formData.t19}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t20">20:</label>
            <input
              type="text"
              id="t20"
              name="t20"
              value={formData.t20}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t21">21:</label>
            <input
              type="text"
              id="t21"
              name="t21"
              value={formData.t21}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t22">22:</label>
            <input
              type="text"
              id="t22"
              name="t22"
              value={formData.t22}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t23">23:</label>
            <input
              type="text"
              id="t23"
              name="t23"
              value={formData.t23}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="t24">24:</label>
            <input
              type="text"
              id="t24"
              name="t24"
              value={formData.t24}
              onChange={handleChange}
              required
            />
          </div>


          <button type="submit" className="submit">Submit</button>
        </form>
      </div>

    </div>
  );
};

export default Home;
