export default function guest({ next, store }) {
  if (store.getters.GET_LOG_STATUS) {
    return next({
      name: 'Secure'
    })
  }
  return next()
}
