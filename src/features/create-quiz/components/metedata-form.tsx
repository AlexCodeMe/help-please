import { Input } from '@/components/ui/input'
import { useCreateQuiz } from '../hooks/useCreateQuiz'
import { Textarea } from '@/components/ui/textarea'

function MetadataForm() {
  const { quizState, updateQuizState } = useCreateQuiz()
  return (
    <div className='space-y-4'>
      <h2 className='text-2xl font-bold'>Quiz Details</h2>
      <Input
        placeholder='Quiz Name'
        value={quizState.name}
        onChange={(e) => updateQuizState('name', e.target.value)}
      />
      <Textarea
        placeholder='Quiz Description'
        value={quizState.description}
        onChange={(e) => updateQuizState('description', e.target.value)}
      />
      <Input
        placeholder='Quiz Topic'
        value={quizState.topic}
        onChange={(e) => updateQuizState('topic', e.target.value)}
      />
    </div>
  )
}

export default MetadataForm
