import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={`wrapper ${theme}`}>
      
    </div>
  );
}

export default App;
