export default function({ store, redirect }) {
  if (store.state.users.user) {
    return redirect('/admin')
  }
}
