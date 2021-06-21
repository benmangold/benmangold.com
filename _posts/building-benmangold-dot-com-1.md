---
title: "Building This Blog - Part 1 [draft]"
excerpt: "Building and continuously deploying this website on AWS with Next.js, Terraform and GitHub Actions."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2021-06-19T17:19:16.886Z"
author:
  name: Ben Mangold
  picture: "/assets/blog/authors/benmangold.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
tags: next.js github-actions terraform aws lambda blog-build
---

Maintaining a personal blog is one of those projects I've attempted again and again in my decade or so or programming.

Each attempt starts with grand aspirations, only to find itself lost in the sauce of new technologies and frameworks.

Not this time.

This inaugural blog post details the decisions behind the website you see before you. But first, story time.

## Some Backstory

In the past I've built and deployed static websites for projects and to host a simple resume page here at benmangold.com.

My go-to approach for those sites was a static website written in [React](https://reactjs.org/) with [Gatsby](https://www.gatsbyjs.com/) deployed to a manually-configured, public-facing [S3](https://aws.amazon.com/s3/) Bucket on AWS, the domain name bought and DNS managed in AWS [Route53](https://aws.amazon.com/route53/).

The most critical downside of my initial approach was a lack of automation. Manual configuration and deployment is a long-term untenable tech debt. After all, the real work of the project is the _writing_, isn't it?

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

## The New Approach

For the last couple years I've worked as a DevOps Engineer and that experience has equipped me to build the blog of my dreams.

The high-level solutions to the automation problems was implementing Infrastructure-as-Code and Continuous Deployment.

These practices and technologies reduce the friction of managing infrastructure and updating the production site.

### Initial Requirements

a. Infrastructure-as-Code with Terraform from Day 1.

b. Continuous deployment from Day 1.

c. A batteries-included web framework with full-stack capabilities.

d. Competitive performance with my previous sites.

In part I'll write through how I came to addressed each of the requirements outlined above.