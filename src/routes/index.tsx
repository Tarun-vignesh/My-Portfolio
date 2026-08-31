import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Download,
  GraduationCap,
  Code2,
  Cpu,
  Globe,
  Lightbulb,
  BriefcaseBusiness,
  Award,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tarun Vignesh P M — AI & Data Science Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Tarun Vignesh P M, B.Tech AI & Data Science student building IoT, machine learning and web projects. View projects, skills and resume.",
      },
      {
        property: "og:title",
        content: "Tarun Vignesh P M — AI & Data Science Portfolio",
      },
      {
        property: "og:description",
        content:
          "AI & Data Science student specialising in IoT, embedded systems, machine learning and web development.",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const interests = [
  {
    icon: Cpu,
    title: "IoT & Embedded Systems",
    body: "Designing connected hardware with ESP8266 and Arduino, from firmware to mobile control.",
  },
  {
    icon: Globe,
    title: "Web Development",
    body: "Building React dashboards and interfaces that make data understandable.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    body: "Analytical thinking and programming to break down problems into workable systems.",
  },
];

const skillGroups = [
  { title: "Programming", items: ["Java", "Python"] },
  {
    title: "Tools & Technologies",
    items: ["Excel", "Power BI", "Arduino IDE"],
  },
  { title: "Database", items: ["MySQL"] },
  { title: "Version Control", items: ["Git (Basic)"] },
  {
    title: "AI / ML",
    items: ["Linear Regression", "XGBoost", "Explainable AI"],
  },
  {
    title: "Soft Skills",
    items: ["Analytical Thinking", "Teamwork", "Collaboration"],
  },
];

const projects = [
  {
    title: "Education Score Forecasting Using AI",
    period: "Nov 2025",
    stack: ["Python", "Machine Learning", "React.js", "Supabase"],
    points: [
      "AI-based academic performance prediction system built on machine learning algorithms.",
      "Models forecast institutional average, topper score and student engagement from academic datasets.",
      "Explainable AI surfaces key drivers such as attendance and study hours.",
      "Interactive web dashboard visualises predictions with personalised study recommendations.",
    ],
  },
  {
    title: "Home Automation using ESP8266",
    period: "Nov 2023 — Apr 2024",
    stack: ["ESP8266", "Arduino IDE", "Blynk"],
    points: [
      "Wi-Fi enabled smart home system controlling lights and fans remotely via a mobile app.",
      "Real-time device monitoring and control through the Blynk platform.",
      "Code optimised for low power usage and stable connectivity.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech — Artificial Intelligence and Data Science",
    school: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
    period: "2024 — 2027",
    score: "CGPA 7.8 / 10",
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Nachimuthu Polytechnic College, Pollachi",
    period: "2021 — 2024",
    score: "80%",
  },
  {
    degree: "SSLC",
    school: "Arokiamatha Matriculation Higher Secondary School, Pollachi",
    period: "2020 — 2021",
    score: "",
  },
];

const certifications = [
  "Intro to Machine Learning, Deep Learning and Computer Vision — AI Club Summer School 2023",
  "NPTEL course on Communication Skills",
  "Certified Data Science course — CISCO",
  "Professional workshops on industry knowledge and practical skills",
];

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a
            href="#top"
            className="font-display text-sm font-bold tracking-tight"
          >
            TARUN<span className="text-primary">.</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero-glow border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
                AI &amp; Data Science · Pollachi, India
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-6xl">
                Tarun Vignesh <span className="text-gradient">P M</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Aspiring technology professional with a strong foundation in AI,
                data science and programming — seeking to contribute to
                innovative software and product development while continuously
                learning and growing.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View projects <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  Get in touch
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-5 text-sm text-muted-foreground">
                <a
                  href="https://github.com/Tarun-vignesh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/tarun-vignesh-2192882a5"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Pollachi, Tamil Nadu
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-3xl bg-[image:var(--gradient-accent)] opacity-25 blur-2xl" />
              <img
                src="/tarun.jpg"
                alt="Portrait of Tarun Vignesh P M"
                className="relative w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-elegant)]"
              />
            </div>
          </div>
        </section>

        {/* About / interests */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading eyebrow="About" title="What I focus on" />
          <div className="grid gap-6 md:grid-cols-3">
            {interests.map((i) => (
              <article key={i.title} className="card-elevated p-6">
                <i.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {i.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-y border-border bg-surface/40">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionHeading eyebrow="Skills" title="Technical & soft skills" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((g) => (
                <div key={g.title} className="card-elevated p-6">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider">
                      {g.title}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading eyebrow="Projects" title="Selected work" />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="card-elevated flex flex-col p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <span className="whitespace-nowrap font-mono text-xs text-primary">
                    {p.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2 pt-1">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-foreground/80"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Experience + education */}
        <section
          id="experience"
          className="border-y border-border bg-surface/40"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Experience" title="Internship" />
              <div className="card-elevated p-7">
                <div className="flex items-center gap-2 text-primary">
                  <BriefcaseBusiness className="h-4 w-4" />
                  <span className="font-mono text-xs">June 2023</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">
                  Smart Automation Intern
                </h3>
                <p className="text-sm text-muted-foreground">
                  On Words Smart Solutions, Pollachi
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Gained hands-on experience installing and debugging home
                  automation systems. Assisted with smart-device setup and
                  firmware testing using ESP8266 and Arduino.
                </p>
              </div>

              <div className="mt-10">
                <SectionHeading
                  eyebrow="Certifications"
                  title="Learning & credentials"
                />
                <ul className="space-y-3">
                  {certifications.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 rounded-lg border border-border bg-surface p-4 text-sm text-muted-foreground"
                    >
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Education" title="Academic background" />
              <ol className="relative space-y-8 border-l border-border pl-7">
                {education.map((e) => (
                  <li key={e.degree} className="relative">
                    <span className="absolute -left-[35px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-background">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    <div className="flex items-center gap-2 font-mono text-xs text-primary">
                      <GraduationCap className="h-3.5 w-3.5" /> {e.period}
                      {e.score && (
                        <span className="text-muted-foreground">
                          · {e.score}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-base font-semibold">{e.degree}</h3>
                    <p className="text-sm text-muted-foreground">{e.school}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading eyebrow="Contact" title="Let's build something" />
          <div className="card-elevated grid gap-6 p-8 sm:grid-cols-2">
            <a
              href="mailto:pmtarunvignesh@gmail.com"
              className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5 text-primary" /> pmtarunvignesh@gmail.com
            </a>
            <a
              href="tel:+918610639524"
              className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
            >
              <Phone className="h-5 w-5 text-primary" /> +91 86106 39524
            </a>
            <a
              href="https://github.com/Tarun-vignesh"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5 text-primary" />{" "}
              github.com/Tarun-vignesh
            </a>
            <a
              href="https://www.linkedin.com/in/tarun-vignesh-2192882a5"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5 text-primary" /> LinkedIn profile
            </a>
          </div>
          <div className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" /> Download resume
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <p className="mx-auto max-w-6xl px-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tarun Vignesh P M · AI &amp; Data
          Science, Pollachi
        </p>
      </footer>
    </div>
  );
}
