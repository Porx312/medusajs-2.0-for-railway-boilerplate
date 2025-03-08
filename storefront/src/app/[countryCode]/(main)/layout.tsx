import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { getBaseURL } from "@lib/util/env"
import LayoutIde from "components/layout/layout"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
    <LayoutIde>

      <Nav />
      {props.children}
      <Footer />
    </LayoutIde>
    </>
  )
}
