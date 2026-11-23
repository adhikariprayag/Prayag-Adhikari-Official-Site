import React from 'react'
import Navbar from '../components/Navbar'
import '../scss/Resume.scss'
import linkedinQr from '../images/linkedin-qr.png'

function Resume() {
  const resumePdfUrl = '/Prayag_Adhikari_Resume.pdf'

  return (
    <>
      <Navbar />
      <section className="resume-page animate__animated animate__fadeIn">
        <div className="container">
          {/* TOP HEADER */}
          <div className="row g-3 mb-4">
            <div className="col-12">
              <div className="text-light status">
                <i className="ri-file-text-line me-2"></i> RESUME
              </div>
            </div>
            <div className="col-12">
              <h1 className="page-title m-0">Curriculum Vitae</h1>
            </div>
            <div className="col-12">
              <p className="page-subtitle mb-0">
                Computer Science Honors student at Caldwell University who builds games and AI tools, from a 3D AI-powered language game at HackPrinceton to a Mario-style platformer and an AI research pipeline.
              </p>
            </div>
          </div>

          {/* MAIN TWO-COLUMN CONTENT */}
          <div className="row g-4 align-items-start">
            {/* LEFT COLUMN: PDF SHOWCASE */}
            <div className="col-xl-8 col-lg-7 col-12">
              <div className="pdf-card">
                <div className="pdf-header">
                  <div className="file-info">
                    <i className="ri-file-pdf-2-line"></i>
                    <span>Prayag_Adhikari_Resume.pdf</span>
                    <span className="badge-pill">1 Page</span>
                  </div>
                  <div className="pdf-actions">
                    <a
                      href={resumePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-action"
                      title="Open full PDF in a new browser tab"
                    >
                      <i className="ri-external-link-line"></i> Open Fullscreen
                    </a>
                  </div>
                </div>

                <div className="pdf-frame-wrapper">
                  <object
                    data={`${resumePdfUrl}#view=FitH&toolbar=0&navpanes=0`}
                    type="application/pdf"
                    className="pdf-viewer"
                  >
                    <iframe
                      src={`${resumePdfUrl}#view=FitH`}
                      title="Prayag Adhikari Resume"
                      className="pdf-viewer"
                    >
                      <p className="text-light p-4 text-center">
                        Your browser does not support inline PDFs.{' '}
                        <a href={resumePdfUrl} className="clr fw-bold" target="_blank" rel="noopener noreferrer">
                          Click here to open the resume PDF directly.
                        </a>
                      </p>
                    </iframe>
                  </object>
                </div>

                <div className="pdf-mobile-fallback">
                  Viewing on a mobile device? For the best reading experience, you can{' '}
                  <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer">
                    open the PDF directly <i className="ri-external-link-line"></i>
                  </a>
                  {' '}or use the download button below.
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: LINKEDIN QR CODE & DOWNLOAD BUTTON */}
            <div className="col-xl-4 col-lg-5 col-12">
              <aside className="resume-sidebar">
                {/* LINKEDIN QR CODE (JUST ABOVE DOWNLOAD BUTTON) */}
                <div className="qr-card">
                  <div className="qr-header">
                    <i className="ri-linkedin-box-fill"></i>
                    <span>Connect on LinkedIn</span>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/adhikariprayag/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qr-image-container"
                    title="Scan or click to visit Prayag's LinkedIn Profile"
                  >
                    <img
                      src={linkedinQr}
                      alt="LinkedIn QR Code - Prayag Adhikari"
                    />
                  </a>

                  <p className="qr-caption">
                    Scan with your phone or{' '}
                    <a
                      href="https://www.linkedin.com/in/adhikariprayag/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      click to view profile <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </p>
                </div>

                {/* DOWNLOAD BUTTON (JUST BELOW LINKEDIN QR CODE) */}
                <a
                  href={resumePdfUrl}
                  download="Prayag_Adhikari_Resume.pdf"
                  className="download-btn w-100"
                  title="Download Prayag Adhikari Resume PDF"
                >
                  <i className="ri-download-2-line"></i>
                  <span>Download Resume (PDF)</span>
                </a>

                {/* QUICK OVERVIEW TILE */}
                <div className="quick-info-card">
                  <div className="info-title">
                    <i className="ri-sparkling-fill"></i>
                    <span>At a Glance</span>
                  </div>
                  <ul>
                    <li>
                      <i className="ri-graduation-cap-line"></i>
                      <span>
                        <strong>Caldwell University</strong> — B.S. in Computer Science (Honors), GPA: 3.60, Exp. 2028
                      </span>
                    </li>
                    <li>
                      <i className="ri-search-eye-line"></i>
                      <span>
                        <strong>Undergraduate Researcher</strong> — NER-Based Resume Parsing & ATS Accuracy
                      </span>
                    </li>
                    <li>
                      <i className="ri-code-s-slash-line"></i>
                      <span>
                        <strong>Technical Stack</strong> — Python, Java, C, React, Three.js, TypeScript, Pygame, spaCy, SQL
                      </span>
                    </li>
                    <li>
                      <i className="ri-map-pin-line"></i>
                      <span>
                        <strong>Location & Status</strong> — Bloomfield, NJ • Seeking Software / Game AI / ML Internships
                      </span>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume

