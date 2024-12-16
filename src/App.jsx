import { Outlet } from "react-router";
import Header from "./components/Header";
// import "./App.sass";

function App() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
}

export default App;
