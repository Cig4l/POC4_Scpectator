# POC 4 du projet ARES : Spectator

## Exécution

```bash
npx tsx main.ts
```

## Contexte

Un match ARES est représenté par un journal d'événements ordonnés, décrivant les actions qui se sont produites pendant le match : déplacement, tir, dégâts, etc.

L'objectif de ce POC est de reconstituer l'état final du match en parcourant ce journal et en appliquant successivement les événements à l'état des robots.

## Difficultés rencontrées

Étant déjà à l'aise avec la programmation orientée objet et le traitement de JSON en Python, la principale difficulté a été de m'adapter aux spécificités de TypeScript.

- **Validation des données** : choisir entre des fonctions *type guards* et une lib de validation de schéma pour vérifier la structure des événements reçus.
- **Typage** : comprendre les différences entre `type` et `interface`, et déterminer lequel utiliser selon les besoins.
- **Syntaxe et fonctionnalités de TypeScript** : me remémorer certaines particularités du langage, notamment les `Map` et les `switch/case`, et les utiliser de manière adaptée.

Ces difficultés ont été résolues grâce à la lecture de la documentation officielle et de discussions sur Stack Overflow, complétée par des arbitrages techniques lorsque plusieurs solutions étaient possibles, notamment pour le choix des type guards.