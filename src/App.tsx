import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import { MainProvider } from "./hooks/useMain";
import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";

export function App() {
  return (
    <MainProvider>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <Content />
      </div>
    </MainProvider>
  );
}
