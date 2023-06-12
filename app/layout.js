
export const metadata = {
  title: 'Your Todolist',
  description: 'Help keep your thooughts and days organised by noting them all down inn this app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
