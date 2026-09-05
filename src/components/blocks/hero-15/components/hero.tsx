import { useEffect, useState } from "react"
import { Badge } from "@/components/reui/badge"
import { IconTile } from "@/components/reui/icon-tile"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { HERO_FEATURES } from "./data"
import { ArrowRightIcon, MailIcon } from "lucide-react"
import ArrowUpRightIcon from "@/reui/icons/animated/outline/arrow-up-right"

/* How long a cell holds before the highlight moves on; 0 stops the walk. Short,
   because the walk only moves a highlight: no panel swaps under it. */
const CELL_DWELL_MS = 2200

export function Hero() {
  const [activeTitle, setActiveTitle] = useState(HERO_FEATURES[0].title)
  /* Held while a reader is on the grid, pointer or keyboard, so the highlight
     never moves out from under them mid-sentence. */
  const [held, setHeld] = useState(false)

  useEffect(() => {
    if (held || CELL_DWELL_MS <= 0) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const timer = setTimeout(() => {
      setActiveTitle((current) => {
        const index = HERO_FEATURES.findIndex(
          (feature) => feature.title === current
        )
        return HERO_FEATURES[(index + 1) % HERO_FEATURES.length].title
      })
    }, CELL_DWELL_MS)

    return () => clearTimeout(timer)
  }, [activeTitle, held])

  return (
    <section
      aria-labelledby="hero-15-title"
      className="bg-background flex min-h-[calc(100svh-4rem)] w-full items-center px-4 py-8 sm:px-6 lg:px-12"
    >
      {/* `rounded-xl` is the shadcn Card radius; the clip goes with it because
          the feature cells paint their own background into the bottom corners. */}
      <div className="border-border mx-auto w-full max-w-[90rem] overflow-hidden rounded-xl border">
        {/* Content sits low in a tall frame, the drawing-guide margin that gives
            the hero its blueprint feel. */}
        <div className="relative flex min-h-[30rem] flex-col items-start justify-end gap-5 overflow-hidden px-6 pt-24 pb-10 sm:px-10 lg:min-h-[38rem] lg:px-14 lg:pb-14">
          <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-60" />
          <div aria-hidden="true" className="absolute -top-40 right-[-12rem] size-[34rem] rounded-full bg-success/10 blur-3xl" />
          <Badge
            variant="outline"
            radius="full"
            render={<a href="#principles" />}
            className="text-foreground hover:bg-accent relative h-7 gap-1.5 px-2 text-xs font-medium transition-colors"
          >
            <span
              aria-hidden="true"
              className="bg-success size-1.5 shrink-0 rounded-full"
            />
            Authorized research · Belgium
            <ArrowUpRightIcon className="text-muted-foreground size-3.5" />
          </Badge>

          <h1
            id="hero-15-title"
            className="text-foreground relative max-w-5xl text-5xl font-medium tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem] lg:leading-[0.94]"
          >
            Find the weakness. <span className="text-muted-foreground">Strengthen the whole.</span>
          </h1>

          <p className="text-muted-foreground relative max-w-2xl text-base leading-7 sm:text-lg">
            Focused, authorized security research that helps organizations
            understand real exposure, validate risk, and remediate with confidence.
          </p>

          <div className="relative flex flex-wrap items-center gap-2 pt-2">
            <Button nativeButton={false} render={<a href="mailto:security@gordian.be" />}>
              <MailIcon aria-hidden="true" className="size-4" />
              Discuss an engagement
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#research" />}
            >
              Explore our research
              <ArrowUpRightIcon className="size-4" />
            </Button>
          </div>
        </div>

        {/* Feature grid. A 1px gap over a border-colored sheet draws exact
            hairline rules between cells at every breakpoint. */}
        <div
          className="bg-border border-border group/grid grid grid-cols-1 gap-px border-t lg:grid-cols-3"
          onPointerEnter={() => setHeld(true)}
          onPointerLeave={() => setHeld(false)}
          onFocusCapture={() => setHeld(true)}
          onBlurCapture={() => setHeld(false)}
        >
          {HERO_FEATURES.map((feature) => {
            const isActive = feature.title === activeTitle

            return (
              <a
                key={feature.title}
                href={feature.href}
                onClick={() => setActiveTitle(feature.title)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group/feature bg-background hover:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 flex items-start gap-2.5 p-6 transition-colors outline-none focus-visible:ring-[3px]",
                  // Hover wins while the pointer is inside, so the walk never
                  // fights the cell a reader is actually pointing at.
                  isActive && "group-not-has-[a:hover]/grid:bg-muted"
                )}
              >
                {/* `outline` carries the border and the 32px/16px sizing; the
                    design fills it with `muted`. On the live cell the fill swaps
                    to the page surface, so the tile stays read against the cell. */}
                <IconTile
                  variant="outline"
                  size="sm"
                  className={cn(
                    "bg-muted dark:bg-muted transition-colors",
                    "group-hover/feature:bg-background dark:group-hover/feature:bg-background",
                    isActive &&
                      "group-not-has-[a:hover]/grid:bg-background dark:group-not-has-[a:hover]/grid:bg-background"
                  )}
                >
                  {feature.icon}
                </IconTile>
                <div className="flex flex-1 flex-col gap-1">
                  <p className="text-foreground text-sm font-medium">
                    {feature.title}
                  </p>
                  <p className="text-muted-foreground line-clamp-3 text-sm">
                    {feature.description}
                  </p>
                </div>
                <ArrowRightIcon aria-hidden="true" className={cn(
                                        "text-muted-foreground size-4 shrink-0 self-center transition-transform group-hover/feature:translate-x-0.5",
                                        isActive && "group-not-has-[a:hover]/grid:translate-x-0.5"
                                      )} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
