import { ArrowRightIcon, CheckIcon, ExternalLinkIcon, MailIcon, MapPinIcon } from "lucide-react"

import { Hero } from "@/components/blocks/hero-15/components/hero"
import { Alert, AlertDescription, AlertTitle } from "@/components/reui/alert"
import { Badge } from "@/components/reui/badge"
import { Frame, FrameDescription, FrameFooter, FrameHeader, FramePanel, FrameTitle } from "@/components/reui/frame"
import { IconTile } from "@/components/reui/icon-tile"
import { Timeline, TimelineContent, TimelineDate, TimelineHeader, TimelineIndicator, TimelineItem, TimelineSeparator, TimelineTitle } from "@/components/reui/timeline"
import { Button } from "@/components/ui/button"
import GovernancePage from "@/GovernancePage"
import ResearchArticle from "@/ResearchArticle"
import DirectboxIcon from "@/reui/icons/animated/outline/directbox-default"
import FingerprintIcon from "@/reui/icons/animated/outline/fingerprint-scanning"
import MessageProgrammingIcon from "@/reui/icons/animated/outline/message-programming"
import ScanBarcodeIcon from "@/reui/icons/animated/outline/scan-barcode"
import ShieldSearchIcon from "@/reui/icons/animated/outline/shield-search"

const commitments = ["Explicitly authorized", "Tightly scoped", "Human supervised", "Evidence driven"]

const capabilities = [
  { number: "01", title: "Vulnerability research", description: "Systematic analysis of applications and systems to identify, reproduce, and responsibly document security weaknesses.", icon: ShieldSearchIcon },
  { number: "02", title: "Exploit validation", description: "Controlled proof-of-concept development to distinguish theoretical findings from exploitable risk inside an agreed test environment.", icon: ScanBarcodeIcon },
  { number: "03", title: "Adversarial testing", description: "Scoped penetration tests and red-team exercises that examine realistic attack paths and turn observations into defensive improvements.", icon: MessageProgrammingIcon },
]

const outcomes = [
  ["533", "Paid registry payloads protected"],
  ["6", "Original source archives removed"],
  ["2 days", "Initial testing to remediation"],
  ["0", "Third-party accounts modified"],
]

const principles = [
  { title: "Authorization before action", description: "Testing begins only with documented permission, named systems, defined objectives, and explicit rules of engagement." },
  { title: "Human control throughout", description: "A qualified operator reviews targets, tool actions, evidence, and escalation decisions. Automation supports judgment; it does not replace it." },
  { title: "Minimal impact by design", description: "We use the least invasive method that can answer the research question and stop when operational risk exceeds the agreed threshold." },
  { title: "Evidence secured and disclosed", description: "Activity and findings are logged, access is restricted, sensitive data is minimized, and results follow an agreed disclosure path." },
]

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Gordian home">
      <span className="grid size-8 place-items-center rounded-md border border-border bg-muted/40 font-mono text-xs font-semibold">G</span>
      <span className="text-sm font-semibold tracking-tight">Gordian</span>
    </a>
  )
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.7fr_1.5fr_1fr] lg:items-end">
      <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground"><span className="size-1.5 rounded-full bg-success" aria-hidden="true" />{eyebrow}</p>
      <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="max-w-md text-sm leading-6 text-muted-foreground">{copy}</p>
    </div>
  )
}

export default function App() {
  if (window.location.pathname.startsWith("/research/reui-security-review")) {
    return <ResearchArticle />
  }

  if (window.location.pathname.startsWith("/governance")) {
    return <GovernancePage />
  }

  return (
    <div id="top" className="min-h-svh bg-background text-foreground">
      <a href="#main" className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>

      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[96rem] items-center justify-between px-4 sm:px-6 lg:px-12">
          <Brand />
          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#work">Work</a>
            <a className="transition-colors hover:text-foreground" href="#research">Research</a>
            <a className="transition-colors hover:text-foreground" href="#principles">Principles</a>
            <a className="transition-colors hover:text-foreground" href="/governance/">Governance</a>
            <a className="transition-colors hover:text-foreground" href="#legal">Legal</a>
          </nav>
          <Button size="sm" nativeButton={false} render={<a href="mailto:security@gordian.be" />}>Contact <ArrowRightIcon aria-hidden="true" className="size-3.5" /></Button>
        </div>
      </header>

      <main id="main">
        <Hero />

        <section aria-label="Core commitments" className="border-y border-border">
          <div className="mx-auto grid max-w-[90rem] sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((commitment, index) => (
              <div key={commitment} className="flex items-center gap-3 border-border px-6 py-5 not-last:border-b sm:odd:border-r lg:not-last:border-r lg:not-last:border-b-0">
                <span className="font-mono text-[0.65rem] text-muted-foreground">0{index + 1}</span><span className="text-sm">{commitment}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[90rem]">
            <SectionIntro eyebrow="What we do" title="Security work that holds up under scrutiny." copy="We connect technical depth with clear boundaries and actionable outcomes." />
            <Frame className="mt-12" spacing="sm">
              <div className="grid gap-1 lg:grid-cols-3">
                {capabilities.map(({ number, title, description, icon: Icon }) => (
                  <FramePanel key={number} className="min-h-72 p-6 sm:p-8">
                    <div className="flex items-start justify-between"><IconTile variant="frame" size="lg" aria-hidden="true"><Icon /></IconTile><Badge variant="outline" size="xs" radius="full">{number}</Badge></div>
                    <div className="mt-auto pt-16"><h3 className="text-xl font-medium tracking-tight">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{description}</p></div>
                  </FramePanel>
                ))}
              </div>
            </Frame>
          </div>
        </section>

        <section id="research" className="scroll-mt-24 border-y border-border bg-muted/20 px-4 py-24 sm:px-6 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[90rem]">
            <SectionIntro eyebrow="Published research" title="Evidence, not just assertions." copy="A recent coordinated disclosure shows how we scope research, validate impact, minimize harm, and verify remediation." />
            <Frame className="mt-12" spacing="sm">
              <FramePanel className="grid p-0 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="flex min-h-[31rem] flex-col p-6 sm:p-10 lg:p-14">
                  <div className="flex flex-wrap items-center gap-2"><Badge variant="success-light" radius="full">Remediated</Badge><span className="font-mono text-xs text-muted-foreground">05 SEP 2026 · APPLICATION SECURITY</span></div>
                  <div className="mt-auto pt-20"><h3 className="max-w-3xl text-4xl font-medium tracking-[-0.045em] sm:text-6xl">Breaking the Paywall, Not the Product</h3><p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">A responsible security review of ReUI found independent authorization failures across routing, object storage, database permissions, payment logic, and token verification.</p><Button className="mt-8" nativeButton={false} render={<a href="/research/reui-security-review/" />}>Read the case study <ExternalLinkIcon aria-hidden="true" className="size-4" /></Button></div>
                </div>
                <dl className="grid border-t border-border sm:grid-cols-2 lg:border-l lg:border-t-0">
                  {outcomes.map(([value, label]) => <div key={label} className="min-h-40 border-border p-6 odd:border-r not-last:border-b sm:p-8"><dt className="text-4xl font-medium tracking-tight text-success">{value}</dt><dd className="mt-3 max-w-[12rem] text-xs leading-5 text-muted-foreground">{label}</dd></div>)}
                </dl>
              </FramePanel>
            </Frame>
          </div>
        </section>

        <section id="principles" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[90rem] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div><p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground"><span className="size-1.5 rounded-full bg-success" aria-hidden="true" />How we operate</p><h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] sm:text-6xl">Capability demands accountability.</h2><p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground">Our operating model is designed around authorization, proportionality, traceability, and responsible handling of sensitive findings.</p></div>
            <Frame spacing="lg"><FramePanel><Timeline defaultValue={4}>{principles.map((principle, index) => <TimelineItem key={principle.title} step={index + 1}><TimelineHeader><TimelineDate>0{index + 1}</TimelineDate><TimelineTitle className="text-base">{principle.title}</TimelineTitle></TimelineHeader><TimelineIndicator /><TimelineSeparator /><TimelineContent className="max-w-2xl leading-6">{principle.description}</TimelineContent></TimelineItem>)}</Timeline></FramePanel></Frame>
          </div>
        </section>

        <section id="governance" className="scroll-mt-24 border-y border-border bg-muted/20 px-4 py-24 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-[90rem]">
            <Frame spacing="sm">
              <FramePanel className="grid gap-12 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
                <div>
                  <IconTile variant="soft" size="xl" className="text-success" aria-hidden="true"><FingerprintIcon /></IconTile>
                  <h2 className="mt-8 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">AI-assisted, expert-led.</h2>
                  <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">A separately governed workflow for advanced, authorized security research—not a customer-facing product feature.</p>
                </div>
                <div>
                  <p className="text-base leading-7 text-muted-foreground">Gordian&apos;s intended Daybreak Red use is narrow: controlled reproduction of vulnerabilities, minimal proof-of-concept and exploit validation, and scoped adversarial testing in company-owned or explicitly authorized environments. Routine defensive work remains on general-purpose capabilities.</p>
                  <Alert variant="success" className="mt-8">
                    <CheckIcon aria-hidden="true" />
                    <AlertTitle>Separate approval is a hard gate</AlertTitle>
                    <AlertDescription>Red-tier work stays disabled until OpenAI provisioning and Gordian&apos;s authorization, isolation, least-privilege, action-review, logging, and stop-condition gates all pass.</AlertDescription>
                  </Alert>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Named users", "Dedicated project", "Isolated execution", "Least privilege", "Human action review", "Audit trail", "Internal only"].map((control) => <Badge key={control} variant="outline" radius="full">{control}</Badge>)}
                  </div>
                  <Button className="mt-8" variant="outline" nativeButton={false} render={<a href="/governance/" />}>
                    Read the governance dossier
                    <ExternalLinkIcon aria-hidden="true" className="size-4" />
                  </Button>
                </div>
              </FramePanel>
            </Frame>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[90rem]"><Frame spacing="sm"><FramePanel className="p-0"><FrameHeader className="border-b border-border p-6 sm:p-10 lg:p-14"><Badge variant="outline" radius="full" className="mb-5 w-fit">Get in touch</Badge><FrameTitle className="max-w-4xl text-4xl font-medium tracking-[-0.045em] sm:text-6xl">Complex systems. Clear next steps.</FrameTitle><FrameDescription className="mt-5 max-w-2xl text-base leading-7">For authorized security research, assessment enquiries, or responsible disclosure.</FrameDescription></FrameHeader><FrameFooter className="flex-row items-center justify-between gap-6 p-6 sm:p-10"><div className="flex min-w-0 items-center gap-3"><IconTile variant="frame" aria-hidden="true"><DirectboxIcon /></IconTile><a href="mailto:security@gordian.be" className="truncate text-base font-medium hover:underline">security@gordian.be</a></div><Button nativeButton={false} render={<a href="mailto:security@gordian.be" />}>Open email <MailIcon aria-hidden="true" className="size-4" /></Button></FrameFooter></FramePanel></Frame><p className="mt-4 text-xs text-muted-foreground">Please do not send sensitive findings in the first email. We will provide a secure channel.</p></div>
        </section>
      </main>

      <footer id="legal" className="border-t border-border px-4 py-12 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[1fr_1fr_1.5fr]"><div><Brand /><p className="mt-5 text-sm text-muted-foreground">Cybersecurity research · Belgium</p></div><div><p className="text-xs font-medium uppercase tracking-wider">GORDIAN BV</p><address className="mt-4 flex gap-2 text-sm not-italic leading-6 text-muted-foreground"><MapPinIcon aria-hidden="true" className="mt-1 size-4 shrink-0" /><span>Vossekotstraat 21<br />8760 Tielt, Belgium</span></address><p className="mt-4 text-sm leading-6 text-muted-foreground">Enterprise 0785.534.209<br />VAT BE 0785.534.209</p></div><div><p className="text-xs font-medium uppercase tracking-wider">Privacy</p><p className="mt-4 text-sm leading-6 text-muted-foreground">This website uses no cookies, analytics, advertising, or contact forms. Essential access logs may be processed by our hosting provider for security and delivery.</p><div className="mt-6 flex flex-wrap gap-5 text-sm"><a className="hover:underline" href="https://kbopub.economie.fgov.be/kbopub/toonondernemingps.html?ondernemingsnummer=785534209" target="_blank" rel="noopener noreferrer">Official KBO record <ExternalLinkIcon aria-hidden="true" className="ml-1 inline size-3" /></a><a className="hover:underline" href="/governance/">AI security governance</a><a className="hover:underline" href="/.well-known/security.txt">Security.txt</a></div></div></div>
        <div className="mx-auto mt-12 flex max-w-[90rem] items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground"><span>© {new Date().getFullYear()} Gordian</span><span>Security research, responsibly applied.</span></div>
      </footer>
    </div>
  )
}
