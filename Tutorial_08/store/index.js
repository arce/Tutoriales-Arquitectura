import STATUS_TYPES from './config/statusTypes'
import { parsesJSON } from './utils'

const state = () => ({
  books: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: []
  },
  book: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: {}
  },
  prevNext: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: {}
  },
  readMore: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: []
  }
});
/* All states mutations */
const mutations = {
  GET_BOOKS(state, payload) {
    state.books.data = payload
    state.books.status = STATUS_TYPES.SUCCESS
  },
  GET_BOOK(state, payload) {
    state.book.data = payload
    state.book.status = STATUS_TYPES.SUCCESS
  },
  GET_READ_MORE(state, payload) {
     state.readMore.data = payload
     state.readMore.status = STATUS_TYPES.SUCCESS
  },
  GET_PREV_NEXT(state, payload) {
     state.prevNext.data = payload
     state.prevNext.status = STATUS_TYPES.SUCCESS
  }
};
/* All states getters */
const getters = {
  getBooks: (state) => parsesJSON(state.books),
  getBook: (state) => parsesJSON(state.book),
  getPrevNext: (state) => parsesJSON(state.prevNext),
  getReadMore: (state) => parsesJSON(state.readMore)
};
/* All states actions */
const actions = {
  async getBooks({ commit }, params, callback) {
    const storeBooks = await this.$content('bestsellers')
      .limit(12)
      .fetch()
    commit('GET_BOOKS', storeBooks)
  },
  async getBook({ commit }, params, callback) {
    const storeBook = await this.$content('bestsellers', params.slug).fetch()
    commit('GET_BOOK', storeBook)
  },
  async getPrevNext({ commit }, params, callback) {
    const [prev, next] = await this.$content('bestsellers')
      .surround(params.slug)
      .fetch()
    commit('GET_PREV_NEXT', { prev, next })
  },
  async getReadMore({ commit }, params, callback) {	
     const storeReadMore = await this.$content('bestsellers')
       .where({
         slug: { $ne: params.slug },
       })
       .limit(3)
       .fetch()
     commit('GET_READ_MORE', storeReadMore)
  }
};
/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions
}