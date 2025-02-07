import { Card, CardContent } from '@/components/ui/card'
import { useCreateQuiz } from '../hooks/useCreateQuiz'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

function QuestionsList() {
  const { quizState, addQuestionToQuiz, removeQuestionFromQuiz } =
    useCreateQuiz()
    
  return (
    <div className='space-y-4 mt-8'>
      <h2 className='text-2xl font-bold'>Added Questions</h2>
      {quizState.questions.map((question, idx) => (
        <Card
          key={idx}
          className='cursor-pointer hover:bg-secondary'
          onClick={() => addQuestionToQuiz(question)}
        >
          <CardContent className='p-4 relative'>
            <p className='font-medium'>{question.type} questions</p>
            <p className='text-sm text-muted-foreground'>{question.question}</p>
            <Button
              variant='outline'
              size='icon'
              className='absolute top-2 right-2'
              onClick={(e) => {
                e.stopPropagation()
                removeQuestionFromQuiz(question)
              }}
            >
              <Trash2 className='h-4 w-4' />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default QuestionsList
