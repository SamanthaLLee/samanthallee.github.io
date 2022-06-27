---
title: "RU Scheduled?"
tags: ["flask","hackathon","javascript","python","rutgers"]
linkTitles: ["app link","github repo","devpost"]
actualLinks: ["https://github.com/SamanthaLLee/ru-scheduled","https://devpost.com/software/ru-scheduled"]
description: "A Flask app where SAS students can plan their core classes and compare professors."
season: "Spring"
year: "2022"
start: 
end: "2022-4"
--- 

### Background
The SAS Core Curriculum is a set of requirements all Rutgers SAS students must fulfill through a variety of courses across departments. As SAS students ourselves, we're familiar with the struggle of piecing together a cohesive schedule that satisfies as many cores as possible while balancing professor preferences and trying not to overload on credits. That's where RU Scheduled? comes into play.

### The Project 
RU Scheduled? allows users to select the core requirements they have yet to fulfill. The web app will generate a list of class combinations that satisfy the cores specified based on Course Schedule Planner. Then, a user can select a combination and view course details and professor ratings from Rate My Professor.

We used Python to pull all currently offered courses and their details using the [Rutgers Course API](https://davidparsons.io/Rutgers-Course-API/). Each class that did not fulfill a core was filtered out of the list, and the remaining courses were serialized to avoid having to call the API each time the site is rendered. Using instructor details from the API, we additionally pulled Rate My Professor ratings from with the [RMP API](https://pypi.org/project/RateMyProfessorAPI/). With all the data stored, we created a frontend using Bootstrap and Flask to display the best combination of courses at the user's request. 

I personally worked on fetching and parsing data using the CSP API, creating the frontend, and manipulating data within the Flask framework.

### Reflection
We were grateful to have been awarded the "Best Rutgers Hack" prize at <a href="https://hackru-s22.devpost.com/">HackRU Spring 2022</a>.