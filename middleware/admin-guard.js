export default function({ store, redirect, route }) {
  const blockedRoute = /\/admin\/*/g

  if (!store.state.users.user && route.path.match(blockedRoute)) {
    return redirect('/login')
  }
}
