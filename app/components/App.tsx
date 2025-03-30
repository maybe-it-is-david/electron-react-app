// import WelcomeKit from '@/lib/welcome/WelcomeKit'
import '../styles/app.css'
import { Button } from './ui/button'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import ChatInterface from './chat-interface'
import Layout from './layout'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <Layout>
      <ChatInterface />
    </Layout>
  )
  // return <WelcomeKit />
  // return (
  //   <div>
  //     <div>Count: {count}</div>
  //     <Button onClick={() => setCount((x) => x + 1)}>Increment</Button>
  //     <ThemeToggle />
  //   </div>
  // )
}
