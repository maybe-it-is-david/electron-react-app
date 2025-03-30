import { useState } from 'react'
import { Button } from '@/app/components/ui/button'
import { Textarea } from '@/app/components/ui/textarea'
import { ScrollArea } from '@/app/components/ui/scroll-area'
import { Copy, Download, ThumbsUp, ThumbsDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

// import { ipcRenderer } from 'electron'

// async function callBackend(data: any): Promise<void> {
//   try {
//     // reason: using invoke provides a promise-based interface which is easier to work with
//     const response = await ipcRenderer.invoke('dzb-test', data)
//     console.log('backend response:', response)
//     return response
//   } catch (error) {
//     console.error('error calling backend:', error)
//   }
// }

interface Message {
  role: 'agent' | 'user'
  content: string
  timestamp: string
}

export default function ChatInterface() {
  const [input, setInput] = useState('')
  const [messages] = useState<Message[]>([
    {
      role: 'agent',
      content: 'Hello, I am a generative AI agent. How may I assist you today?',
      timestamp: '4:08:28 PM',
    },
    {
      role: 'user',
      content: "Hi, I'd like to check my bill.",
      timestamp: '4:08:37 PM',
    },
    {
      role: 'agent',
      content:
        "Please hold for a second.\n\nOk, I can help you with that\n\nI'm pulling up your current bill information\n\nYour current bill is $150, and it is due on August 31, 2024.\n\nIf you need more details, feel free to ask!",
      timestamp: '4:08:37 PM',
    },
  ])

  return (
    <div className="flex-1 flex flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={cn('flex gap-2 max-w-[80%]', message.role === 'user' && 'ml-auto')}>
              {message.role === 'agent' && <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0" />}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{message.role === 'agent' ? 'GenerativeAgent' : 'G5'}</span>
                  <span className="text-sm text-muted-foreground">{message.timestamp}</span>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
                {message.role === 'agent' && (
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Textarea
            placeholder="Type a message as a customer"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="min-h-[44px] max-h-32"
          />
          <Button
            className="px-8"
            onClick={async e => {
              toast.success('calling backend', {
                position: 'bottom-left',
              })
              // const res = await callBackend({ key: 'value' })
              // toast.success(`backend response: ${JSON.stringify(res, null, 2)}` + res, {
              //   position: 'bottom-left',
              // })
            }}>
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
