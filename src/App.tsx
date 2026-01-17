import { GraduationCap, FileText, Briefcase, Code2, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-black flex">
      <aside className="fixed left-0 top-0 w-80 h-screen bg-brand-white px-10 py-16 flex flex-col justify-between border-r border-brand-light-gray/30 overflow-y-auto">
        <div>
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-brand-orange/25 pointer-events-none"></div>
            <div className="relative bg-brand-dark-gray h-64 w-64 overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}image.jpeg`} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight leading-tight uppercase mb-2">
                SHAIKH<br />SHADAB<br />HOSSAIN
              </h1>
              <div className="h-1 w-12 bg-brand-orange mt-3"></div>
            </div>

            <div>
              {/* <p className="text-sm tracking-wide font-semibold text-brand-gray uppercase mb-2">
                Lead Software Engineer
              </p> */}
              <p className="text-xs text-brand-light-gray uppercase tracking-wider">
                MSc. ECE | UC Davis
              </p>
            </div>

            <p className="text-sm text-brand-gray leading-relaxed">
              I like building things that solve real problems, strong systems and a little curiosity.
            </p>

            <div className="space-y-2 text-xs text-brand-light-gray uppercase tracking-wider">
              <div>Davis, CA</div>
              <div>+1-(530)231-2904</div>
              <a href="mailto:skshaikh@ucdavis.edu" className="hover:text-brand-orange transition-colors block">
                skshaikh@ucdavis.edu
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a href="mailto:skshaikh@ucdavis.edu" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-brand-white font-bold text-xs uppercase tracking-widest hover:bg-gradient-to-r hover:from-[#C10801] hover:via-[#F16001] hover:to-[#D93C3A] transition-all">
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a href="https://linkedin.com/in/shaikhshadabhossain" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand-black text-xs uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-all">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a href="https://github.com/0sha-dow0" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand-black text-xs uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-white transition-all">
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </aside>

      <main className="ml-80 w-full overflow-y-auto h-screen">
        <section className="py-16 px-12">
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-16 flex items-center gap-4">
            <Briefcase className="w-10 h-10 text-brand-orange" />
            Experience
          </h2>

          <div className="space-y-12 max-w-6xl">
            <div className="relative pl-8 border-l-2 border-brand-orange/30 hover:border-brand-orange transition-colors">
              <div className="absolute -left-[13px] top-2 w-6 h-6 bg-brand-orange rounded-full"></div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight">Software Engineer</h3>
                  <span className="text-xs text-brand-light-gray uppercase tracking-wider">Aug 2022 – Aug 2025</span>
                </div>
                <p className="text-brand-orange text-sm font-semibold mb-4">Target Corporation</p>
                <ul className="list-disc pl-5 space-y-3 text-sm text-brand-gray leading-relaxed">
                  {/* <p><span className="text-brand-black font-bold">Nationwide Location Intelligence:</span> Built systems mapping every U.S. ZIP code to nearest Target stores.</p>
                  <p><span className="text-brand-black font-bold">Platform Reliability (+40%):</span> Achieved 30% faster response times during high-traffic sales events.</p>
                  <p><span className="text-brand-black font-bold">Kafka Pipeline Optimization:</span> Engineered real-time log processing ensuring data accuracy across enterprise systems.</p>
                  <p><span className="text-brand-black font-bold">Route Algorithm Improvements:</span> Reduced map load times by 45%, increased delivery efficiency by 20%.</p>
                  <p><span className="text-brand-black font-bold">Cost Savings ($80K annually):</span> Engineered in-house mapping tools replacing commercial providers.</p> */}
                <li>Built nationwide <span className="text-brand-black font-bold">location intelligence systems</span> by mapping every U.S. ZIP code to its nearest Target store, enabling data-driven <span className="text-brand-black font-bold">regional marketing and enhancing Google Ads</span> targeting across all U.S markets.</li>
                <li>Strengthened Target Locations services <span className="text-brand-black font-bold">platform reliability by 40%</span> through architectural optimizations, resulting in <span className="text-brand-black font-bold">30% faster response times</span> during high-traffic sales events.</li>
                <li>Led a successful POC automating Electronic Shelf Labels, cutting manual efforts by <span className="text-brand-black font-bold">50% </span> and enable live in-store price updates</li>
                <li>Optimized <span className="text-brand-black font-bold">Kafka-based automation pipelines</span> for real-time log processing and data accuracy, consistent across enterprise systems increasing<span className="text-brand-black font-bold">data reliability by 25%.</span></li>
                <li>Improved <span className="text-brand-black font-bold">route calculation algorithms</span>, reducing map load times by ~ 45% and increasing efficiency by 20% leading to faster deliveries while integrating adverse-weather data to enable safer and more reliable truck routing and smoother store navigation.</li>
                <li>Designed and deployed a custom<span className="text-brand-black font-bold">GraphQL API framework</span>, modernizing data retrieval across multiple internal services.</li>
                <li><span className="text-brand-black font-bold">Optimized and restructured code,</span> reducing issue resolution time by 5%, increasing effectiveness of production support adapting to peak sales season and minimizing downtime.</li>
                <li>Engineered <span className="text-brand-black font-bold">in-house mapping tools</span> leveraging open-source technologies, fully replacing commercial map providers and achieving annual cost savings of ~$80K.</li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-brand-orange/30 hover:border-brand-orange transition-colors">
              <div className="absolute -left-[13px] top-2 w-6 h-6 bg-brand-orange rounded-full"></div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight">Lead Software Engineer & Product Architect</h3>
                  <span className="text-xs text-brand-light-gray uppercase tracking-wider">Oct 2024 – Aug 2025</span>
                </div>
                <p className="text-brand-orange text-sm font-semibold mb-4">Goldberry Live</p>
                <ul className="list-disc pl-5 space-y-3 text-sm text-brand-gray leading-relaxed">
  <li>
    Built the end-to-end marketplace booking platform MVP connecting music artists
    and venues, driving <span className="text-brand-black font-bold">25 initial user sign-ups (20 artists, 5 venues)</span> and securing
    a 365-day contract with a key venue partner.
  </li>

  <li>
    Secured <span className="text-brand-black font-bold">$30K in seed funding</span> by leading the development and investor presentation
    of a working prototype that validated the platform’s technical feasibility and
    business potential.
  </li>

  <li>
    Developed <span className="text-brand-black font-bold">responsive web and cross-platform mobile applications</span> with integrated
    payments, in-app chat, and low-latency audio tools, enabling seamless artist–venue
    coordination and boosting user engagement and retention.
  </li>

  <li>
    Led the <span className="text-brand-black font-bold">full product development lifecycle</span> by prioritizing feature rollouts,
    optimizing UI/UX, and implementing a CI/CD framework that accelerated delivery
    while ensuring alignment between technical execution and product vision.
  </li>
</ul>

              </div>
            </div>
            <div className="relative pl-8 border-l-2 border-brand-orange/30 hover:border-brand-orange transition-colors">
              <div className="absolute -left-[13px] top-2 w-6 h-6 bg-brand-orange rounded-full"></div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight">Software Developer Intern</h3>
                  <span className="text-xs text-brand-light-gray uppercase tracking-wider">Sep 2021 – Oct 2021</span>
                </div>
                <p className="text-brand-orange text-sm font-semibold mb-4">JM Furniture Enterprise</p>
                <ul className="list-disc pl-5 space-y-3 text-sm text-brand-gray leading-relaxed">
  <li>
    Developed a <span className="text-brand-black font-bold">custom inventory tracking</span> architecture integrating real-time data
    from the factory floor, reducing stock discrepancies and boosting operational
    efficiency by 42% across warehousing and logistics.
  </li>

  <li>
    Engineered a <span className="text-brand-black font-bold">full-stack farm-to-consumer</span> application connecting rural producers
    with urban markets, bridging economic divides and fostering <span className="text-brand-black font-bold">sustainable community
    growth.</span>
  </li>
</ul>


              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-brand-orange/30 hover:border-brand-orange transition-colors">
              <div className="absolute -left-[13px] top-2 w-6 h-6 bg-brand-orange rounded-full"></div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight">Embedded Systems & Software Intern</h3>
                  <span className="text-xs text-brand-light-gray uppercase tracking-wider">Mar 2021 – Apr 2021</span>
                </div>
                <p className="text-brand-orange text-sm font-semibold mb-4">Hindustan Aeronautical Limited</p>
                <ul className="list-disc pl-5 space-y-3 text-sm text-brand-gray leading-relaxed">
  <li>
    Elevated <span className="text-brand-black font-bold">aircraft safety and maintenance efficiency</span> by developing custom signal
    conversion algorithms for the Health and Usage Monitoring System (HUMS), <span className="text-brand-black font-bold">reducing
    diagnostic times by 37% </span>while enabling real-time monitoring of critical
    operational parameters.
  </li>
</ul>

              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-12 border-t border-brand-light-gray/30">
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-16 flex items-center gap-4">
            <GraduationCap className="w-10 h-10 text-brand-orange" />
            Education
          </h2>

          <div className="space-y-12 max-w-6xl">
            <div className="relative pl-8 border-l-2 border-brand-orange/30 hover:border-brand-orange transition-colors">
              <div className="absolute -left-[13px] top-2 w-6 h-6 bg-brand-orange rounded-full"></div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-1">Master of Science in Electrical & Computer Engineering</h3>
                  <p className="text-brand-orange text-sm font-semibold">University of California, Davis</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-extrabold text-brand-orange">4.0</div>
                  <div className="text-xs text-brand-light-gray uppercase tracking-wider">CGPA</div>
                </div>
              </div>
              <p className="text-xs text-brand-light-gray uppercase tracking-wider mb-3">Sep 2025 – Jun 2026</p>
              <p className="text-sm text-brand-gray leading-relaxed">
                Focus on advanced systems architecture, distributed computing, and applied research bridging industry-scale engineering with cutting-edge academic exploration.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-brand-orange/30 hover:border-brand-orange transition-colors">
              <div className="absolute -left-[13px] top-2 w-6 h-6 bg-brand-orange rounded-full"></div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-1">B.E. Electronics and Communication Engineering</h3>
                  <p className="text-brand-orange text-sm font-semibold">Dr. Ambedkar Institute of Technology, Bengaluru</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-extrabold text-brand-orange">8.57</div>
                  <div className="text-xs text-brand-light-gray uppercase tracking-wider">CGPA / 10</div>
                </div>
              </div>
              <p className="text-xs text-brand-light-gray uppercase tracking-wider">Aug 2018 – Jun 2022</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-12 border-t border-brand-light-gray/30">
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-16 flex items-center gap-4">
            <FileText className="w-10 h-10 text-brand-orange" />
            Research & Publications
          </h2>

          <div className="space-y-12 max-w-6xl">
            <div className="relative pl-8 border-l-2 border-brand-orange/30 hover:border-brand-orange transition-colors group">
              <div className="absolute -left-[13px] top-2 w-6 h-6 bg-brand-orange rounded-full"></div>
              <div className="flex justify-between items-start mb-3 gap-4">
                <a href="https://www.irjet.net/archives/V11/i8/IRJET-V11I838.pdf" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                    Development of Computational System using Quantum Computing
                  </h3>
                </a>
                <a href="https://www.irjet.net/archives/V11/i8/IRJET-V11I838.pdf" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform flex-shrink-0">
                  <ExternalLink className="w-5 h-5 text-brand-light-gray group-hover:text-brand-orange transition-colors" />
                </a>
              </div>
              <p className="text-brand-orange text-xs font-semibold mb-3 uppercase tracking-wider">IRJET • Aug 2022 – Mar 2024</p>
              <p className="text-sm text-brand-gray leading-relaxed">
                Developed a <span className="text-brand-black font-bold">7-qubit ALU</span> on IBM's cloud quantum computer and simulated a <span className="text-brand-black font-bold">16-qubit ALU</span> locally using Qiskit. Analyzed differences between simulator and quantum computer execution.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-brand-orange/30 hover:border-brand-orange transition-colors group">
              <div className="absolute -left-[13px] top-2 w-6 h-6 bg-brand-orange rounded-full"></div>
              <div className="flex justify-between items-start mb-3 gap-4">
                <a href="https://www.irjet.net/archives/V10/i9/IRJET-V10I957.pdf" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                    Traffic Control Management System using Inductive Loop
                  </h3>
                </a>
                <a href="https://www.irjet.net/archives/V10/i9/IRJET-V10I957.pdf" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform flex-shrink-0">
                  <ExternalLink className="w-5 h-5 text-brand-light-gray group-hover:text-brand-orange transition-colors" />
                </a>
              </div>
              <p className="text-brand-orange text-xs font-semibold mb-3 uppercase tracking-wider">IRJET • Aug 2022 – Oct 2022</p>
              <p className="text-sm text-brand-gray leading-relaxed">
                Designed Inductive Loop Sensor System achieving <span className="text-brand-black font-bold">94% accuracy</span> and reducing reaction time by <span className="text-brand-black font-bold">20%</span> through real-time data processing.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-brand-orange/30 hover:border-brand-orange transition-colors group">
              <div className="absolute -left-[13px] top-2 w-6 h-6 bg-brand-orange rounded-full"></div>
              <div className="flex justify-between items-start mb-3 gap-4">
                <a href="https://www.irjet.net/archives/V9/i7/IRJET-V9I7238.pdf" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                    Blockchain Implementation in Educational Systems
                  </h3>
                </a>
                <a href="https://www.irjet.net/archives/V9/i7/IRJET-V9I7238.pdf" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform flex-shrink-0">
                  <ExternalLink className="w-5 h-5 text-brand-light-gray group-hover:text-brand-orange transition-colors" />
                </a>
              </div>
              <p className="text-brand-orange text-xs font-semibold mb-3 uppercase tracking-wider">IRJET • Jan 2022 – Jun 2022</p>
              <p className="text-sm text-brand-gray leading-relaxed">
                Engineered secure blockchain ledger system achieving <span className="text-brand-black font-bold">real-time data immutability and security</span> for institutional stakeholders.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-12 border-t border-brand-light-gray/30">
          <h2 className="text-5xl font-extrabold uppercase tracking-tight mb-16 flex items-center gap-4">
            <Code2 className="w-10 h-10 text-brand-orange" />
            Technical Expertise
          </h2>

          <div className="grid grid-cols-3 gap-8 max-w-6xl">
            <div className="relative pl-6 border-l-2 border-brand-orange/30">
              <h3 className="text-lg font-extrabold mb-4 text-brand-orange uppercase tracking-wide">Backend & APIs</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">GraphQL</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">Node.js</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">Java SpringBoot</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">REST APIs</span>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-brand-orange/30">
              <h3 className="text-lg font-extrabold mb-4 text-brand-orange uppercase tracking-wide">Frontend & Mobile</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">React.js</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">TypeScript</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">Cross-Platform</span>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-brand-orange/30">
              <h3 className="text-lg font-extrabold mb-4 text-brand-orange uppercase tracking-wide">Systems & Data</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">Kafka</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">PostgreSQL</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">MySQL</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">Linux</span>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-brand-orange/30">
              <h3 className="text-lg font-extrabold mb-4 text-brand-orange uppercase tracking-wide">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">C++</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">Python</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">JavaScript</span>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-brand-orange/30">
              <h3 className="text-lg font-extrabold mb-4 text-brand-orange uppercase tracking-wide">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">Jira</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">CI/CD</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">Nominatim</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">ProtoMaps</span>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-brand-orange/30">
              <h3 className="text-lg font-extrabold mb-4 text-brand-orange uppercase tracking-wide">Business Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">Product Management</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">Agile Scrum</span>
                <span className="px-3 py-1 bg-brand-white border border-brand-light-gray text-xs uppercase tracking-wider">Leadership</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 px-12 border-t border-brand-light-gray/30 text-center text-brand-light-gray text-xs uppercase tracking-wider">
          <p>© 2025 Shadab Hossain. Designed for academic excellence.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
