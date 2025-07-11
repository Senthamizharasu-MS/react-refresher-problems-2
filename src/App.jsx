import React from "react";
import Counter from "./component/Counter";
import TextInputMirror from "./component/TextInputMirror";
import ThemeToggler from "./component/ThemeToggler";
import FilterableList from "./component/FilterableList";
import Loginform from "./component/Loginform";
import TodoList from "./component/TodoList";
import CharacterCounter from "./component/CharacterCounter";
import ImageGallery from "./component/ImageGallery";
import Accordion from "./component/Accordion";
import ParentComponent from "./component/ParentComponent";
import BoxResizer from "./component/BoxResizer";
import ColorPicker from "./component/ColorPicker";
import ProgressBar from "./component/ProgressBar";
import AccordionAdvance from "./component/AccordionAdvance";

const App = () => {
  return (
    <>
      <Counter />
      <TextInputMirror />
      <ThemeToggler />
      <FilterableList />
      <Loginform />
      <CharacterCounter />
      <TodoList />
      <ImageGallery />
      <Accordion />
      <ParentComponent />
      <BoxResizer />
      <ColorPicker />
      <ProgressBar />
      <AccordionAdvance />
    </>
  );
};

export default App;
