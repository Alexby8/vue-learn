export const strict = process.env.NODE_ENV !== 'production'

export const state = () => ({
  projectTitle: 'Project title'
})

export const mutations = {
  changeTitle(state, payload) {
    state.projectTitle = payload
  }
}
