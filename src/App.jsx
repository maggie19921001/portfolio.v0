import { useEffect, useMemo, useRef, useState } from 'react';
import { imagePath, projects } from './data/projects.js';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'About me' },
  { href: '#about', label: 'Who I am' },
  { href: '#work', label: 'My Work' },
];

const services = [
  {
    title: '程式設計',
    icon: 'new_releases',
    items: ['熟悉網頁切版製作', 'JavaScript撰寫及API串接', '實作Vue框架頁面'],
  },
  {
    title: '網頁設計',
    icon: 'new_releases',
    items: ['擅長與團隊溝通', 'Wireframe流程繪製', '版面設計'],
  },
  {
    title: '動畫設計',
    icon: 'new_releases',
    items: ['獨立完成多部情境動畫', '帶領團隊完成2D/3D動畫', '動畫軟體教學經驗'],
  },
];

function parseRoute(hash) {
  const match = hash.match(/^#\/work\/([^/]+)$/);
  return match ? match[1] : null;
}

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || '#home');

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || '#home');
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  return hash;
}

function useRevealOnScroll(dependency) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    window.requestAnimationFrame(() => {
      elements.forEach((element) => observer.observe(element));
    });

    return () => observer.disconnect();
  }, [dependency]);
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);
    return () => document.body.classList.remove('nav-open');
  }, [isOpen]);

  return (
    <header>
      <div className="top-bar">
        <div className="logo">
          <a href="#home" onClick={() => setIsOpen(false)}>
            <img src={imagePath('YH_yh-logo-dark.png')} alt="YuHueiLin logo" />
          </a>
        </div>
        <button className="nav-toggle" type="button" aria-label="toggle navigation" onClick={() => setIsOpen((current) => !current)}>
          <span className="hamburger" />
        </button>
        <nav className="nav">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li className="nav__item" key={item.href}>
                <a className="nav__link" href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HomeIntro() {
  return (
    <section className="intro" id="home" data-reveal>
      <h1 className="section__title section__title--intro">
        嗨！我是 <strong>玉惠</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">front-end dev</p>
      <img src={imagePath('about-photo_yu-portrait-01.png')} alt="Yu Hui Lin smiling" className="intro__img" />
    </section>
  );
}

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateBackgroundPosition = () => {
      if (!sectionRef.current) return;
      sectionRef.current.style.backgroundPosition = `center ${window.scrollY * -0.1}px`;
    };

    updateBackgroundPosition();
    window.addEventListener('scroll', updateBackgroundPosition, { passive: true });
    return () => window.removeEventListener('scroll', updateBackgroundPosition);
  }, []);

  return (
    <section className="my-services" id="services" ref={sectionRef}>
      <h2 className="section__title section__title--services">Ｍultidisciplinary Designer</h2>
      <div className="services">
        {services.map((service) => (
          <div className="service" key={service.title} data-reveal>
            <h3 className="skill">{service.title}</h3>
            <span className="material-symbols-rounded" aria-hidden="true">
              {service.icon}
            </span>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about" data-reveal>
        Who I am
      </h2>
      <p className="section__subtitle section__subtitle--about" data-reveal>
        Designer & developer based out of Taiwan
      </p>

      <div className="about-me__body" data-reveal>
        <p>
          我熱愛從無到有地創作，無論是程式設計、動畫還是手作，這些經驗讓我深入理解不同媒介的創作過程。隨著對互動設計的興趣增加，我決定轉向網頁開發，學習了
          HTML、CSS、JavaScript 和 Vue.js，完成了台灣觀光旅遊網及電商平台專案，實現了 RWD 與 RESTFul API 整合。
        </p>
        <p>
          未來，我也希望學習Rive、Spline3D、Three.js，將 動畫/3D 技術應用於網頁，提升互動性。以及持續學習 UX
          設計，透過創意互動增強用戶體驗。我相信持續學習能讓我成為一名具有創造力的前端開發者。
        </p>
      </div>

      <img src={imagePath('about-photo_yu-portrait-02.png')} alt="Yu Hui Lin portrait" className="about-me__img" />
    </section>
  );
}

function Work() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work" data-reveal>
        My works
      </h2>
      <p className="section__subtitle section__subtitle--work" data-reveal>
        A selection of my range of work
      </p>

      <div className="portfolio" data-reveal>
        {projects.map((project) => (
          <a href={`#/work/${project.slug}`} className="portfolio__item" key={project.slug} aria-label={project.heroStrong}>
            <img src={imagePath(project.cardImage)} alt="" className="portfolio__img" />
          </a>
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <HomeIntro />
      <Services />
      <About />
      <Work />
    </>
  );
}

function ProjectHero({ project }) {
  return (
    <section className="intro" data-reveal>
      <h2 className="section__title section__title--intro project-title">
        {project.heroLead} <strong>{project.heroStrong}</strong>
      </h2>
      <p className="section__subtitle section__subtitle--intro">{project.subtitle}</p>
      <img src={imagePath(project.heroImage)} alt="" className="intro__img" />
    </section>
  );
}

function ProjectLink({ project }) {
  return (
    <div className="project-meta">
      <div>▲網頁展示影片</div>
      <a className="blue-link" href={project.liveUrl} target="_blank" rel="noreferrer">
        點我看網頁
      </a>
    </div>
  );
}

function ProjectBlock({ block }) {
  if (block.type === 'heading') {
    return (
      <p>
        <strong>{block.content}</strong>
      </p>
    );
  }

  if (block.type === 'image') {
    return (
      <>
        <img src={imagePath(block.src)} alt={block.alt || ''} />
        {block.caption ? <p>{block.caption}</p> : null}
      </>
    );
  }

  return <p>{block.content}</p>;
}

function ProjectPage({ project }) {
  return (
    <>
      <ProjectHero project={project} />
      <div className="portfolio-item-individual">
        <div className="videobox">
          <iframe src={project.video} title={`${project.heroStrong} 展示影片`} referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </div>
        <ProjectLink project={project} />
        {project.blocks.map((block, index) => (
          <ProjectBlock block={block} key={`${block.type}-${index}`} />
        ))}
        <a className="blue-link detail-back" href="#work">
          其他作品
        </a>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:hello@jane.dev" className="footer__link">
        maggie19921001@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com/maggie19921001" aria-label="GitHub">
            <i className="fab fa-github" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default function App() {
  const hash = useHashRoute();
  const projectSlug = parseRoute(hash);
  const currentProject = useMemo(() => projects.find((project) => project.slug === projectSlug), [projectSlug]);
  const routeKey = currentProject?.slug || 'home';

  useRevealOnScroll(routeKey);

  useEffect(() => {
    document.title = currentProject ? `${currentProject.heroStrong} | YuHueiLin Portfolio` : 'YuHueiLin Portfolio';
  }, [currentProject]);

  useEffect(() => {
    if (currentProject) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = hash.startsWith('#') ? hash.slice(1) : '';
    const targetElement = targetId && !targetId.startsWith('/') ? document.getElementById(targetId) : null;

    if (targetElement) {
      window.requestAnimationFrame(() => targetElement.scrollIntoView({ behavior: 'smooth' }));
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, currentProject]);

  return (
    <>
      <Header />
      <main>{currentProject ? <ProjectPage project={currentProject} /> : <HomePage />}</main>
      <Footer />
    </>
  );
}
