# Rapport d’optimisation du projet ScrollyTelling

Page Speed Insights - [Rapport du 12 mai 2024, 16:08:44](https://pagespeed.web.dev/analysis/https-khaly-tia-tim-momo-com/fswoiot86w?form_factor=desktop)

## Problème #1
### Properly size images
Selon le site Page Speed Insights, mes images que j'utilise dans mon projet sont trop grandes et prennent beaucoup de place,, plus que j'ai besoin.  
### Action concrète pour résoudre le problème
Re-formatter les images dans la liste pour qu'elles prennent moins de place en utilisant une action Photoshop. 
### Résultat
J'ai tout compressé mes images qui prenaient plus que 1920px de largeur afin de rendre les fichiers moins lourds. J'ai dû tout faire à la main puisque mon action en batch dans Photoshop ne marchait pas. 


## Problème #2
### Largest Contentful Paint element
Sur mon site "Simulacrum", mon texte de titre (l'élément le plus gros) dans le header prend beaucoup de temps à charger en TTBF et en render time, dont 1.6 secondes.
### Action concrète pour résoudre le problème
Rendre le titre moins chargé en enlevant les effets que j'ai ajouté pour rendre le rendu plus rapide. 
### Résultat
J'ai gardé le mix blend mode et un des box-shadows, mais j'ai enlevé un des deuxième box shadow dessus. Il n'y avait pas grand effets sur mon titre, alors j'ai un peu de la misère à comprendre pourquoi ça prend autant de temps le rendu.

## Problème #3
### Serve static assets with an efficient cache policy 
Mes images ne sont pas en cache, ce qui peut rendre le chargement de la page moins longue en revenant sur le site en répétition.  
### Action concrète pour résoudre le problème
Appliquer un cache-control
### Résultat
Placé une balise meta avec le cache pour une année comme dans l'exemple dans le HTTP head

## Rapport projet ScrollyTelling après optimisation

Page Speed Insights - [Rapport du 6 mai 2024, 17:50:00](https://pagespeed.web.dev/analysis/https-khaly-tia-tim-momo-com/uuonqrdkj6?form_factor=desktop)
