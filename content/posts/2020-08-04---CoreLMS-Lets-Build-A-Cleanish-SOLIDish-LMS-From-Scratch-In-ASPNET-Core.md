---
title: "CoreLMS: Let's Build a Cleanish, SOLIDish LMS From Scratch in ASP.Net Core"
date: "2020-08-04T10:00:00.000Z"
template: "post"
draft: false
slug: "core-lms-let-s-build-a-cleanish-soli-dish-lms-from-scratch-in-asp-net-core"
category: "CoreLMS"
tags:
  - "Open Source"
  - "ASP.Net Core"
description: "An introduction to my open source learning management system project in ASP.Net Core, CoreLMS."
socialImage: "/media/blog/cheesyprogrammersuccess.jpg"
---

(I love cheesy stock photos.)

Woo! My first project to be detailed here on Dev (and built [live on Twitch](https://twitch.tv/fitzycodesthings), step by step).

My primary client is a provider of continuing education, primarily online, for professionals, and our legacy PHP web app that acts as both Learning Management System and ecommerce platform is long, long overdue for a ground-up overhaul.

**So let's build it!**

Or part of it, at least. 

## Get the Git

Check out [the project on Github](https://github.com/FitzyCodesThings/core-lms)

## Project Overview

My goal for this project is to build a functional, basic, and open source learning management system including basic e-commerce functionality.

(I'll then take that core system and build on our more extensive customizations and business processes in closed source.)

**This is a learning project for me.**

My intent is to practice building according to a number of common patterns and best practices that I have less-than-ideal experience with (detailed below), so A) don't expect it to be perfect, and B) follow along and help me get it right!

## Super High-Level Specs:
- Build as a monolithic application (for now)
    - System design lends well to a microservices architecture for possible future exploration
- Basic Stack:
    - ASP.Net Core MVC (starting with 3.1, plan to move to 5.0)
    - Entity Framework Core (ditto)
- Build with base Bootstrap 4 (5?) to support easy theming in the future

## Learning/Demonstration Goals:

I have a number of best practices and patterns that I want to implement (some for the first time) in this production-ready system.

These include:
- SOLID adherence
- Clean Code Architecture
- Repository-ish Pattern with EF Core
- Unit and Integration Testing
- Proper logging (with Serilog?)
- CI/CD
- SPA for course access using Blazor (secondary goal)

## Follow Along, Take Part!

As mentioned at the top, I'll be developing this project live on Wednesdays on Twitch (and possibly other days as my schedule allows). I may occasionally wrap up boring bits off-stream, but all code will be published for open source use at the Github repo above.

I'd be *honored* for you to take part: join the conversation here or on Twitch, drop issues on Github, whatever you like.

## Wrapping Up

Since I already kicked off the planning and early development last week, I'll have another post up very shortly going over the thinking there and with a link to the archived broadcast.

Other than that, I'll be [live tomorrow (Wednesday August 4) at 12pm CT / 5pm UTC](https://twitch.tv/fitzycodesthings) to build a few more entities, start the first business logic service, and add the first unit tests (following TDD as best I can as I learn).

Hope to see you around, and more than anything, I hope it helps ANYONE else get caught up or just learn a few things like I've been needing to!

Cheers,<br>
John / Fitzy