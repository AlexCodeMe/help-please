import { useAction, useMutation } from 'convex/react'
import { api } from '../../../../convex/_generated/api'
import { useCreateQuizStore } from '../store/createQuizStore'
import { useState } from 'react'

export const useCreateQuiz = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createQuiz = useMutation(api.quizzes.createQuiz)
  const createQuestions = useMutation(api.questions.createQuestions)
  const generate = useAction(api.ai.generate)
  const addQuestionsToQuiz = useMutation(api.questions.addQuestionsToQuiz)

  const store = useCreateQuizStore()

  const handleGenerate = async () => {
    setLoading(true)
    setError(null)
    try {
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to generate questions'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = async () => {
    setLoading(true)
    setError(null)
    try {
      // creation logic
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create quiz')
    } finally {
      setLoading(false)
    }
  }

  return {
    ...store,
    loading,
    error,
    generateQuestions: handleGenerate,
    createQuiz: handleCreate,
  }
}
