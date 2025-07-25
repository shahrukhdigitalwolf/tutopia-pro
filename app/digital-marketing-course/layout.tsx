import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Business Analytics Course',
    description: 'Business Analytics Course',
  }


export default function digitalMarketingLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          {children}
        </>
    )
}