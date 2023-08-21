import { Accessor, createSignal } from "solid-js"

export type Pokemon = {
    name: string
    attacks: string[],
    setName: (name: string) => Pokemon,
    removeAttack: (index: number) => Pokemon
}

const pokemon: Pokemon = {
    name: 'Pikocho',
    attacks: [
        'thunder-shock',
        'thunder'
    ],
    setName: (name: string): Pokemon => {
        return setPokemon({ ...getPokemon()!, name: name })
    },
    removeAttack: (index: number): Pokemon => {
        const attacks = getPokemon().attacks
        attacks.splice(index, 1)
        return setPokemon({ ...getPokemon(), attacks: attacks })
    }
}

const [ getPokemon, setPokemon ] = createSignal<Pokemon>(pokemon)

export function createPokemon(): Accessor<Pokemon> {
    setPokemon(pokemon)
    return getPokemon
}