import "./App.css";
import "antd/dist/antd.css";
import { CreateTaskModal } from "./components";
import { UIProvider } from "./_context/UIContext";
import TaskList from "./sections/TaskList";
import TaskAction from "./sections/TaskAction";

function App() {
  return (
    <UIProvider>
      <div className="container">
        <div className="content">
          <TaskAction />
          <TaskList />
        </div>
        <CreateTaskModal />
      </div>
    </UIProvider>
  );
}

export default App;
