let habilities: string[] = ['Bash', 'Counter', 'Healing']

interface Personaje {
    nombre: string;
    hp: number;
    habilities: string[];
    country?: string
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 95,
    habilities: ['Bash', 'Counter', 'Healing']
}

personaje.country = 'Pueblo Paleta'

console.table(personaje);
