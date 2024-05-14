// Modules
import Image from 'next/image'

// Style Sheets
import 'bootstrap/dist/css/bootstrap.css';

import '@/app/style/global.css';
import '@/app/style/layout.css';

// Code
import '@/app/js/layout';

// SVGs
import SVGWeatherSunny from './icons/Sunny.svg';

// Fonts
// import { Roboto } from 'next/font/google'
// const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
    return (
      <html lang='en'>
          <head>

          </head>
          <body>
            
            {/* <script src='@/app/js/layout.ts'></script> */}

            <div className="container-fluid title-box">

                <div className="row">
                    <div className="col left">
                        <h2 className="text-white">Good Afternoon!</h2>
                        <h3 className="text-white">Loading Quote...</h3>
                    </div>

                    <div className="col right"> 
                        <SVGWeatherSunny 
                            width={75}
                            height={75}

                            alt="Clear Sunny"
                        />
                        <h3 className="text-white">00f</h3>
                    </div>
                </div>

            </div>

            {/* <div className="container-fluid title-box">
                <div className="row title-box-welcome">
                    <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <h2 className="text-8xl text-white">Good Afternoon!</h2>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        < SVGWeatherSunny
                            width={75}
                            height={75}

                            alt="Clear Sun"

                            className="title-box-icon"
                        />
                    </div>
                </div>
                <div className="row title-box-temp">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h3 className="text-5xl text-gray-300">Loading Quote...</h3>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 title-box-temp-temp">
                        <h4 className="text-6xl text-gray-300">00°F</h4>
                    </div>
                </div>
            </div> */}
  
          </body>
      </html>
    );
}