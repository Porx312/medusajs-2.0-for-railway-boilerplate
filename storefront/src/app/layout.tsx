import { getBaseURL } from "@lib/util/env"
import LayoutIde from "components/layout/layout"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <LayoutIde>

     {props.children}
        </LayoutIde>
      </body>
    </html>
  )
}
