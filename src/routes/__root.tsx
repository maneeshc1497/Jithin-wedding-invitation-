import { Outlet, createRootRoute, Meta, Title, Scripts } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <Title>Jithin & Sanha's Wedding Invitation</Title>
        <meta name="description" content="You are cordially invited to celebrate our special day with us!" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jithin & Sanha's Wedding Invitation" />
        <meta property="og:description" content="You are cordially invited to celebrate our special day with us!" />
        <meta property="og:image" content="https://jithin-wedding-invitation.vercel.app/preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://jithin-wedding-invitation.vercel.app/" />

        {/* ⚠️ CRUCIAL CHANGE HERE: Make sure this says summary_large_image */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jithin & Sanha's Wedding Invitation" />
        <meta name="twitter:description" content="You are cordially invited to celebrate our special day with us!" />
        <meta name="twitter:image" content="https://jithin-wedding-invitation.vercel.app/preview.png" />

        <Meta />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
