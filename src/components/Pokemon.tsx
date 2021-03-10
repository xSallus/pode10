export const TypeColors = [
    {"name":"bug", "color":"#A8B820"},

    {"name":"dark", "color":"#705848"},

    {"name":"dragon", "color":"#7038F8"},

    {"name":"electric", "color":"#F8D030"},

    {"name":"fairy", "color":"#EE99AC"},

    {"name":"fire", "color":"#F08030"},

    {"name":"fighting", "color":"#C03028"},

    {"name":"flying", "color":"#A890F0"},

    {"name":"ghost", "color":"#705898"},

    {"name":"grass", "color":"#78C850"},

    {"name":"ground", "color":"#E0C068"},

    {"name":"ice", "color":"#98D8D8"},

    {"name":"normal", "color":"#A8A878"},

    {"name":"poison", "color":"#A040A0"},

    {"name":"psychic", "color":"#F85888"},

    {"name":"rock", "color":"#B8A038"},

    {"name":"steel", "color":"#B8B8D0"},

    {"name":"water", "color":"#6890F0"}
]

export const getPokemons = async () => {
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100'
    
    const response = await fetch(pokeUrl)
    const data = await response.json()
    const result = data.results

    return result
}

export const getPokemonData = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getPokemon = async () => {
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1118'
    
    const response = await fetch(pokeUrl)
    const data = await response.json()
    const result = data.results

    return result
}
