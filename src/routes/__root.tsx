import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Jithin & Safna — Wedding Reception · 16 August 2026',
      },
      {
        name: 'description',
        content: 'You are cordially invited to the wedding reception of Jithin Abdulsalam & Safna Latheef on Sunday, 16 August 2026 at Everest Convention Centre, Karikkad, Thrissur. INSHA ALLAH',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
