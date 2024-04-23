import {InputPlus} from './components/InputPlus';
import {InputTask} from './components/InputTask';
import './App.css';

export default function App() {
  return (
    <article className="article">
      <h1 className="article-title">To Do App</h1>
      <section className="article-section">
        <InputPlus />
      </section>
      <section className="article-section">
        <InputTask />
      </section>
    </article>
  );
}
