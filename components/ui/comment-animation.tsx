'use client'

import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'

export type Comment = {
  user: string
  text: string
}

const DEFAULT_COMMENTS: Comment[] = [
  { user: 'Sarah M.', text: 'The hydrafacial results are amazing! 😍' },
  { user: 'Ahmed K.', text: 'Best dental clinic in Dubai. Very professional.' },
  { user: 'Jessica R.', text: 'Laser hair removal was painless. Highly recommend!' },
  { user: 'Fatima A.', text: 'Dr. Shazia is so gentle and kind. ❤️' },
  { user: 'Mike D.', text: 'Finally confident in my smile again.' },
]

export function CommentAnimation({ comments = DEFAULT_COMMENTS }: { comments?: Comment[] }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [blink, setBlink] = useState(true)

  // Blink cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearTimeout(timeout2)
  }, [blink])

  // Typing effect
  useEffect(() => {
    if (subIndex === comments[index].text.length + 1 && !reverse) {
      setReverse(true)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % comments.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, Math.max(reverse ? 75 : subIndex === comments[index].text.length ? 3000 : 150, parseInt((Math.random() * 350).toString())))

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, comments])

  return (
    <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 w-max max-w-[90%] -translate-x-1/2 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-5 py-3 shadow-xl backdrop-blur-md">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-pink-500 text-xs font-bold text-white">
          {comments[index].user.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-semibold text-white/60">{comments[index].user}</span>
          <p className="text-sm font-medium text-white">
            {`${comments[index].text.substring(0, subIndex)}${blink ? '|' : ' '}`}
          </p>
        </div>
        <Heart className="ml-2 h-4 w-4 fill-brand-orange text-brand-orange animate-pulse" />
      </div>
    </div>
  )
}
