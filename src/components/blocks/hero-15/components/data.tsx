import { type ReactNode } from "react"
import ShieldSearchIcon from "@/reui/icons/animated/outline/shield-search"
import ScanBarcodeIcon from "@/reui/icons/animated/outline/scan-barcode"
import MessageProgrammingIcon from "@/reui/icons/animated/outline/message-programming"

export interface HeroFeature {
  title: string
  description: string
  href: string
  icon: ReactNode
}

export const HERO_FEATURES: HeroFeature[] = [
  {
    title: "Vulnerability research",
    description:
      "Systematic analysis that identifies, reproduces, and responsibly documents weaknesses.",
    href: "#work",
    icon: <ShieldSearchIcon className="size-4" />,
  },
  {
    title: "Exploit validation",
    description:
      "Controlled proofs of concept that separate theoretical findings from exploitable risk.",
    href: "#work",
    icon: <ScanBarcodeIcon className="size-4" />,
  },
  {
    title: "Adversarial testing",
    description:
      "Scoped penetration tests that turn realistic attack paths into defensive improvements.",
    href: "#work",
    icon: <MessageProgrammingIcon className="size-4" />,
  },
]
