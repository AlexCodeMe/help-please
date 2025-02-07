import GenerationModal from '@/features/create-quiz/components/generation-modal'
import QuizCreator from '@/features/create-quiz/components/quiz-creator'
import SelectionModal from '@/features/create-quiz/components/selection-modal'

function CreatePage() {
  return (
    <>
      <div className='px-12 py-6'>
        <h1 className='text-4xl font-bold mb-6'>Create New Quiz</h1>
        <QuizCreator />
      </div>
      <GenerationModal />
      <SelectionModal />
    </>
  )
}

export default CreatePage
