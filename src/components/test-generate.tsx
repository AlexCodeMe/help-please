// 'use client'

// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import z from 'zod'

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from './ui/form'
// import { Button } from './ui/button'
// import { Input } from './ui/input'
// import { Textarea } from './ui/textarea'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from './ui/select'
// import { Slider } from './ui/slider'
// import { Loader2 } from 'lucide-react'
// import { useState } from 'react'
// import { useAction } from 'convex/react'
// import { api } from '../../convex/_generated/api'
// import { toast } from 'sonner'

// export const aiGenerationSchema = z.object({
//   description: z.string().min(1, 'Description is required'),
//   topic: z.string().min(1, 'Topic is required'),
//   questionType: z.enum([
//     'multiple_choice',
//     'true_false',
//     'short_answer',
//     'fill_in_the_blank',
//   ]),
//   numberOfQuestions: z.number().min(1).max(64),
// })

// export type AiGenerationValues = z.infer<typeof aiGenerationSchema>

// function TestGenerate() {
//   const generate = useAction(api.ai.generate)

//   const [isGenerating, setIsGenerating] = useState<boolean>(false)
//   const [questions, setQuestions] = useState()

//   const aiForm = useForm<AiGenerationValues>({
//     resolver: zodResolver(aiGenerationSchema),
//     defaultValues: {
//       description: '',
//       topic: '',
//       questionType: 'multiple_choice',
//       numberOfQuestions: 5,
//     },
//   })

//   const onAiSubmit = async (values: AiGenerationValues) => {
//     console.log('ai generate form submitted', values)
//     setIsGenerating(true)
//     try {
//       const questions = await generate({
//         description: values.description,
//         topic: values.topic,
//         type: values.questionType,
//         numberOfQuestions: values.numberOfQuestions,
//       })

//       toast.success('generated questions!')
//     } catch (error) {
//       console.error('error generating questions', error)
//       toast.error('error generating questions')
//     } finally {
//       setIsGenerating(false)
//     }
//   }

//   return (
//     <div className='bg-slate-100 flex flex-col p-16'>
//       <h1 className='text-4xl text-indigo-400'>Hello, World!</h1>
//       <p className='text-sky-600'>Please Enter Details to Test Generating</p>
//       <Form {...aiForm}>
//         <form
//           onSubmit={aiForm.handleSubmit(onAiSubmit)}
//           className='space-y-4'
//           onError={(errors) => {
//             console.log('Form errors:', errors)
//           }}
//         >
//           <FormField
//             control={aiForm.control}
//             name='topic'
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Topic</FormLabel>
//                 <FormControl>
//                   <Input
//                     {...field}
//                     placeholder='e.g., Birding, History, Science'
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={aiForm.control}
//             name='description'
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Description</FormLabel>
//                 <FormControl>
//                   <Textarea {...field} placeholder='Quiz description' />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <div className='flex items-center justify-between space-x-4 mx-auto'>
//             <FormField
//               control={aiForm.control}
//               name='questionType'
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Question Type</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder='Select question type' />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent className='bg-white'>
//                       <SelectItem value='multiple_choice'>
//                         Multiple Choice
//                       </SelectItem>
//                       <SelectItem value='true_false'>True/False</SelectItem>
//                       <SelectItem value='short_answer'>Short Answer</SelectItem>
//                       <SelectItem value='fill_in_the_blank'>
//                         Fill in the Blank
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={aiForm.control}
//               name='numberOfQuestions'
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Number of Questions</FormLabel>
//                   <FormControl>
//                     <Slider
//                       defaultValue={[5]}
//                       value={[field.value]}
//                       max={64}
//                       min={1}
//                       step={1}
//                       onValueChange={([value]) => field.onChange(value)}
//                     />
//                   </FormControl>
//                   <div className='flex justify-between'>
//                     <span className='text-sm text-muted-foreground'>1</span>
//                     <span className='text-sm font-medium'>
//                       {field.value > 1 ? `${field.value}` : '1'}
//                     </span>
//                     <span className='text-sm text-muted-foreground'>64</span>
//                   </div>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <Button
//             type='submit'
//             className='w-full'
//             disabled={isGenerating}
//             onClick={() =>
//               console.log('Button clicked', aiForm.formState.errors)
//             }
//           >
//             {isGenerating ? (
//               <>
//                 <Loader2 className='mr-2 h-4 w-4 animate-spin' />
//                 Generating...
//               </>
//             ) : (
//               'Generate Questions'
//             )}
//           </Button>
//         </form>
//       </Form>
//     </div>
//   )
// }

// export default TestGenerate
