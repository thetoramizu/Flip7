import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-flip7',
  imports: [],
  templateUrl: './flip7.component.html',
  styleUrl: './flip7.component.scss',
})
export class Flip7Component implements OnInit {

  deckOfCards: Flip7Card[] = []
  lastCard?: Flip7Card
  listPlayers: Joueur[] = [{nom: 'Thomas', cartes: [], stop: false}, {nom: 'Sébastien', cartes: [], stop: false}, {nom: 'Raphaël', cartes: [], stop: false}]
  activePlayer: Joueur = this.listPlayers[0]


ngOnInit(): void {
  this.lastCard = undefined
  this.deckOfCards = this.createInitialDeck();
  console.log('after init', this.deckOfCards)
  this.listPlayers = [{nom: 'Thomas', cartes: [], stop: false}, {nom: 'Sébastien', cartes: [], stop: false}, {nom: 'Raphaël', cartes: [], stop: false}]
  this.activePlayer = this.listPlayers[0]



}




  createInitialDeck() {
    let fullDeck: Flip7Card[] = []

    fullDeck.push({couleur: 'rgba(100,100,100, 0.5)', numero: 0})
    fullDeck.push({couleur: 'rgba(166,206,227, 0.5)', numero: 1})
    fullDeck.push({couleur: 'rgba(31,120,180, 0.5)', numero: 2})
    fullDeck.push({couleur: 'rgba(31,120,180, 0.5)', numero: 2})
    fullDeck.push({couleur: 'rgba(178,223,138, 0.5)', numero: 3})
    fullDeck.push({couleur: 'rgba(178,223,138, 0.5)', numero: 3})
    fullDeck.push({couleur: 'rgba(178,223,138, 0.5)', numero: 3})
    fullDeck.push({couleur: 'rgba(51,160,44, 0.5)', numero: 4})
    fullDeck.push({couleur: 'rgba(51,160,44, 0.5)', numero: 4})
    fullDeck.push({couleur: 'rgba(51,160,44, 0.5)', numero: 4})
    fullDeck.push({couleur: 'rgba(51,160,44, 0.5)', numero: 4})
    fullDeck.push({couleur: 'rgba(251,154,153, 0.5)', numero: 5})
    fullDeck.push({couleur: 'rgba(251,154,153, 0.5)', numero: 5})
    fullDeck.push({couleur: 'rgba(251,154,153, 0.5)', numero: 5})
    fullDeck.push({couleur: 'rgba(251,154,153, 0.5)', numero: 5})
    fullDeck.push({couleur: 'rgba(251,154,153, 0.5)', numero: 5})
    fullDeck.push({couleur: 'rgba(227,26,28, 0.5)', numero: 6})
    fullDeck.push({couleur: 'rgba(227,26,28, 0.5)', numero: 6})
    fullDeck.push({couleur: 'rgba(227,26,28, 0.5)', numero: 6})
    fullDeck.push({couleur: 'rgba(227,26,28, 0.5)', numero: 6})
    fullDeck.push({couleur: 'rgba(227,26,28, 0.5)', numero: 6})
    fullDeck.push({couleur: 'rgba(227,26,28, 0.5)', numero: 6})
    fullDeck.push({couleur: 'rgba(253,191,111, 0.5)', numero: 7})
    fullDeck.push({couleur: 'rgba(253,191,111, 0.5)', numero: 7})
    fullDeck.push({couleur: 'rgba(253,191,111, 0.5)', numero: 7})
    fullDeck.push({couleur: 'rgba(253,191,111, 0.5)', numero: 7})
    fullDeck.push({couleur: 'rgba(253,191,111, 0.5)', numero: 7})
    fullDeck.push({couleur: 'rgba(253,191,111, 0.5)', numero: 7})
    fullDeck.push({couleur: 'rgba(253,191,111, 0.5)', numero: 7})
    fullDeck.push({couleur: 'rgba(255,127,0, 0.5)', numero: 8})
    fullDeck.push({couleur: 'rgba(255,127,0, 0.5)', numero: 8})
    fullDeck.push({couleur: 'rgba(255,127,0, 0.5)', numero: 8})
    fullDeck.push({couleur: 'rgba(255,127,0, 0.5)', numero: 8})
    fullDeck.push({couleur: 'rgba(255,127,0, 0.5)', numero: 8})
    fullDeck.push({couleur: 'rgba(255,127,0, 0.5)', numero: 8})
    fullDeck.push({couleur: 'rgba(255,127,0, 0.5)', numero: 8})
    fullDeck.push({couleur: 'rgba(255,127,0, 0.5)', numero: 8})
    fullDeck.push({couleur: 'rgba(202,178,214, 0.5)', numero: 9})
    fullDeck.push({couleur: 'rgba(202,178,214, 0.5)', numero: 9})
    fullDeck.push({couleur: 'rgba(202,178,214, 0.5)', numero: 9})
    fullDeck.push({couleur: 'rgba(202,178,214, 0.5)', numero: 9})
    fullDeck.push({couleur: 'rgba(202,178,214, 0.5)', numero: 9})
    fullDeck.push({couleur: 'rgba(202,178,214, 0.5)', numero: 9})
    fullDeck.push({couleur: 'rgba(202,178,214, 0.5)', numero: 9})
    fullDeck.push({couleur: 'rgba(202,178,214, 0.5)', numero: 9})
    fullDeck.push({couleur: 'rgba(202,178,214, 0.5)', numero: 9})
    fullDeck.push({couleur: 'rgba(106,61,154, 0.5)', numero: 10})
    fullDeck.push({couleur: 'rgba(106,61,154, 0.5)', numero: 10})
    fullDeck.push({couleur: 'rgba(106,61,154, 0.5)', numero: 10})
    fullDeck.push({couleur: 'rgba(106,61,154, 0.5)', numero: 10})
    fullDeck.push({couleur: 'rgba(106,61,154, 0.5)', numero: 10})
    fullDeck.push({couleur: 'rgba(106,61,154, 0.5)', numero: 10})
    fullDeck.push({couleur: 'rgba(106,61,154, 0.5)', numero: 10})
    fullDeck.push({couleur: 'rgba(106,61,154, 0.5)', numero: 10})
    fullDeck.push({couleur: 'rgba(106,61,154, 0.5)', numero: 10})
    fullDeck.push({couleur: 'rgba(106,61,154, 0.5)', numero: 10})
    fullDeck.push({couleur: 'rgba(255,255,153, 0.5)', numero: 11})
    fullDeck.push({couleur: 'rgba(255,255,153, 0.5)', numero: 11})
    fullDeck.push({couleur: 'rgba(255,255,153, 0.5)', numero: 11})
    fullDeck.push({couleur: 'rgba(255,255,153, 0.5)', numero: 11})
    fullDeck.push({couleur: 'rgba(255,255,153, 0.5)', numero: 11})
    fullDeck.push({couleur: 'rgba(255,255,153, 0.5)', numero: 11})
    fullDeck.push({couleur: 'rgba(255,255,153, 0.5)', numero: 11})
    fullDeck.push({couleur: 'rgba(255,255,153, 0.5)', numero: 11})
    fullDeck.push({couleur: 'rgba(255,255,153, 0.5)', numero: 11})
    fullDeck.push({couleur: 'rgba(255,255,153, 0.5)', numero: 11})
    fullDeck.push({couleur: 'rgba(255,255,153, 0.5)', numero: 11})
    fullDeck.push({couleur: 'rgba(177,89,40, 0.5)', numero: 12})
    fullDeck.push({couleur: 'rgba(177,89,40, 0.5)', numero: 12})
    fullDeck.push({couleur: 'rgba(177,89,40, 0.5)', numero: 12})
    fullDeck.push({couleur: 'rgba(177,89,40, 0.5)', numero: 12})
    fullDeck.push({couleur: 'rgba(177,89,40, 0.5)', numero: 12})
    fullDeck.push({couleur: 'rgba(177,89,40, 0.5)', numero: 12})
    fullDeck.push({couleur: 'rgba(177,89,40, 0.5)', numero: 12})
    fullDeck.push({couleur: 'rgba(177,89,40, 0.5)', numero: 12})
    fullDeck.push({couleur: 'rgba(177,89,40, 0.5)', numero: 12})
    fullDeck.push({couleur: 'rgba(177,89,40, 0.5)', numero: 12})
    fullDeck.push({couleur: 'rgba(177,89,40, 0.5)', numero: 12})
    fullDeck.push({couleur: 'rgba(177,89,40, 0.5)', numero: 12})

    fullDeck = this.shuffle(fullDeck)

    return fullDeck;
  }

  shuffle(cards: Flip7Card[]): Flip7Card[] {
     let shuffledArray = [...cards];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  console.log(shuffledArray)
  return shuffledArray;
  }

  drawCard() {

    this.lastCard = this.deckOfCards[0]
    this.deckOfCards.shift()

    this.activePlayer.cartes.push(this.lastCard)
    this.joueurSuivant()

  }

  joueurSuivant(){
    const index = this.listPlayers.indexOf(this.activePlayer)
    console.log(('index'), index)

      this.activePlayer = index < this.listPlayers.length -1 ? this.listPlayers[(index + 1)] : this.listPlayers[0]
    console.log(this.activePlayer)

  }

  score(joueur: Joueur): number {
    let score = 0
    for(let card of joueur.cartes) {
      score += card.numero
    }

    if (this.perdu(joueur.cartes)) {
      score = 0;
      joueur.stop = true
    }

    return score

  }


  perdu(cartes: Flip7Card[]){
    const numeros = new Set<number>();

  for (const truc of cartes) {
    if (numeros.has(truc.numero)) {
      return true; // Un numéro en double a été trouvé
    }
    numeros.add(truc.numero);
  }

  return false; // Aucun doublon trouvé
  }


}


export interface Flip7Card {
  numero: number
  couleur: string
  proprietaire?: Joueur
}

// export type Joueur = 'Sébastien' | 'Thomas' | 'Raphaël' | 'Invité'

export interface Joueur {
  nom : string
  couleur?: string
  cartes: Flip7Card[]
  stop: boolean
}
