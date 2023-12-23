import './globals.css'


export const metadata = {
  title: 'Portfolio Website',
  description: 'Created by Nick',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
