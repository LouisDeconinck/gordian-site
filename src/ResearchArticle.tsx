import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CheckCircle2Icon,
  ExternalLinkIcon,
} from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/reui/alert"
import { Badge } from "@/components/reui/badge"
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/reui/frame"
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

const boundaries = [
  "Two controlled accounts",
  "No completed purchases",
  "No third-party modification",
  "No payment data accessed",
  "Fixes independently retested",
]

const findings = [
  [
    "Path-normalization authorization bypass",
    "Anonymous access to 533 Pro block payloads",
    "Fixed",
  ],
  [
    "Public Ultimate template archives",
    "Six complete paid source packages downloadable",
    "Fixed",
  ],
  [
    "Over-permissive database function",
    "490 customer identifiers and plan tiers enumerable",
    "Fixed",
  ],
  [
    "Unrestricted waitlist promotion",
    "A restricted discount accepted without eligibility proof",
    "Fixed",
  ],
  [
    "Public fallback signing secret",
    "Forged campaign-unsubscribe tokens accepted",
    "Fixed",
  ],
  [
    "Per-account MCP quota",
    "New verified accounts received independent allowances",
    "Reported",
  ],
] as const

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

function ArticleSection({
  number,
  title,
  children,
}: {
  number?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-20 border-t border-border pt-5 first:mt-0">
      <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
        {number ? `${number}. ` : ""}
        {title}
      </h2>
      <div className="mt-7 space-y-6 text-[0.98rem] leading-8 text-muted-foreground [&_strong]:font-medium [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  )
}

export default function ResearchArticle() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <a
        href="#article"
        className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to article
      </a>

      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[96rem] items-center justify-between px-4 sm:px-6 lg:px-12">
          <Brand />
          <nav aria-label="Article navigation" className="flex items-center gap-3 text-sm">
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={<a href="/#research" />}
            >
              <ArrowLeftIcon aria-hidden="true" />
              Research
            </Button>
            <Button
              size="sm"
              nativeButton={false}
              render={<a href="mailto:security@gordian.be" />}
            >
              Contact
              <ArrowUpRightIcon aria-hidden="true" />
            </Button>
          </nav>
        </div>
      </header>

      <main id="article">
        <article>
          <header className="border-b border-border bg-muted/20 px-4 py-20 sm:px-6 sm:py-28 lg:px-12 lg:py-36">
            <div className="mx-auto max-w-[90rem]">
              <Frame spacing="sm">
                <FramePanel className="p-6 sm:p-10 lg:p-14">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="success-light" radius="full">
                      Gordian research · Case 001
                    </Badge>
                    <Badge variant="outline" radius="full">
                      Coordinated disclosure
                    </Badge>
                  </div>
                  <h1 className="mt-8 max-w-5xl text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                    Breaking the Paywall, <span className="text-success">Not the Product</span>
                  </h1>
                  <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                    How path normalization, public object storage, database permissions, and client-side trust exposed paid ReUI content—and how the vendor responded.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                    <time dateTime="2026-09-05">5 September 2026</time>
                    <span>Application security</span>
                  </div>
                </FramePanel>
              </Frame>
            </div>
          </header>

          <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[18rem_minmax(0,52rem)] lg:gap-20 lg:px-12 lg:py-28">
            <aside className="self-start lg:sticky lg:top-24">
              <Frame spacing="sm">
                <FramePanel>
                  <FrameHeader>
                    <FrameTitle className="font-mono text-[0.68rem] uppercase tracking-[0.12em]">
                      Research boundary
                    </FrameTitle>
                    <FrameDescription>
                      Evidence was collected within a deliberately narrow scope.
                    </FrameDescription>
                  </FrameHeader>
                  <ul className="space-y-3 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
                    {boundaries.map((boundary) => (
                      <li key={boundary} className="flex gap-2">
                        <CheckCircle2Icon className="mt-1 size-4 shrink-0 text-success" aria-hidden="true" />
                        <span>{boundary}</span>
                      </li>
                    ))}
                  </ul>
                </FramePanel>
              </Frame>
            </aside>

            <div className="max-w-3xl">
              <div className="space-y-6 text-[1.05rem] leading-8 text-muted-foreground [&_strong]:font-medium [&_strong]:text-foreground">
                <p className="text-xl leading-8 text-foreground sm:text-2xl sm:leading-9">
                  ReUI is a commercial React UI library built around shadcn/ui. In September 2026, we reviewed the boundaries protecting its paid content. The deliberately narrow question was whether an anonymous or Free user could obtain Pro or Ultimate material without a valid license.
                </p>
                <p>
                  The review uncovered several independent issues. The most significant allowed anonymous retrieval of all 533 Pro blocks and six original Ultimate template archives. Other findings exposed customer plan classifications, allowed a campaign action to be forged, weakened a promotional restriction, and made the Free MCP quota easy to multiply.
                </p>
                <p>
                  ReUI responded constructively and deployed fixes quickly. This article was prepared after coordinated disclosure and remediation. Secrets, customer identifiers, active credentials, and unnecessary exploitation details have been omitted.
                </p>
              </div>

              <ArticleSection title="Executive summary">
                <Frame spacing="sm">
                  <FramePanel className="overflow-x-auto p-0!">
                    <div className="min-w-[44rem]">
                      <div className="grid grid-cols-[1.25fr_1.4fr_5.5rem] gap-4 border-b border-border bg-muted/30 px-5 py-3 font-mono text-[0.63rem] uppercase tracking-[0.12em] text-muted-foreground">
                        <span>Finding</span>
                        <span>Impact</span>
                        <span>Status</span>
                      </div>
                      {findings.map(([finding, impact, status]) => (
                        <div key={finding} className="grid grid-cols-[1.25fr_1.4fr_5.5rem] gap-4 border-b border-border px-5 py-4 text-sm last:border-b-0">
                          <span className="font-medium text-foreground">{finding}</span>
                          <span className="text-muted-foreground">{impact}</span>
                          <Badge
                            variant={status === "Fixed" ? "success-light" : "warning-light"}
                            size="sm"
                            radius="full"
                            className="self-start"
                          >
                            {status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </FramePanel>
                </Frame>
              </ArticleSection>

              <ArticleSection number="1" title="Authorization and path normalization disagreed">
                <p>
                  ReUI distributes blocks through a shadcn-compatible registry. The canonical request for a paid block correctly required a license. A percent-encoded character in the file extension, however, caused the authorization layer and content resolver to interpret the same path differently. The result was a complete paid registry payload returned to an anonymous request.
                </p>
                <p>
                  The caching policy amplified the issue: successful responses were public, immutable CDN hits. A complete fix therefore required both canonical authorization and invalidation of affected cache entries.
                </p>
                <Frame spacing="sm">
                  <FramePanel className="flex flex-wrap items-center gap-5 bg-invert p-6 text-invert-foreground sm:p-8">
                    <strong className="text-5xl font-normal tracking-[-0.06em] text-success">533</strong>
                    <span className="max-w-lg text-sm leading-6 text-invert-foreground/70">
                      paid blocks verified through a bounded, rate-limited catalog—not open-ended discovery
                    </span>
                  </FramePanel>
                </Frame>
                <p>
                  The route was fixed, cache entries were cleared, and the encoded variant now fails. The general lesson is to normalize once, early, and make authorization and lookup operate on the same canonical representation.
                </p>
              </ArticleSection>

              <ArticleSection number="2" title="Paid archives were public objects">
                <p>
                  The normal template download API correctly enforced Ultimate access. The same source packages also existed as publicly readable objects on a separate vendor-managed storage origin. Six complete packages were accessible without a cookie, license, signature, or payment.
                </p>
                <p>
                  This was not another expression of the registry bug; it crossed a separate trust boundary. Fixing middleware on the application could not protect public objects elsewhere. ReUI removed public access, and all six object URLs now return an access-denied response.
                </p>
              </ArticleSection>

              <ArticleSection number="3" title="A database function crossed row-level security">
                <p>
                  Direct table reads were restricted, but a public PostgREST function republished a sensitive projection of the protected data. With only the anonymous client key, the function returned 490 user UUID and plan-tier pairs.
                </p>
                <p>
                  After confirming the issue, testing switched to count-only and tier-only queries. Customer identifiers were not retained. ReUI revoked anonymous execution and restricted related metadata.
                </p>
              </ArticleSection>

              <ArticleSection number="4" title="Eligibility lived in client-controlled state">
                <p>
                  A waitlist discount was accepted by the payment provider without proof that the customer qualified. An authenticated user could also modify eligibility-related profile fields on their own account. We previewed the transaction only: no checkout was completed and no payment method was entered.
                </p>
                <p>
                  Promotion eligibility should be decided by a trusted server immediately before checkout creation, using a single-use or customer-bound offer. Browser-visible flags can control presentation, but they cannot prove authorization.
                </p>
              </ArticleSection>

              <ArticleSection number="5" title="A development fallback was trusted in production">
                <p>
                  A public release branch contained an unsubscribe-token verifier that accepted a hardcoded development HMAC fallback. Anyone who knew an email address could therefore construct a token accepted by production.
                </p>
                <p>
                  The test was limited to a controlled address, and the resulting subscription change was immediately reversed. Production now rejects fallback-signed tokens. Dedicated, versioned application signing keys should fail closed when production configuration is absent.
                </p>
              </ArticleSection>

              <ArticleSection number="6" title="A nominally per-user quota was per account">
                <p>
                  ReUI&apos;s Free MCP allowance correctly applied across multiple tokens for one user and resisted spoofed identity headers. A second verified account from the same environment nevertheless received an independent allowance.
                </p>
                <p>
                  This did not unlock paid tools, but it weakened abuse and cost controls. Useful mitigations include signup velocity limits, risk-based challenges, reputation signals, and quota decisions that extend beyond a single account identifier.
                </p>
              </ArticleSection>

              <ArticleSection title="Method: prove impact without maximizing it">
                <p>
                  The most useful techniques were differential requests, explicit trust-boundary mapping, and bounded automation. We changed one request property at a time and compared status codes, bodies, cache headers, and effective URLs. Client code served as a map of public API contracts—not as proof that every exposed implementation detail was a vulnerability.
                </p>
                <p>
                  Automation was resumable, rate-limited, content-addressed, and constrained to catalogs already published by the target. Responses were hashed and summarized. Credentials were redacted, temporary access artifacts were revoked, and sensitive customer records were excluded from the distributable report.
                </p>
                <Alert variant="success">
                  <CheckCircle2Icon aria-hidden="true" />
                  <AlertTitle>Bounded evidence</AlertTitle>
                  <AlertDescription>
                    For most findings, a differential request, a count, a checksum, or one controlled record was enough to prove the issue.
                  </AlertDescription>
                </Alert>
              </ArticleSection>

              <ArticleSection title="Disclosure timeline">
                <Frame spacing="sm">
                  <FramePanel>
                    <Timeline defaultValue={3}>
                      <TimelineItem step={1}>
                        <TimelineHeader>
                          <TimelineDate>3–4 Sep</TimelineDate>
                          <TimelineTitle>Assessment</TimelineTitle>
                        </TimelineHeader>
                        <TimelineIndicator />
                        <TimelineSeparator />
                        <TimelineContent>
                          Controlled verification across application, registry, storage, database, payment, and MCP boundaries.
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem step={2}>
                        <TimelineHeader>
                          <TimelineDate>4 Sep</TimelineDate>
                          <TimelineTitle>Private disclosure</TimelineTitle>
                        </TimelineHeader>
                        <TimelineIndicator />
                        <TimelineSeparator />
                        <TimelineContent>
                          ReUI acknowledged the report and began deploying fixes.
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem step={3}>
                        <TimelineHeader>
                          <TimelineDate>5 Sep</TimelineDate>
                          <TimelineTitle>Independent retest</TimelineTitle>
                        </TimelineHeader>
                        <TimelineIndicator />
                        <TimelineSeparator />
                        <TimelineContent>
                          Major registry, storage, database, token, and discount remediations confirmed.
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
                  </FramePanel>
                </Frame>
              </ArticleSection>

              <ArticleSection title="What the review demonstrated">
                <p>
                  None of these findings required an exotic exploit. The failures appeared between layers: raw and decoded paths, application and CDN, storefront and storage, table policy and database function, client state and payment authorization, development compatibility and production trust.
                </p>
                <p>
                  That is where modern assessments often provide the most value. Controls can work in isolation and still fail when two systems disagree about identity, entitlement, or the name of a resource.
                </p>
              </ArticleSection>

              <Frame className="mt-20" spacing="sm">
                <FramePanel className="bg-muted/30 p-6 sm:p-8">
                  <FrameHeader className="p-0">
                    <FrameTitle className="text-xl font-medium tracking-tight">
                      Have an explicitly authorized system that needs careful adversarial review?
                    </FrameTitle>
                    <FrameDescription className="mt-2">
                      Contact Gordian for responsible security research and assessment enquiries.
                    </FrameDescription>
                  </FrameHeader>
                  <FrameFooter className="flex-row items-center justify-between gap-4 p-0 pt-6">
                    <Badge variant="outline" radius="full">Research case 001</Badge>
                    <Button nativeButton={false} render={<a href="mailto:security@gordian.be" />}>
                      Contact Gordian
                      <ExternalLinkIcon aria-hidden="true" />
                    </Button>
                  </FrameFooter>
                </FramePanel>
              </Frame>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t border-border px-4 py-10 sm:px-6 lg:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <Brand />
          <span>Research case 001 · © {new Date().getFullYear()} Gordian</span>
        </div>
      </footer>
    </div>
  )
}
