// Style Sheets
import 'bootstrap/dist/css/bootstrap.css'

import '@/app/style/global.css';
import '@/app/style/layout.css';

// Sass
import './style/layout.scss'
import './style/global.scss'

// Fonts
// import { Roboto } from 'next/font/google'
// const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })
 
export const metadata = {
  title: 'Weather App',
  description: 'Simple weather app developed for experience.'
}

export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang='en'>
        <body>{children}</body>
    </html>
  );
}