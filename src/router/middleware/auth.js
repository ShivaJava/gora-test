export default function auth({ next, store }) {
  if (!store.getters.GET_LOG_STATUS) {
    return next({
      name: 'Login'
    })
  }
  return next()
}

