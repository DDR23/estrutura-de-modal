import '../styles/globals.scss'
export const metadata = {
  title: 'Estrutura simples de modal',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
