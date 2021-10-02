---
title: "blog dev journal"
excerpt: "A development journal for benmangold.com."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2021-08-31T20:48:47.063Z"
author:
  name: Ben Mangold
  picture: "/assets/blog/authors/benmangold.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
tags: next.js github-actions terraform aws lambda blog
---

Maintaining a personal blog is one of those projects I've attempted again and again.

Each attempt starts with grand aspirations, but finds itself lost in the sauce of new technologies and frameworks.

Not this time.

This blog post details the decisions and development behind benmangold.com.

## Some Backstory

In the past I've built and deployed similar websites on AWS.

My approach for those sites was a static website written in [React](https://reactjs.org/) with [Gatsby](https://www.gatsbyjs.com/) deployed to a public-facing [S3](https://aws.amazon.com/s3/) Bucket on AWS, the domain name bought and DNS managed in AWS [Route53](https://aws.amazon.com/route53/). All of this was artisinally configured in the AWS console without any version control. Shame, shame.

The most critical downside of my initial approach was a lack of automation. Manual configuration and deployment is a long-term untenable tech debt. After all, the real work of the project is the _writing_.

### Previous benmangold.com Tech Stack

[React](https://reactjs.org/) - Javascript UI Framework

[Gatsby](https://www.gatsbyjs.com/) - Javascript Site Generator

[S3](https://aws.amazon.com/s3/) - Storage on AWS

[Route53](https://aws.amazon.com/route53/) - Domain Hosting and DNS on AWS

### Pros

a. Capable technology stack, has aged very well.

b. Produced a performant static website. High Lighthouse scores.

### Cons

a. Manual infrastructure configuration in the AWS console.

b. Manual deployments via uploading assets to S3 in the AWS console.

c. Domain hosted from public-facing S3 bucket instead of a CDN.

d. No meaningful content management.

e. No built-in back-end for implementing a full-stack feature.

## The New Approach

The high-level solutions to my automation problems is implementing Infrastructure-as-Code and Continuous Deployment.

These practices and technologies reduce the friction of managing infrastructure and updating the production site.

### Initial Requirements

a. Infrastructure-as-Code with Terraform from Day 1.

b. Continuous deployment from Day 1.

c. A batteries-included web framework with full-stack capabilities.

d. Competitive performance with my previous sites.

### Moving Parts (GitHub Repos)

[github.com/benmangold/benmangold.com](https://github.com/benmangold/benmangold.com) - Next.js application code and Terraform configuration.

[github.com/benmangold/terraform-next-js](https://github.com/benmangold/terraform-aws-next-js) - Forked module of [dealmore/terraform-aws-next-js](https://github.com/dealmore/terraform-aws-next-js)
