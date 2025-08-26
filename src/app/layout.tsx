export const metadata = {
  title: 'Mobile Mercado',
  description: 'Mobile Mercado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
