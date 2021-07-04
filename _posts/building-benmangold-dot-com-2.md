---
title: "Building This Blog - Part 2 [draft]"
excerpt: "Building this website 2/2."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2021-06-19T19:19:16.886Z"
author:
  name: Ben Mangold
  picture: "/assets/blog/authors/benmangold.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
tags: next.js github-actions terraform aws lambda blog-build hidden
---

## Finding the Path

With the blog standing on its own we get to some feature development.

I want to be able to select a tag to filter out a certain topic, then be able to cancel that selection.

- add onClick to topic list entry, updates state for selected topic.

- if topic list entry's topic is selected, render an 'x' which clears state when clicked.
