import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/Global/Topbar";
import Dashboard from "./scenes/Dashboard/index"
import MySidebar from "./scenes/Global/MySidebar"
import { useState } from "react";
// import Team from "./scenes/Global/team"
// import Invoices from "./scenes/Global/invoices"
// import Contacts from "./scenes/Global/contacts"
// import Bar from "./scenes/Global/bar"
// import Form from "./scenes/Global/form"
// import Line from "./scenes/Global/line"
// import Pie from "./scenes/Global/pie"
// import FAQ from "./scenes/Global/faq"
// import Geography from "./scenes/Global/geography"
// import Calendar from "./scenes/Global/calendar"

function App() {

  const [theme, colorMode] = useMode();
  const [isMySidebar, setIsMySidebar] = useState(true);


  return ( 
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <div className="App">
        <MySidebar isMySidebar={isMySidebar}/>
        <main className="content">
          <Topbar setIsMySidebar={setIsMySidebar}/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
           {/*  <Route path="/team" element={<Team/>}/> */}
           {/*  <Route path="/contacts" element={<Contacts/>}/> */}
            {/* <Route path="/invoices" element={<Invoices/>}/> */}
            {/* <Route path="/form" element={<Form/>}/> */}
            {/* <Route path="/bar" element={<Bar/>}/> */}
            {/* <Route path="/pie" element={<Pie/>}/> */}
            {/* <Route path="/line" element={<Line/>}/> */}
           {/*  <Route path="/faq" element={<FAQ/>}/> */}
            {/* <Route path="/geography" element={<Geography/>}/> */}
            {/* <Route path="/calendar" element={<Calendar/>}/> */}
          </Routes>
        </main>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
