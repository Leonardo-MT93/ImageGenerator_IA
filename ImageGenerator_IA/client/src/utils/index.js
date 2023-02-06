import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    //Evitar que se repita 2 o 3 veces

    if(randomPrompt === prompt) return getRandomPrompt(prompt);
    return randomPrompt;
}