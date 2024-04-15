import "./App.scss";
import InputPlus from "./components/InputPlus";
import InputTask from "./components/InputTask";

export default function App() {
  return (
    <article className="article">
      <h1 className="articleTitle">To Do App</h1>
      <section className="articleSection">
        <InputPlus />
      </section>
      {<InputTask />}
    </article>
  );
}
