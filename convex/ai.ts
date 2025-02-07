// todo: real time short_answer grades

import OpenAI from 'openai'
import { v } from 'convex/values'
import { action } from './_generated/server'

export const generate = action({
  args: {
    description: v.string(),
    topic: v.string(),
    type: v.union(
      v.literal('multiple_choice'),
      v.literal('true_false'),
      v.literal('fill_in_the_blank'),
      v.literal('short_answer')
    ),
    numberOfQuestions: v.number(),
  },
  handler: async (ctx, args) => {
    console.log('Sending request to OpenAI:', { args })
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      throw new Error('openapi api key not configured')
    }

    const openai = new OpenAI({
      apiKey: apiKey,
    })

    try {
      const completion = await openai.beta.chat.completions.parse({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `
                You are a helpful assistant that generates quiz questions based on the topic {topic}
                    and description ${args.description}. The quiz should be composed of ${args.numberOfQuestions}
                    questions with the type ${args.type} questions on the topic ${args.topic}.
                    Please include the following for each question:
                    1. the Question
                    2. the Answer
                    3. the Explanation
                    4. if the question type is MULTIPLE_CHOICE, include the Options.
                    if the question type is FILL_IN_THE_BLANK, include the blank to fill in.
                    For SHORT_ANSWER, provide a generic sample answer.
                    Multiple choice questions should have between 3 to 8 options.

                    Example Output:
                    {
                        "questions": [
                            {
                                "question": "Which bird migrates the longest distance?",
                                "options": ["A) Arctic Tern", "B) Swallow", "C) Osprey", "D) Albatross"],
                                "answer": "A) Arctic Tern",
                                "explanation": "The Arctic Tern migrates the longest distance, traveling from pole to pole."
                            },
                            ...
                        ]
                    }
                   `,
          },
          {
            role: 'user',
            content: `Generate ${args.numberOfQuestions} questions of type ${args.type} based on the topic "${args.topic}".`,
          },
        ],
      })

      return completion.choices[0].message.parsed
    } catch (error) {
      console.error('openai api error', error)
      throw new Error('failed to generate questions')
    }
  },
})
