import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start' // ⚠️ FIX: Meta and Scripts come from @tanstack/start

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      
      // 1. Main Title & Description
      { title: "Jithin's Wedding Invitation" },
      { name: 'description', content: 'You are cordially invited to celebrate our special day with us!' },

      // 2. Open Graph (OG) Tags for WhatsApp & Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: "Jithin's Wedding Invitation" },
      { property: 'og:description', content: 'You are cordially invited to celebrate our special day with us!' },
      { property: 'og:image', content: 'https://jithin-wedding-invitation.vercel.app/preview.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:url', content: 'https://jithin-wedding-invitation.vercel.app/' },

      // 3. Twitter Card Tags (Forces the full layout banner above text)
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "Jithin's Wedding Invitation" },
      { name: 'twitter:description', content: 'You are cordially invited to celebrate our special day with us!' },
      { name: 'twitter:image', content: 'https://jithin-wedding-invitation.vercel.app/preview.png' },
    ],
  }),
  component: RootComponent, 
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        {/* Generates all meta tags seamlessly from the array above */}
        <Meta />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
