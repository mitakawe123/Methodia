import {Route,Routes} from "react-router-dom";
import Articles from "./Articles"
import PageNotFound from "./PageNotFound";
import Home from "./Home";

function App() {
  return (
		<Routes>
			<Route path='*' element={<PageNotFound/>}/>
			<Route exact path='/' element={<Home/>}/>
			<Route exact path='/articles' element={<Articles />}/>
		</Routes>
  );
}

export default App;
