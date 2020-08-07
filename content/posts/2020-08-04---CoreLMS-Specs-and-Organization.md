---
title: "CoreLMS: Specs and Project Organization"
date: "2020-08-04T11:00:00.000Z"
template: "post"
draft: false
slug: "core-lms-specs-and-project-organization"
category: "CoreLMS"
tags:
  - "Open Source"
  - "ASP.Net Core"
description: "A discussion of the functionality goals for the CoreLMS project and getting the solution setup for \"clean code\" success."
---

Let's get into the nitty-gritty.

Last week I kicked the project off with some design notes, listed my goals, got the brand spankin' new solution scaffolded, and started the first entity for my open source learning management system built on an ASP.Net Core / EF Core stack.

## Get the Git

Check out (see what I did there) [the project on Github](https://github.com/FitzyCodesThings/core-lms)

## Watch the Vid

I'll detail the important bits below, but if you want to catch the whole (lightly edited) replay from the live stream, check it out here:

`youtube: https://www.youtube.com/watch?v=KUHvtYaPeuE`

## Basic Functionality Overview

I covered my goals for this as a learning project in the [first post of the series](https://dev.to/fitzycodesthings/corelms-let-s-build-a-cleanish-solidish-lms-from-scratch-in-asp-net-core-34hh)

Here's a bare-minimum list of the "things this thing should do:"

- Support both on-demand (pre-recorded) and live online courses
    - Both simple (single video) and complex (modules/lessons) on-demand course formats
    - Integration with Wistia for pre-recorded content   
    - Support embedding third-party video players for live content
    - Course progress tracking
        - Simple certificate issuance on completion
- E-commerce functionality including:
    - Store front and course catalog
    - Stripe integration for billing and payments
    - *Stretch:* integration with Zapier, possibly specific marketing solutions
- Administrative interface for management of content, students, orders, etc.

## What I Got Done This Week

- Scaffolded out the solution into the various "clean architecture"-style projects we'll be using:
    - **Core** for all common interfaces, entity definitions, common types, etc.
    - **Application** for internal business logic concerns
    - **Infrastructure** for external concerns (email services, etc.)
    - **Persistence** for managing storage concerns
    - **Tests** for... I'll give ya three guesses
    - **Web.MVC** for the primary web-based UI
- Started the first entity (Course) 
- Created first DB migration and tested the migration flow

## Wrapping Up

Didn't get a MASSIVE amount done on this first pass, but that's okay: thinking through things and organizing properly is *critical* to project success (not that I don't expect to reorganize along the way, too).

Next time, I'll be building out a few more basic entities, starting the first business logic service, and building the first unit test (in TDD fashion) for the project!

Join me [live on Twitch](https://twitch.tv/fitzycodesthings) on Wednesdays at 12pm Central / 5pm UTC to watch along and tell me how to fix things!

Until next time,<br>
John / Fitzy