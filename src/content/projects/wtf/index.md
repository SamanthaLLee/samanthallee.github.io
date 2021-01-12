---
title: "Where's the File?"
tags: ["c", "systems programming"]
linkTitles: ["github repo"]
actualLinks: ["https://github.com/matthew-notaro/Systems-Programming"]
description: "A version control system in C."
season: "Spring"
year: "2020"
start:
end: "2020-04"
index: 2
---

Where's the File? (WTF) is a fully functional client-server version control system written in C. Through sockets, file I/O, and multithreading, it allows up to ten clients to interact with, push projects to, get projects from, and otherwise modify a repository in a remote server. While a local version of the repository exists on the client-side, the server maintains the version most recently pushed while keeping track of the project's history.

WTF supports the following commands: configure, checkout, update, upgrade, commit, push, create, destroy, add, remove, currentVersion, history, and rollback.
