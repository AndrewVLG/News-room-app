import { FunctionComponent } from "react";
import { store } from "./app-redux";
import { RouterProvider } from "react-router";
import { router } from "./app-routing";
import { Provider } from "react-redux";


const App:FunctionComponent = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}
export default App;