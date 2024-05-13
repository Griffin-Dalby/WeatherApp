// Style Sheets
import 'bootstrap/dist/css/bootstrap.css';

import '@/app/style/global.css';
import '@/app/style/layout.css';

// Fonts
// import { Roboto } from 'next/font/google'
// const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
    return (
      <html lang='en'>
          <head>

          </head>
          <body>
  
              <div className="container-fluid title-box">
                <h2 className="text-9xl text-white">Good Afternoon!</h2>
                
                <div className="flex title-temp-city">
                    <span className="text-6xl text-gray-300">It is currently 0°F at 0:00AM</span>
                    <div className="title-temp-line">
                        <div className="d-flex">
                            <div className="vr"></div>
                        </div>
                    </div>
                    <span className="text-3xl text-gray-300 city-location">Loading... (City Location)</span>
                </div>
              </div>
  
          </body>
      </html>
    );
}