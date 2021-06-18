---
title: "LGBTQ+ Policy Map"
tags: ["d3","next.js","politics","react"]
linkTitles: ["app link","github repo"]
actualLinks: ["https://n2656.sse.codesandbox.io/","https://github.com/SamanthaLLee/LGBTQ-policy-map"]
description: "A visualization of state-level legistative activity that affects the LGBTQ+ community."
season: "Spring"
year: "2021"
start: 
end: "2021-05"
--- 

### Inspiration & Overview

LGBTQ+ rights remain heavily contested across America, and the LGBTQ+ Policy Map is a React web app that provides a visual breakdown of relevant legislative activity by state. By clicking on a state, users can view the details of all bills in that state that affect the LGBTQ+ community, grouped by party support. To build the app and fetch the data, I used Next.js, Python, and the [LegiScan API](https://legiscan.com/legiscan).

This project was made possible by [Out in Tech](https://outintech.com/) and its wonderful [mentorship program](https://outintech.com/mentorship/). A huge thank you to my amazing mentor, [Josh Wang](https://www.linkedin.com/in/josh-jiayi-wang/), and the OIT U team!


### Methodology

I fetched all the data from [LegiScan](https://legiscan.com/legiscan) via Python. After developing a list of keywords (including "queer," "same-sex," "transgender," etc.), I looped through each state and used the Search API to query bills that contained those words and had relevance scores of at least 85%. The Bill API provided further details for each bill, such as its description, its status, sponsors and their parties, and voting breakdowns. All bills were stored into a JSON file, which can updated with a simple run of the Python script, and the React app filters through the data to route pages and display visuals. More specifically, the app groups the bills by state, then examines sponsorship to group bills on the state level by party support.



### Todos

The methodology above is imperfect. Here are some future edits and implementations!

*   Parties were meant to serve as proxies for the negative or positive impacts of the bills, but Democrat support is not always pro-queer, and Republican support is not always anti-queer. I want to revise this logic.
*   More keywords should be added to include asexual people, intersex people, non-binary people, and people of other identities.
*   [Open States](https://docs.openstates.org/en/latest/api/v3/) has an API similar to LegiScan's, and I'd like to see if it can provide additional insights.
*   The map is colored based on general legislative activity, but I'd like to add a scoring system to evaluate how much a state protects or harms LGBTQ+ people.


### Similar Resources

If you're interested in queer legislation, here are some related sites I drew inspiration from!

*   [ACLU - Legislation Affecting LGBT Rights Across the Country](https://www.aclu.org/legislation-affecting-lgbt-rights-across-country)
*   [Movement Advancement Project - Equality Maps](https://www.lgbtmap.org/equality-maps)
*   [Freedom for All Americans - Legislative Tracker](https://freedomforallamericans.org/legislative-tracker/)
*   [The Trevor Project - Progress Map](https://www.thetrevorproject.org/get-involved/trevor-advocacy/50-bills-50-states/progress-map/)