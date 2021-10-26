import { Provider } from "react-redux";
import { Navbar } from "./components/Navbar";
import { UserList } from "./components/UserList";
import { store } from "./store/store";



function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <UserList />
    </Provider>
  );
}

export default App;
