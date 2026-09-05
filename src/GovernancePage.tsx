import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CheckCircle2Icon,
  ExternalLinkIcon,
  LockKeyholeIcon,
  OctagonXIcon,
  ShieldCheckIcon,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/reui/alert"
import { Badge } from "@/components/reui/badge"
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"
import { IconTile } from "@/components/reui/icon-tile"
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"
import { Button } from "@/components/ui/button"

const intendedUses = [
  {
    title: "Controlled reproduction",
    description:
      "Reproduce a documented or strongly evidenced vulnerability inside an approved lab or assessment boundary.",
  },
  {
    title: "Minimal exploit validation",
    description:
      "Develop the smallest proof of concept needed to confirm exploitability and support a verified fix.",
  },
  {
    title: "Scoped adversarial testing",
    description:
      "Test an explicitly authorized system against agreed objectives, rules of engagement, and stop conditions.",
  },
]

const activationGates = [
  {
    title: "Authorize",
    description:
      "Record the system owner, named targets, objectives, permitted actions, test window, data boundaries, and emergency contact.",
  },
  {
    title: "Isolate",
    description:
      "Use a dedicated workspace or API project and an ephemeral execution environment with least-privilege credentials and restricted egress.",
  },
  {
    title: "Review",
    description:
      "A qualified human approves the target and sensitive actions before they can cross the sandbox boundary.",
  },
  {
    title: "Execute minimally",
    description:
      "Collect only the evidence needed to answer the research question. Rate-limit, log, and halt on a stop condition.",
  },
  {
    title: "Close and disclose",
    description:
      "Revoke temporary access, secure or delete retained evidence on schedule, disclose through the agreed channel, and verify remediation.",
  },
]

const accessControls = [
  ["Identity", "Named internal researchers only; no shared accounts or delegated customer access."],
  ["Provisioning", "The approved identity, workspace or API organization and project, model, and product surface only."],
  ["Distribution", "No resale, proxy access, downstream product feature, or external-user access."],
  ["Permissions", "Least privilege by default, short-lived credentials where available, and no production write access unless expressly authorized."],
  ["Oversight", "Human approval for sensitive actions, an auditable action trail, and an accountable engagement owner."],
  ["Data", "Evidence minimization, redaction, access restriction, and a retention period defined before testing begins."],
] as const

const stopConditions = [
  "Authorization, target identity, or scope is unclear",
  "Credentials, secrets, or unexpected personal data become accessible",
  "A step would establish persistence or change production state",
  "Availability, integrity, or third-party impact may exceed the agreed threshold",
  "Isolation, logging, review, or least-privilege controls are unavailable",
]

function Brand() {
  return (
    <a href="/" className="flex items-center gap-2.5" aria-label="Gordian home">
      <span className="grid size-8 place-items-center rounded-md border border-border bg-muted/40 font-mono text-xs font-semibold">
        G
      </span>
      <span className="text-sm font-semibold tracking-tight">Gordian</span>
    </a>
  )
}

function PolicySection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="border-t border-border py-16 first:border-t-0 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-lg text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}

export default function GovernancePage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <a
        href="#policy"
        className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to governance policy
      </a>

      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[96rem] items-center justify-between px-4 sm:px-6 lg:px-12">
          <Brand />
          <nav aria-label="Governance navigation" className="flex items-center gap-2">
            <Button variant="ghost" size="sm" nativeButton={false} render={<a href="/" />}>
              <ArrowLeftIcon aria-hidden="true" />
              Home
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="mailto:security@gordian.be" />}>
              Contact
              <ArrowUpRightIcon aria-hidden="true" />
            </Button>
          </nav>
        </div>
      </header>

      <main id="policy">
        <header className="border-b border-border bg-muted/20 px-4 py-20 sm:px-6 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[90rem]">
            <Frame spacing="sm">
              <FramePanel className="p-6 sm:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="success-light" radius="full">
                    Daybreak Red readiness
                  </Badge>
                  <Badge variant="outline" radius="full">
                    Control baseline · v1.0
                  </Badge>
                </div>
                <h1 className="mt-8 max-w-5xl text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                  Advanced capability, <span className="text-success">bounded by design.</span>
                </h1>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Gordian&apos;s public operating standard for separately approved cybersecurity models: narrow use, explicit authorization, isolated execution, least privilege, human review, and accountable disclosure.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                  <time dateTime="2026-09-05">Effective 5 September 2026</time>
                  <span>Owner: GORDIAN BV</span>
                  <span>Review cycle: annual or material change</span>
                </div>
              </FramePanel>
            </Frame>
          </div>
        </header>

        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-12">
          <section className="py-12 sm:py-16">
            <Alert variant="info">
              <ShieldCheckIcon aria-hidden="true" />
              <AlertTitle>Approval is a prerequisite, not a claim</AlertTitle>
              <AlertDescription>
                This page documents the controls Gordian requires before any Daybreak Red use. It does not represent that access has been granted. Work remains disabled unless OpenAI provisioning and every applicable internal gate are complete.
              </AlertDescription>
            </Alert>
          </section>

          <PolicySection eyebrow="01 · Purpose" title="A narrow need for the Red tier.">
            <div className="space-y-6 text-base leading-8 text-muted-foreground">
              <p>
                Routine vulnerability discovery, secure code review, threat modeling, remediation, and patch validation should use general-purpose or Daybreak Blue capabilities. Gordian&apos;s Red-tier need is limited to advanced, authorized work where controlled reproduction and exploit validation are the research task—not a side effect.
              </p>
              <p>
                The intended outcome is defensive: establish whether a weakness is genuinely exploitable, preserve the minimum evidence, help the system owner remediate, and verify the fix.
              </p>
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {intendedUses.map((use, index) => (
                <Frame key={use.title} spacing="sm">
                  <FramePanel className="h-full p-6">
                    <Badge variant="outline" size="xs" radius="full">
                      0{index + 1}
                    </Badge>
                    <h3 className="mt-10 text-lg font-medium tracking-tight">{use.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{use.description}</p>
                  </FramePanel>
                </Frame>
              ))}
            </div>
          </PolicySection>

          <PolicySection eyebrow="02 · Activation" title="Five gates before capability.">
            <Frame spacing="lg">
              <FramePanel>
                <Timeline defaultValue={5}>
                  {activationGates.map((gate, index) => (
                    <TimelineItem key={gate.title} step={index + 1}>
                      <TimelineHeader>
                        <TimelineDate>Gate 0{index + 1}</TimelineDate>
                        <TimelineTitle className="text-base">{gate.title}</TimelineTitle>
                      </TimelineHeader>
                      <TimelineIndicator />
                      <TimelineSeparator />
                      <TimelineContent className="max-w-2xl leading-6">
                        {gate.description}
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </FramePanel>
            </Frame>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              A failed or unavailable gate is a stop, not an exception path.
            </p>
          </PolicySection>

          <PolicySection eyebrow="03 · Access" title="Internal, named, least-privilege.">
            <Frame spacing="sm">
              <FramePanel className="p-0">
                <dl className="divide-y divide-border">
                  {accessControls.map(([term, description]) => (
                    <div key={term} className="grid gap-2 p-5 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:p-6">
                      <dt className="text-sm font-medium">{term}</dt>
                      <dd className="text-sm leading-6 text-muted-foreground">{description}</dd>
                    </div>
                  ))}
                </dl>
              </FramePanel>
            </Frame>
          </PolicySection>

          <PolicySection eyebrow="04 · Stop rules" title="When in doubt, stop.">
            <Frame spacing="sm">
              <FramePanel className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <IconTile variant="soft" className="shrink-0 text-destructive" aria-hidden="true">
                    <OctagonXIcon />
                  </IconTile>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">Immediate stop conditions</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                      The operator preserves safe evidence, stops execution, and escalates to the engagement owner when any condition below is met.
                    </p>
                  </div>
                </div>
                <ul className="mt-8 grid gap-3 md:grid-cols-2">
                  {stopConditions.map((condition) => (
                    <li key={condition} className="flex gap-3 border-t border-border pt-4 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2Icon aria-hidden="true" className="mt-1 size-4 shrink-0 text-success" />
                      {condition}
                    </li>
                  ))}
                </ul>
              </FramePanel>
            </Frame>
          </PolicySection>

          <PolicySection eyebrow="05 · Accountability" title="Traceable from scope to disclosure.">
            <div className="space-y-6 text-base leading-8 text-muted-foreground">
              <p>
                Each engagement has a human owner and a written record connecting authorization, model access, proposed and approved sensitive actions, execution logs, evidence, disclosure, and remediation status. Evidence is minimized and separated from the distributable report when it could expose credentials, personal data, or proprietary source.
              </p>
              <p>
                Suspected misuse, control failure, or unintended impact is escalated immediately. Access can be revoked independently of the engagement, and activity does not resume until the owner confirms the boundary and controls.
              </p>
            </div>
            <Frame className="mt-8" spacing="sm">
              <FramePanel className="p-0">
                <FrameHeader className="border-b border-border p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <IconTile variant="frame" aria-hidden="true">
                      <LockKeyholeIcon />
                    </IconTile>
                    <div>
                      <FrameTitle>Governance contact</FrameTitle>
                      <FrameDescription className="mt-1">
                        Questions, security reports, or concerns about this policy.
                      </FrameDescription>
                    </div>
                  </div>
                </FrameHeader>
                <FrameFooter className="flex-row flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
                  <a className="font-medium hover:underline" href="mailto:security@gordian.be">
                    security@gordian.be
                  </a>
                  <Button nativeButton={false} render={<a href="mailto:security@gordian.be" />}>
                    Contact Gordian
                    <ArrowUpRightIcon aria-hidden="true" />
                  </Button>
                </FrameFooter>
              </FramePanel>
            </Frame>
            <p className="mt-6 text-xs leading-5 text-muted-foreground">
              This baseline is informed by OpenAI&apos;s public Daybreak guidance. See{" "}
              <a
                className="text-foreground underline underline-offset-4"
                href="https://learn.chatgpt.com/docs/cyber-safety"
                target="_blank"
                rel="noopener noreferrer"
              >
                Models and Trusted Access
                <ExternalLinkIcon aria-hidden="true" className="ml-1 inline size-3" />
              </a>
              . OpenAI has not reviewed or endorsed this document.
            </p>
          </PolicySection>
        </div>
      </main>

      <footer className="border-t border-border px-4 py-10 sm:px-6 lg:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <Brand />
          <span>GORDIAN BV · Enterprise 0785.534.209 · Belgium</span>
        </div>
      </footer>
    </div>
  )
}
