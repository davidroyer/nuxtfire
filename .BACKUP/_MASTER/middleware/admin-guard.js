export default function({ store, redirect, route }) {
  console.log("ADMIN GUARD RAN");
  const blockedRoute = /\/admin\/*/g;

  if (!store.state.users.user && route.path.match(blockedRoute)) {
    return redirect("/login");
  }
}
