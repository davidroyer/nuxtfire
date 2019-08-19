export default function({ store, redirect }) {
    console.log('LOGIN ROUTE GUARD RAN');
    console.log('store.state.users.user: ', store.state.users.user);

    
    if (process.client && store.state.users.user) {
      return redirect('/admin')
    }
  }
  