import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { jobsData } from '../data/jobs'

export default function JobDetailPage() {
  const { jobId } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [jobId])

  const job = jobsData.find((j) => j.id === jobId)

  if (!job) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 bg-navy-950">
        <h1 className="text-3xl font-bold font-heading text-white mb-4">Job Opening Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          The job role you are looking for might have been closed or moved.
        </p>
        <Link to="/careers" className="glow-btn">
          View All Careers
        </Link>
      </div>
    )
  }

  const jobDetailsList = [
    { label: 'Location', value: job.location },
    { label: 'Duration', value: job.duration },
    { label: 'Compensation', value: job.salary },
    { label: 'Working Hours', value: job.workingHours },
    { label: 'Openings', value: `${job.openings} Positions` },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20 bg-navy-950">
      {/* ── Hero / Header ── */}
      <section className="relative py-12 lg:py-16 border-b border-white/10 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950">
        <div className="site-container relative z-10">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 flex-wrap">
            <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <Link to="/careers" className="hover:text-cyan-300 transition-colors">Careers</Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-300">{job.title}</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-cyan-500/20 mb-3 inline-block">
                {job.badge}
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white mb-2">
                {job.title}
              </h1>
              <p className="text-gray-400 text-base">{job.category} • {job.location}</p>
            </div>

            <a
              href={job.applyUrl}
              target="_blank"
              rel="noreferrer"
              className="glow-btn inline-flex items-center gap-2 shrink-0"
            >
              Apply via Google Form
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Main Content Grid ── */}
      <div className="site-container pt-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Card */}
            <div className="glass-card p-8 lg:p-10 border-cyan-500/30">
              <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-4">
                Role Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 pb-8 border-b border-white/10">
                {job.overview}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-white/5 border border-white/5 mb-8">
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Location</span>
                  <span className="text-sm font-semibold text-white">{job.location}</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Duration</span>
                  <span className="text-sm font-semibold text-white">{job.duration}</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Openings</span>
                  <span className="text-sm font-semibold text-cyan-400">{job.openings} Openings</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Working Hours</span>
                  <span className="text-sm font-semibold text-white">{job.workingHours}</span>
                </div>
              </div>

              {/* Eligibility & Requirements */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Eligibility */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold font-heading text-white flex items-center gap-2">
                    <svg className="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Eligibility
                  </h3>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    {job.eligibility.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-cyan-400 mt-1 shrink-0">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold font-heading text-white flex items-center gap-2">
                    <svg className="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Requirements
                  </h3>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    {job.requirements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-cyan-400 mt-1 shrink-0">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Highlights / Learning Card */}
            <div className="glass-card p-8 border-cyan-500/20">
              <h3 className="text-lg font-bold font-heading text-white mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {job.highlightsTitle}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {job.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-200 text-sm bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="w-6 h-6 rounded-md bg-cyan-500/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Back button */}
            <div className="pt-2">
              <Link to="/careers" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Careers
              </Link>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card p-6 lg:p-8 sticky top-28">
              <h3 className="text-xl font-bold font-heading text-white mb-6 border-b border-white/10 pb-4">Role Overview</h3>
              
              <div className="space-y-4 mb-8">
                {jobDetailsList.map((detail) => (
                  <div key={detail.label} className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">{detail.label}</span>
                    <span className="text-gray-200 font-medium text-sm leading-snug">{detail.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-cyan-500/5 rounded-xl p-6 border border-cyan-500/20 text-center mb-6">
                <h4 className="text-white font-bold text-lg mb-2">Apply Now</h4>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">Ready to take the next step in your career with SkyionX?</p>
                <a 
                  href={job.applyUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="glow-btn w-full block text-center"
                >
                  Apply via Google Form
                </a>
              </div>

              <div className="text-center text-sm text-gray-400 border-t border-white/10 pt-6">
                <p className="mb-2 text-xs uppercase tracking-wider text-gray-500 font-medium">Questions? Contact HR</p>
                <a href="mailto:hr@skyionx.com" className="text-cyan-400 hover:text-cyan-300 transition-colors block font-medium">hr@skyionx.com</a>
                <a href="tel:02245803512" className="text-cyan-400 hover:text-cyan-300 transition-colors block mt-1.5 font-medium">022-45803512</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
