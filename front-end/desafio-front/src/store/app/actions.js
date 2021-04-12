/**
 * @param context
 * @param user
 */
export const actionUser = (context, user) => {
  context.commit('mutateUser', user)
}
