export class Skin {
    id: String;
    nom: String;
    nomFitxer: String;
    preu: Number;
    comprada: Boolean;
}

export const skins: Skin[] = [
    {id: '1', nom: 'Inicial', nomFitxer: 'inicial.png', preu: 100, comprada: false},
    {id: '2', nom: 'Bañador', nomFitxer: 'banador.png', preu: 100, comprada: true},
    {id: '3', nom: 'Cendrassos', nomFitxer: 'cendrassos.png', preu: 100, comprada: false},
    {id: '4', nom: 'Despullat', nomFitxer: 'despullat.png', preu: 100, comprada: true},
    {id: '5', nom: 'Dinahosting', nomFitxer: 'dinahosting.png', preu: 100, comprada: true},
    {id: '6', nom: 'Profe', nomFitxer: 'profe.png', preu: 100, comprada: false},
    {id: '7', nom: 'Traje', nomFitxer: 'traje.png', preu: 100, comprada: true},
    {id: '8', nom: 'Webs al punt', nomFitxer: 'websalpunt.png', preu: 100, comprada: false}
]