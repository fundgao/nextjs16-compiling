'use client'

import Link from 'next/link'
import ReactPlayer from 'react-player'
import { GooglePlay, AppleStore, AndroidAPK } from '@/assets/complex-svg'
import { MarqueeIcons } from './marquee'
import {
  DOWNLOAD_APP_GOOGLE,
  DOWNLOAD_APP_APPLE,
  DOWNLOAD_APP_APK,
} from '@/constant'

export const PersonalPage = () => {

  return (
    <div className="personal-page-green-bg relative w-full bg-custom-white py-20">
      <div className="text-wrap w-4xl max-w-full m-auto text-center z-10 relative">
        <h2 className="text-fluid-72">Reimagining Rinancial Services For You</h2>
        <p className="pt-6 text-xl font-montserrat-semibold">
          Unifying Web2 and Web3 finance in a single account
        </p>
        <div className="flex flex-wrap gap-5 justify-center mt-14">
          <Link href={DOWNLOAD_APP_GOOGLE} target="_blank">
            <GooglePlay />
          </Link>
          <Link href={DOWNLOAD_APP_APPLE} target="_blank">
            <AppleStore />
          </Link>
          <Link href={DOWNLOAD_APP_APK} target="_blank">
            <AndroidAPK />
          </Link>
        </div>
      </div>
      <MarqueeIcons />
      <div className="container">
        <ReactPlayer
          className="rounded-[2.5rem]"
          src="/videos/personal_1.webm"
          width={1340}
          height="auto"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </div>
  )
}
