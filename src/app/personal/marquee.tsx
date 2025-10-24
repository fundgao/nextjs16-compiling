import { Marquee } from '@/components/ui/marquee'
import {
  MarqueeIcon1,
  MarqueeIcon2,
  MarqueeIcon4,
  MarqueeIcon5,
  MarqueeIcon6,
  MarqueeIcon7,
  MarqueeIcon8,
  MarqueeIcon9,
} from '@/assets/complex-svg'

const icons = [
  {
    icon: <MarqueeIcon1 />,
    link: '/',
  },
  {
    icon: <MarqueeIcon2 />,
    link: '/',
  },
  {
    icon: <MarqueeIcon4 />,
    link: '/',
  },
  {
    icon: <MarqueeIcon5 />,
    link: '/',
  },
  {
    icon: <MarqueeIcon6 />,
    link: '/',
  },
  {
    icon: <MarqueeIcon7 />,
    link: '/',
  },
  {
    icon: <MarqueeIcon8 />,
    link: '/',
  },
  {
    icon: <MarqueeIcon9 />,
    link: '/',
  },
]

export function MarqueeIcons() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-14">
      <Marquee
        reverse
        // pauseOnHover
        className="[--duration:20s] [--gap:4rem] text-custom-black"
      >
        {icons.map((item, index) => (
          <div key={index}>{item.icon}</div>
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      {/* <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div> */}
    </div>
  )
}
