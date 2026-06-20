import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

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
      { property: 'og:url', content: 'https://jithin-wedding-invitation.vercel.app/' },

      // 3. Optional Twitter Card Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "Jithin's Wedding Invitation" },
      { name: 'twitter:description', content: 'You are cordially invited to celebrate our special day with us!' },
      { name: 'twitter:image', content: 'https://jithin-wedding-invitation.vercel.app/preview.png' },
    ],
  }),
  // ⚠️ ADD THIS COMPONENT LINK: Tell the router to render the HTML structure
  component: RootComponent, 
})

// ⚠️ ADD THIS FUNCTION: This physically renders the tags into the document
function RootComponent() {
  return (
    <html lang="en">
      <head>
        {/* This specific tag converts your meta array up top into real HTML elements */}
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
