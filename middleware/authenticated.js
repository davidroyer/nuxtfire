export default function({ store, route, redirect }) {
  const user = store.state.users.user;
  const blockedRoute = /\/admin\/*/g;
  const homeRoute = "/";

  if (!user && route.path.match(blockedRoute)) {
    return redirect("/");
  }

  if (user && route.path === homeRoute) {
    return redirect("/admin");
  }
}
