// import { Rubik, Rajdhani } from 'next/font/google'
import Script from "next/script"
import "../styles/index.scss"


// const body = Rubik({
//   weight: ['300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
//   variable: '--body-font',
// });

// const heading = Rajdhani({
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ['latin'],
//   variable: '--heading-font',
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <Script id="gtm-script" strategy="afterInteractive" dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MSHNKBQH');`}}/>
        <meta name="facebook-domain-verification" content="sofmw23mr36z94i6ffw62rlw3xc3x8" />
        <meta name="description" content="Raciocine - Soluçoes Inteligentes" />
        <link rel="icon" href="/favicon.webp" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rajdhani:400,500,600,700|Poppins:400,500,600,700|Rubik:400,500,600,700|family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap" />
      </head>
      <body suppressHydrationWarning={true} className="sc5">
        <Script strategy="afterInteractive" id="gtm-script" dangerouslySetInnerHTML={{__html:`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MSHNKBQH"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}/>
        {/* <body suppressHydrationWarning={true} className={`sc5 ${body.variable} ${heading.variable}`}> */}
        {children}
      </body>
    </html>
  )
}
