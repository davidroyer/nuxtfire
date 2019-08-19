export default function({ store, redirect }) {
    console.log('ADMIN GUARD RAN');
    
    if (!store.state.users.user) {
      return redirect('/login')
    }
  }
  