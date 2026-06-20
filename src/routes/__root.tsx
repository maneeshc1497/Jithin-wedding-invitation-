import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      
      // 1. Fixed Title & Description Format
      { name: 'title', content: "Jithin & Sanha's Wedding Invitation" },
      { name: 'description', content: 'You are cordially invited to celebrate our special day with us!' },

      // 2. Open Graph (OG) Tags for WhatsApp & Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: "Jithin & Sanha's Wedding Invitation" },
      { property: 'og:description', content: 'You are cordially invited to celebrate our special day with us!' },
      { property: 'og:image', content: 'https://jithin-wedding-invitation.vercel.app/preview.jpg' }, // Ensure this points to the compressed .png in your public folder!
      
      // ⚠️ ADDED THESE 3 LINES: This forces WhatsApp to give the image a full-width top block
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:url', content: 'https://jithin-wedding-invitation.vercel.app/' },

      // 3. Twitter Card Tags (Tells the UI to span the full width)
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "Jithin & Sanha's Wedding Invitation" },
      { name: 'twitter:description', content: 'You are cordially invited to celebrate our special day with us!' },
      { name: 'twitter:image', content: 'https://jithin-wedding-invitation.vercel.app/preview.jpg' },
    ],
  }),
  component: RootComponent, 
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
