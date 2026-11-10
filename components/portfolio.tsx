import {
  achievements,
  experience,
  practice,
  profile,
  projects,
} from "@/content/profile";

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new window)</span>
    </a>
  );
}

export function Portfolio() {
  return (
    <div className="compact-portfolio">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="portfolio-frame">
        <aside className="identity-rail" id="top">
          <div>
            <p className="availability"><i /> Available for the right role</p>
            <h1>{profile.name}</h1>
            <h2>Frontend-focused full-stack engineer.</h2>
            <p className="intro">
              I build fast, thoughtful interfaces for complex products—from
              real-time AI systems to data-heavy SaaS.
            </p>
            <nav aria-label="Portfolio sections">
              <a href="#about"><span>01</span>About</a>
              <a href="#work"><span>02</span>Experience</a>
              <a href="#projects"><span>03</span>Projects</a>
              <a href="#background"><span>04</span>Background</a>
            </nav>
          </div>
          <div className="rail-footer">
            <div className="rail-links">
              <a href={`mailto:${profile.email}`}>Email</a>
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            </div>
          </div>
        </aside>

        <main id="content" className="portfolio-content">
          <section className="compact-section about-copy" id="about" aria-labelledby="about-title">
            <p className="mobile-section-label">About</p>
            <h2 className="sr-only" id="about-title">About</h2>
            <p>
              I&apos;m a full-stack engineer specialising in React, Next.js,
              TypeScript, and scalable frontend architecture. At SpyCraft, I
              own core product experiences across AI chat, advertising data,
              analytics, and asynchronous reports.
            </p>
            <p>
              My best work sits where engineering and product design meet:
              making slow systems feel responsive, turning complicated
              workflows into clear interfaces, and leaving the codebase easier
              to change than I found it.
            </p>
            <div className="quick-facts">
              <div><strong>40%</strong><span>less pagination wait</span></div>
              <div><strong>35%</strong><span>faster time to interactive</span></div>
              <div><strong>25%</strong><span>fewer API calls</span></div>
            </div>
          </section>

          <section className="compact-section" id="work" aria-labelledby="experience-title">
            <p className="mobile-section-label">Experience</p>
            <h2 className="section-title" id="experience-title">Experience</h2>

            {experience.map((role) => (
              <article className="experience-entry" key={role.date + role.role}>
                <p className="experience-date">{role.date}</p>
                <div>
                  <h3>
                    {role.role} <span>· {role.company}</span>
                  </h3>
                  <p className="role-summary">{role.summary}</p>
                  <ul>
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <TagList tags={role.tags} />
                </div>
              </article>
            ))}
          </section>

          <section className="compact-section" id="projects" aria-labelledby="projects-title">
            <p className="mobile-section-label">Projects</p>
            <div className="title-row">
              <h2 className="section-title" id="projects-title">Selected projects</h2>
            </div>

            {projects.map((project) => (
              <article className="compact-project" key={project.name}>
                <ProjectMark type={project.mark} />
                <div>
                  <p className="project-kind">
                    {project.date ? `${project.kind} · ${project.date}` : project.kind}
                  </p>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  {project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <ExternalLink key={link.href} href={link.href}>
                          {link.label} ↗
                        </ExternalLink>
                      ))}
                    </div>
                  )}
                  <TagList tags={project.tags} />
                </div>
              </article>
            ))}
          </section>

          <section className="compact-section" id="background" aria-labelledby="background-title">
            <p className="mobile-section-label">Background</p>
            <h2 className="section-title" id="background-title">Background</h2>
            <p className="degree">B.Tech, Computer Science · IIIT Delhi · 2021–2025</p>
            <div className="background-list">
              {achievements.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="skills-line">
              {practice.map((group) => (
                <div key={group.label}>
                  <span>{group.label}</span>
                  <p>{group.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="compact-section compact-contact" id="contact" aria-labelledby="contact-title">
            <p className="mobile-section-label">Contact</p>
            <h2 id="contact-title">Let&apos;s make the complicated feel simple.</h2>
            <p>
              I&apos;m looking for a product engineering role where frontend
              architecture, performance, and interface craft matter.
            </p>
            <a href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a>
          </section>

          <footer className="compact-footer">
            <p>Designed and built by Shlok Mehroliya.</p>
            <a href="#top">Back to top ↑</a>
          </footer>
        </main>
      </div>
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="compact-tags">
      {tags.map((tag) => <span key={tag}>{tag}</span>)}
    </div>
  );
}

function ProjectMark({ type }: { type: "jalsa" | "route" | "audio" }) {
  return (
    <div className={`project-mark mark-${type}`} aria-hidden="true">
      {type === "jalsa" && (
        <>
          <div className="mini-phone"><i /><strong>J</strong><span /></div>
          <div className="mini-dash"><span /><span /><span /></div>
        </>
      )}
      {type === "route" && (
        <svg viewBox="0 0 160 100">
          <path d="M8 83 C35 82 41 28 73 42 S106 79 151 17" />
          <circle cx="8" cy="83" r="4" />
          <circle cx="73" cy="42" r="4" />
          <circle cx="151" cy="17" r="4" />
        </svg>
      )}
      {type === "audio" && (
        <div className="mini-wave">
          {[22, 46, 74, 38, 88, 54, 31, 68, 42, 78, 29].map((height, index) => (
            <i key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
      )}
    </div>
  );
}
