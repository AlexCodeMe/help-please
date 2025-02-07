import { v } from 'convex/values'
import { mutation } from './_generated/server'
import { Question, questionValidator } from './schema'

export const createQuestions = mutation({
  args: v.array(questionValidator),
  handler: async (ctx, args: Question[]) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error('Not authorized')
    }

    const questionIds = await Promise.all(
      args.map((question) => ctx.db.insert('questions', question))
    )

    return await Promise.all(questionIds.map((id) => ctx.db.get(id)))
  },
})

export const addQuestionsToQuiz = mutation({
  args: {
    questionIds: v.array(v.id('questions')),
    quizId: v.id('quizzes'),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error('Not authorized')
    }

    return await Promise.all(
      args.questionIds.map((questionId, idx) =>
        ctx.db.insert('quizQuestions', {
          quizId: args.quizId,
          questionId,
          order: idx,
        })
      )
    )
  },
})