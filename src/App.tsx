import { useState } from 'react';
import { EXERCISES } from './data/exercises';
import { ExerciseShell } from './shared/exercise-shell/ExerciseShell';

/**
 * SPA con pestañas: siete pestañas, un ejercicio por cada una,
 * renderizadas desde src/data/exercises.ts.
 */
export default function App() {
  const [active, setActive] = useState(0);
  const exercise = EXERCISES[active];
  const { Component } = exercise;

  return (
    <div className="app">
      <header className="app-header">
        <h1>React desde cero — Ejercicios propuestos</h1>
      </header>

      <nav className="tabs" aria-label="Ejercicios">
        {EXERCISES.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            className={`tab${index === active ? ' tab-active' : ''}`}
            aria-current={index === active}
            onClick={() => setActive(index)}
          >
            {index === active ? `EJ ${tab.number} · ${tab.title}` : `EJ ${tab.number}`}
          </button>
        ))}
      </nav>

      <main className="app-main">
        <ExerciseShell exercise={exercise}>
          <Component />
        </ExerciseShell>
      </main>
    </div>
  );
}
