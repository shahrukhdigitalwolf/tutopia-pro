import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'Business Analytics Course',
    description: 'Business Analytics Course',
  }


export default function businessAnalyticsLayout({
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