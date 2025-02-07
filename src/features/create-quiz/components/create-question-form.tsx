import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

function CreateQuestionForm() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const handleSubmit = () => {}

  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold'>Create Question</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <Input
          placeholder='Question'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Textarea
          placeholder='Answer'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Button type='submit'>Add Question</Button>
      </form>
    </div>
  )
}

export default CreateQuestionForm
