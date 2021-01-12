---
title: "Application Development Intern"
tags: ["internship","application development","vanguard"]
description: "Established ERISA compliance across brokerage accounts using Java, Python, and AWS."
start: "2020-05"
end: "2020-07"
index: 4
---

### Background
The Employee Retirement Income Security Act of 1974 (<a href="https://www.dol.gov/general/topic/retirement/erisa#:~:text=The%20Employee%20Retirement%20Income%20Security,for%20individuals%20in%20these%20plans">ERISA</a>) is a federal law that sets minimum standards for most voluntarily established retirement and health plans in private industry to provide protection for individuals in these plans.

The task my intern pod took on was to establish ERISA compliance across Vanguard brokerage accounts by developing an algorithm that fetches seven years' worth of brokerage data from a DB2 database and marks ERISA accounts, implementing Quik (Attunity) change data capture to automatically flag ERISA accounts, updating relevant DynamoDB instances, and writing updated and new information to an ERISA S3 Bucket.

### My Work

My work entailed making calls to an internal API in JAVA to fetch and process brokerage accounts. Given that the full load contained thousands of data points, it was necessary to make multiple calls to the service at once, and the use of Java's concurrency package improved efficiency by 90%.

Additionally, I worked in Python to process information sprayed onto a Kinesis stream through various Lambda functions. In doing so, I created and updated DynamoDB entries containing brokerage account information. 

### Reflections
A huge thank you to Jordan Leach, Stephanie Manning, Abby Holdeman, and Shuaib Baig for their support and guidance throughout the summer!

<div style="text-align:center"><img alt="A poster presenting Sam's work through two flowcharts. The first one shows how the full data load work consists of fetching seven years' worth of brokerage data and how the change data capture work involves setting up lambdas to live capture incoming employer contributions and new accounts of mandatory types. Both units of work end with the flagging of ERISA-mandatory and ERISA-eligible accounts, the data being pushed to DynamoDB, and the data being written to an S3 gold copy bucket. The second flowchart shows the algorithm through the tech that is used via this sequence: DB2 points to Attunity points to Amazon Kinesis points to and Amazon Lambda points to both Amazon DynamoDB and Amazon S3" src="../../../../docs/erisa.png" width="100%"/></div>