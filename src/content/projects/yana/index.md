---
title: "You Are Not Alone"
tags: ["chrome extension", "javascript", "mental health"]
linkTitles: ["github repo"]
actualLinks: ["https://github.com/SamanthaLLee/YANA"]
description: "A Chrome extension that detects symptoms of poor mental health and directs its users to resources."
season: "Spring"
year: "2020"
start:
end: "2020-02"
index: 1
---

Mental health is a topic often left undiscussed – despite the millions of people who combat mental illnesses on a day-to-day basis, there exists a stigma against them. As a result, many feel too ashamed to address their issues, opting instead to keep them hidden.

You Are Not Alone (YANA) is a Chrome Extension written in JavaScript that directs people who need resources in the right direction. By scanning text typed in real time, it and searches for words and phrases indicative of mental health crises. When one is detected, a notification appears on the screen that directs the user to available resources.

There are some phrases that explicitly suggest symptoms of mental health issues, but many are more subtle. "[I] feel worthless," "nothing matters," "[I have] no energy," and other expressions are ones worth addressing, even if they do not necessarily warrant immediate action. YANA accounts for such nuances. Moreover, YANA offers users the option to search a specific block of text for such words and phrases in the case they wish to scan a message from, say, a friend. If triggered, the extension will automatically paste a customizable message (which defaults to a hotline).

YANA relies on a content script that uses listeners to detect user actions as well as a background script that controls responses to the detections. The extension additionally employs the Chrome APIs storage, tabs, activeTab, contextMenus, and notifications.