import "./App.css";
import { useState } from "react";
import { DefaultContext } from "./Context";
import { Navbar } from "./components/Navbar";
import { Player } from "./components/Player";
import { Grammar } from "./components/Grammar"
import { Translate } from "./components/Translate";
import { WriteWord } from "./components/WriteWord";
import { Definition } from "./components/Definition";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {


  const [id, setId] = useState("5axb0wF7oKc");
  const [words, setWords] = useState(["My", "name", "is", "Bibol"]);
  const [translate, setTranslate] = useState({word: "Алма", answer: "apple"});
  const [synonym, setSynonym] = useState({word: "brave", synonym: "fearless, heroic, bold, courageous"})

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

  return (
    <div className="App">
      <DefaultContext.Provider value={{
        id,
        words,
        synonym,
        translate,
        setId,
        shuffle,
        setWords,
        setSynonym,
        setTranslate
      }}>
        <BrowserRouter>
          <Navbar/>
          <div className="margin-top justify-align-center">
            <Routes>
              <Route path="/listening" element={<Player/>}/>
              <Route path="/grammar" element={<Grammar/>}/>
              <Route path="/translate" element={<Translate/>}/>
              <Route path="/definition" element={<Definition/>}/>
              <Route path="/writeword" element={<WriteWord/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </DefaultContext.Provider>
    </div>
  );
}
