/* @refresh reload */
import { render } from "solid-js/web";
import { Accessor, For, createSignal } from "solid-js";
import { Pokemon, createPokemon } from "./services/pokemon.service";
import { MultipleListsExample } from "./MultipleListsExample";
import { Dnd } from "./Dnd";

const App = () => {
  const getPokemon: Accessor<Pokemon> = createPokemon();

  const onPokemonNameChange = (e: Event) => {
    getPokemon().setName((e.target as HTMLInputElement).value);
  };

  const onClickDeleteAttack = (index: number) => {
    getPokemon().removeAttack(index);
  };

  return (
    <>
      <ul>
        <For each={getPokemon().attacks}>
          {(attack: string, i: Accessor<number>) => {
            return (
              <li>
                <span>{attack}</span>
                <button onClick={onClickDeleteAttack.bind(null, i())}>X</button>
              </li>
            );
          }}
        </For>
      </ul>
      <input type="text" onInput={onPokemonNameChange} />
      <p>{getPokemon().name}</p>
      <MultipleListsExample />
      <div class="dnd">
        <Dnd />
      </div>
    </>
  );
};

render(App, document.getElementById("root")!);

// import { render } from 'solid-js/web';

// import './index.css';
// import App from './App';

// const root = document.getElementById('root');

// if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
//   throw new Error(
//     'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
//   );
// }

// render(() => <App />, root!);
