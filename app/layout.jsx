// app/layout.jsx
import '../styles/globals.css'

export const metadata = {
  title: "Eddy Wu | Portfolio",
  description: "Personal portfolio of Eddy Wu",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
