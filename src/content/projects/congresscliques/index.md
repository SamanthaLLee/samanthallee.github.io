---
title: "Congress Cliques"
tags: ["data viz", "politics", "react"]
linkTitles: ["app link", "github repo"]
actualLinks:
  [
    "https://whimsical-speculoos-8e7417.netlify.app/",
    "https://github.com/SamanthaLLee/congress-cliques",
  ]
description: "A 3D force-directed graph of U.S. congress members on Facebook."
season: "Spring"
year: "2022"
start:
end: "2022-05"
---

### Background

This self-directed project served as my final project for CS523 - Computer Graphics.

Many American politicans take to social media to boost their platform, connect with their voters, and maintain rapport with other leaders. Online activity can be quite reflective of party lines and divisions – what meaning can we derive through patterns of interaction between politicians on Facebook?

### The Project

The <a href="https://networkrepository.com/">Network Repository</a> contains a <a href="https://networkrepository.com/fb-pages-politician.php">dataset</a> of mutually liked Facebook pages between global politicians. Using the <a href="https://github.com/vasturiano/react-force-graph">React Force Graph package</a>, as well as additional information from the <a href="https://projects.propublica.org/api-docs/congress-api/members/">Propublica Congress API</a>, I created this 3D force-directed graph to visualize the like patterns between American politicians on Facebook.

The graph shows a clear divide between Democrat and Republican relations, as the majority of nodes are grouped with those of their own party. Politicians tend to mutually follow those of like-minded views, which can increase polarization and the development of echo chambers on social media. On the other hand, the visualization allows us to examine the outliers who cross partisan boundaries and follow members of the opposing party.
