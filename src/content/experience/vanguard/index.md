---
title: "Application Development Intern"
tags: ["internship","app dev"]
description: "Established ERISA compliance across brokerage accounts using Java, Python, and AWS."
start: "2020-05"
end: "2020-07"
index: 4
---

### Background
The Employee Retirement Income Security Act of 1974 (<a href="https://www.dol.gov/general/topic/retirement/erisa#:~:text=The%20Employee%20Retirement%20Income%20Security,for%20individuals%20in%20these%20plans">ERISA</a>) is a federal law that sets minimum standards for most voluntarily established retirement and health plans in private industry to provide protection for individuals in these plans.

The task my intern pod took on was to establish ERISA compliance across Vanguard brokerage accounts by developing an algorithm that fetches seven years' worth of brokerage data from a DB2 database and marks ERISA accounts, implementing Quik (Attunity) change data capture to automatically flag ERISA accounts, updating relevant DynamoDB instances, and writing updated and new information to an ERISA S3 Bucket.

### My Work
My work entailed making calls to an internal API in Java to fetch and process brokerage accounts. Given that the full load contained thousands of data points, it was necessary to make multiple calls to the service at once, and the use of Java's concurrency package improved efficiency by 90%.

Additionally, I worked in Python to process information sprayed onto a Kinesis stream through various Lambda functions. In doing so, I created and updated DynamoDB entries containing brokerage account information. 

### Reflections
A huge thank you to Jordan Leach, Stephanie Manning, Abby Holdeman, and Shuaib Baig for their support and guidance throughout the summer!