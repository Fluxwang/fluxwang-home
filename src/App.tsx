import { useEffect, useState } from "react";
import { config, getContent, type Lang } from "./content";

const LANG_KEY = "lang";

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    // storage unavailable
  }
  return config.defaultLang;
}

function Portrait({ placeholder }: { placeholder: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="portrait">
      {failed ? (
        <div className="placeholder">{placeholder}</div>
      ) : (
        <img src={config.avatar} alt="Mark" onError={() => setFailed(true)} />
      )}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const job = config.jobSeeking;
  const zh = lang === "zh";
  const { t, interests, projects, links, projectCount } = getContent(lang, job);

  useEffect(() => {
    document.documentElement.lang = zh ? "zh-CN" : "en";
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // storage unavailable
    }
  }, [lang, zh]);

  // When job seeking, projects come first
  const projectsNum = job ? "01" : "02";
  const interestsNum = job ? "02" : "01";

  return (
    <div className="page" data-acc={config.accent}>
      {job && (
        <div className="banner">
          <div className="container">
            <div className="banner-msg">
              <span className="status">● open_to_work</span>
              <span>{t.banner}</span>
            </div>
            <a href={`mailto:${config.email}`}>{t.contact} →</a>
          </div>
        </div>
      )}

      <header className="container header">
        <a href="#" className="brand">
          <span className="acc">~/</span>
          <span>fluxwang.com</span>
        </a>
        <nav className="nav">
          <a href="#projects">#{t.navProjects}</a>
          <a href="https://wangzhr.top" target="_blank" rel="noreferrer">
            #{t.navBlog}
          </a>
          {job && (
            <a href={config.resume} className="nav-hl" target="_blank" rel="noreferrer">
              #{t.resume}
            </a>
          )}
          <button
            type="button"
            className="lang-btn"
            onClick={() => setLang(zh ? "en" : "zh")}
            aria-label={zh ? "Switch to English" : "切换到中文"}
          >
            <span className={zh ? "on" : "off"}>中</span>
            <span className="sep">/</span>
            <span className={zh ? "off" : "on"}>EN</span>
          </button>
        </nav>
      </header>

      <main className="container main">
        <section className="hero">
          <div className="hero-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="title">mark@singapore: ~ — whoami</span>
          </div>
          <div className="hero-body">
            <div className="hero-text">
              <div className="prompt">
                <span className="acc">$</span> whoami
              </div>
              <div className="hey">{t.hey}</div>
              <h1>
                Mark
                <span className="cursor" aria-hidden="true" />
              </h1>
              <div className="tagline">{t.tagline}</div>
              <p className="intro">{t.intro}</p>
              <div className="actions">
                {job && (
                  <>
                    <a href={`mailto:${config.email}`} className="btn btn-primary">
                      ✉ {t.email}
                    </a>
                    <a href={config.resume} className="btn" target="_blank" rel="noreferrer">
                      ↓ resume.pdf
                    </a>
                  </>
                )}
                <a href={config.github} className="btn" target="_blank" rel="noreferrer">
                  github/Fluxwang ↗
                </a>
              </div>
            </div>
            <div className="portrait-wrap">
              <Portrait placeholder={t.photo} />
              <div className="location">📍 ShenZhen · UTC+8</div>
            </div>
          </div>
        </section>

        <div className="sections">
          <section className="section" style={{ order: job ? 2 : 1 }}>
            <div className="section-head">
              <span className="num">{interestsNum}</span>
              <span className="cmd">
                <span className="acc">$</span> cd ~/interests
              </span>
              <span className="comment"># {t.interests}</span>
            </div>
            <div className="grid grid-270">
              {interests.map((it) => (
                <div key={it.n} className="card interest">
                  <div className="n">{it.n}</div>
                  <div className="title">{it.title}</div>
                  <div className="note">{it.note}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="section" style={{ order: job ? 1 : 2 }}>
            <div className="section-head">
              <span className="num">{projectsNum}</span>
              <span className="cmd">
                <span className="acc">$</span> cd ~/projects
              </span>
              <span className="comment"># {t.projects}</span>
              <span className="meta">drwxr-xr-x · {projectCount}</span>
            </div>
            <div className="grid">
              {projects.map((p) => {
                const external = p.href.startsWith("http");
                return (
                  <a
                    key={p.href + p.name}
                    href={p.href}
                    className="card project"
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <div className="project-top">
                      <span className="name">{p.name}</span>
                      <span className="where">{p.where}</span>
                    </div>
                    <div className="desc">{p.desc}</div>
                    <div className="tags">
                      {p.tags.map((tg) => (
                        <span key={tg} className="tag">
                          {tg}
                        </span>
                      ))}
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          <section id="writing" className="section" style={{ order: 3 }}>
            <div className="section-head">
              <span className="num">03</span>
              <span className="cmd">
                <span className="acc">$</span> cd ~/writing
              </span>
              <span className="comment"># {t.elsewhere}</span>
            </div>
            <div className="grid">
              {links.map((l) => (
                <a key={l.host} href={l.href} className="card link-card" target="_blank" rel="noreferrer">
                  <div className="host">
                    <span className="acc">$</span> open {l.host}
                  </div>
                  <div className="row">
                    <span className="label">{l.label}</span>
                    <span className="acc">↗</span>
                  </div>
                  <div className="note">{l.note}</div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="container footer">
        <div className="footer-inner">
          <div>
            <span>
              <span className="acc">$</span> echo $EMAIL
            </span>
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <span>© {new Date().getFullYear()} Mark · built &amp; self-hosted</span>
        </div>
      </footer>
    </div>
  );
}
