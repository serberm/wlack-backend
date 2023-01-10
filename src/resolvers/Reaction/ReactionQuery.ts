import { queryField, stringArg, list } from 'nexus'

export const reactions = queryField('reactions', {
  type: list('Reaction'),
  args: {
    messageId: stringArg()
  },
  resolve: async (parrent, { messageId }, ctx) => {
    return ctx.prisma.reaction.findMany({
      where: { message: { id: messageId! } }
    })
  }
})
