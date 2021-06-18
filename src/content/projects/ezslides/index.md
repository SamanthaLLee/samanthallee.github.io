---
title: "EZSlides"
tags: ["hackathon","python","rutgers"]
linkTitles: ["github repo","devpost"]
actualLinks: ["https://github.com/matthew-notaro/EZSlides","https://devpost.com/software/ezslides"]
description: "A program that processes pre-recorded and live lectures to extract presentation text."
season: "Spring"
year: "2021"
start: 
end: "2021-04"
--- 

### Background
Have you ever taken a class where your professor speeds through slideshows without stopping? Do your professors ever present you with walls of text, without any time to copy them down? Taking word-for-word notes can be difficult in an online environment, especially through the lenses of accessibility. If only there were a way to automatically copy what's already there, without the hassle of filtering which information is relevant or rushing to finish typing.

### The Project 
EZSlides is a program that processes either pre-recorded or live lectures and extracts the text from the video or screen for you to include in your notes! Simply crop the video to just include the text or select a region of your screen to record. You can even save the output to a text file or copy each slide directly to your clipboard to seamlessly paste into your favorite editor. As a result, online learning is made more accessible, efficient, and convenient to all.

To build EZSlides, we used Python 3 alongside the OpenCV, Pillow, ImageHash, PyAutoGUI, Python-tesseract, and Pyperclip libraries. To breakdown pre-recorded video lectures, we first prompt the user to select a specific region within the video to analyze. We then extracted a frame every other Nth second (2 for the demo) to reduce computation time, cropped the frame to the desired size, hashed the frame using ImageHash, and compared the frame's hash to every other preceding frame's hash to ensure the same frame would not be outputted twice. We then wrote the remaining slides to the disk in order to perform an optical character recognition algorithm on each to convert the raw image to ASCII text which the user could then either output to a file or copy to clipboard. To follow along live lectures, we prompt the user to select a region of her screen to analyze. We then take screenshots every other Nth second (5 for the demo) and perform similar steps as described above. However, since EZSlides regretfully cannot process future slides, the clipboard output is limited to only the current slide. If the text file output is selected, each new slide will be appended to the file in real time.

### Reflection
One of the biggest challenges on the video/live processing end was how difficult OpenCV and ImageHash were being in detecting duplicate images. A small string of bugs took at least 4 hours to sort out. On the crop detection/OCR end, many difficulties arose with the intuitive cropping interface. We eventually decided to put the implementation on hold, instead opting for a simpler but less intuitive manual input grid display.

As mentioned earlier, more intuitive controls especially when cropping should be on their way maybe sometime in the future. Not only would the interface be made more appealing and be easier to follow, but it would also have positive implications on the accessibility of the program. We also talked about implementing a multithreaded approach to checking if a slide already exists which could greatly decrease processing time for long lectures but neither of us have worked with multithreading in Python before and we both agreed today was not the day to learn it. Finally, and probably most importantly, EZSlides cannot process images, diagrams, nor handwritten text very well, and by very well we mean not at all. We would have to brainstorm a bit more to determine an algorithm to detect these images or design a seamless way for the user to manually include these.

We were grateful to have been awarded the "Best Education Hack" prize at <a href="https://hackru-s21.devpost.com/">HackRU 2021</a>.

### Demo
`youtube:https://www.youtube.com/embed/0vnTaAnytKc`