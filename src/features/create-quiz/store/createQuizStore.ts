'use client'

import { create } from 'zustand'
import { Question } from '../../../../convex/schema'

type CreateQuizStore = {
  quizState: {
    name: string
    description: string
    topic: string
    questions: Question[]
  }
  isSelectionModalOpen: boolean
  isGenerateModalOpen: boolean
  isCreateModalOpen: boolean
  updateQuizState: <K extends keyof CreateQuizStore['quizState']>(
    field: K,
    value: CreateQuizStore['quizState'][K]
  ) => void
  addQuestionToQuiz: (question: Question) => void
  removeQuestionFromQuiz: (question: Question) => void
  addGeneratedQuestions: (questions: Question[]) => void
  toggleModal: (modal: 'selection' | 'generation' | 'creation') => void
}

export const useCreateQuizStore = create<CreateQuizStore>((set, get) => ({
  quizState: {
    name: '',
    description: '',
    topic: '',
    questions: [],
  },
  isSelectionModalOpen: false,
  isGenerateModalOpen: false,
  isCreateModalOpen: false,

  updateQuizState: (field, value) => {
    set((state) => ({
      quizState: {
        ...state.quizState,
        [field]: value,
      },
    }))
  },

  addQuestionToQuiz: async (question: Question) => {
    set((state) => ({
      quizState: {
        ...state.quizState,
        questions: [...state.quizState.questions, question],
      },
    }))
  },

  removeQuestionFromQuiz: (questionToRemove: Question) => {
    set((state) => ({
      quizState: {
        ...state.quizState,
        questions: state.quizState.questions.filter(
          (question) =>
            question.question !== questionToRemove.question ||
            question.answer !== questionToRemove.answer
        ),
      },
    }))
  },

  addGeneratedQuestions: async (questions: Question[]) => {
    set((state) => ({
      quizState: {
        ...state.quizState,
        questions: [...state.quizState.questions, ...questions],
      },
    }))
  },

  toggleModal: (modal) => {
    set((state) => {
      const updates: Partial<CreateQuizStore> = {}
      switch (modal) {
        case 'selection':
          updates.isSelectionModalOpen = !state.isSelectionModalOpen
          break
        case 'generation':
          updates.isGenerateModalOpen = !state.isGenerateModalOpen
          break
        case 'creation':
          updates.isCreateModalOpen = !state.isCreateModalOpen
          break
      }

      return updates
    })
  },
}))
