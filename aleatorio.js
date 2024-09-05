const nomes = ["Alexandros","Sokrátēs","Diogenēs","Plátōn","Aristotélēs","Periklēs","Hippokratēs"]

export function aleatorio(lista){
        const posicao = Math.floor(Math.random()* lista.length);
        return lista[posicao];


}
export const nome = aleatorio(nomes)