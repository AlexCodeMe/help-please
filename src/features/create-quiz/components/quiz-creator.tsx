'use client'

import { Input } from '@/components/ui/input'
import { useCreateQuiz } from '../hooks/useCreateQuiz'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import MetadataForm from './metedata-form'
import QuestionsList from './questions-list'
import CreateQuestionForm from './create-question-form'

function QuizCreator() {
  const {
    loading,
    quizState,
    updateQuizState,
    addQuestionToQuiz,
    removeQuestionFromQuiz,
    createQuiz,
  } = useCreateQuiz()

  return (
    <div className=''>
      <div className='grid grid-cols-2 gap-8 bg-yellow-200'>
        <div className='space-y-6 px-6 bg-rose-700'>
          {/** Quiz Metadata Form */}
          <MetadataForm />
          {/** Selectable Questions List */}
          <QuestionsList />
          {/** Save Quiz btn */}
          <Button onClick={createQuiz} disabled={loading} className='w-full'>
            Save Quiz
          </Button>
        </div>
        <div className='space-y-6 px-6 bg-blue-600'>
          <CreateQuestionForm />
        </div>
      </div>
    </div>
  )
}

export default QuizCreator
