// import WelcomeKit from '@/lib/welcome/WelcomeKit'
import '../styles/app.css'
import { Button } from './ui/button'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'

export default function App() {
  const [count, setCount] = useState(0)
  // return <WelcomeKit />
  return (
    <div>
      <div>Count: {count}</div>
      <Button onClick={() => setCount((x) => x + 1)}>Increment</Button>
      <ThemeToggle />
    </div>
  )
}
