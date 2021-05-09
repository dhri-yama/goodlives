import { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import ExpertiseCard from './ExpertiseCard'

const Expertise = () => {
  const exp=[
    {'head':'Stress Related','content':'Stress Management, Anxiety Management, Depression, Insomnia, PTSD, Trauma, Postpartum Depression, Loneliness & Identity Crisis'},
    {'head':'Self Improvement','content':'Anger Issues, Personal Growth, Discipline Issues, Confidence boosting, Inferiority Complex, Focus Retention & Work-Related Issues'},
    {'head':'Relationship','content':'Pre-Wedding Jitters, Couple counseling, Family Issues, Break-ups, Marriage Counseling, Building a Meaningful Relationship & Cheating in Relationship'},
    {'head':'Queer Counseling','content':'Queer Counseling, LGBTQIA+ Counseling, Sexual Orientation Issues, Discrimination & Acceptance Issues & Gender Identity Crisis'}
  ]
  const pages = [
    ({ style }) => <animated.div style={{ ...style, background: '#1f5470' }}><ExpertiseCard heading={exp[0].head} content={exp[0].content}/></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: '#2d2c63' }}><ExpertiseCard heading={exp[1].head} content={exp[1].content}/></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: '#432669' }}><ExpertiseCard heading={exp[2].head} content={exp[2].content}/></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: '#5c236c' }}><ExpertiseCard heading={exp[3].head} content={exp[3].content}/></animated.div>,
  ]
  const [index, setIndex] = useState(0)
  const onClick = useCallback(() => setIndex(state => (state + 1) % 4), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page className=" flex justify-center" key={key} style={props} />
      })}
    </div>
  
  )
}

export default Expertise
