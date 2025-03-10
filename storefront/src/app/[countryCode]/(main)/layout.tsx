import { Metadata } from "next"

import { getBaseURL } from "@lib/util/env"
import LayoutIde from "components/layout/layout"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
    <LayoutIde>

      {props.children}
    </LayoutIde>
    </>
  )
}
