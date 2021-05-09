import React from 'react'
import {useState} from 'react'
import { useSpring, animated, config } from 'react-spring'

const AnimatedH = ({text}) => {
    const [flip, set] = useState(false)
    const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  return <animated.h1 className="text-3xl font-gilda xl:text-5xl m-3" style={props}>{text}</animated.h1>
}

export default AnimatedH

