---
title: "Azure Function Templates with HTTP & Storage Triggers, DI, and Options"
date: "2020-08-28T10:00:00.000Z"
template: "post"
draft: false
slug: "azure-function-templates-with-http-and-storage-triggers-di-and-options"
category: "Azure"
tags:
  - "Azure"
  - "Serverless"
  - "Templates"
description: "Azure Functions aren't nearly as scary as I thought. Let's look at two sample functions with different triggers and add DI, the Options pattern for config, and CI/CD with Azure DevOps."
socialImage: "/media/blog/cloudsuccess.jpg"
---
Azure Functions scared me for a long time, but they shouldn't have. Getting started is VERY simple, especially with a little guidance on getting common features like dependency injection and the options pattern for configuration added.

Let's take a look.

## Get the Git

Check out [the project on Github](https://github.com/FitzyCodesThings/AzureFunctionTemplates) or [get it on Azure DevOps](https://dev.azure.com/FitzyCodesThings/AzureFunctionTemplates)

## Watch the Walkthrough

`youtube:https://youtu.be/nBMO4-TWeBA`

## Overview

For this "project," I really just wanted to:

1) Solidify my grasp on how Azure Functions work
2) Build a couple of templates I can use in future projects

To that end, I created two different templates.

#### The first is an HTTP request-triggered Azure Function.

Think of this type of function as an extremely simple RESTful API.

You define a function name that gets translated to an endpoint like `http://localhost/api/MyFunction` and can either send GET or POST requests to it, do some stuff, and return any standard response.

The code for this is incredibly straightforward, though note that I didn't include DI & options in this template (check out the second function template for that).

This kind of trigger would be fantastic for any kind of Zapier or IFTTT-style integrations and so much more.

#### The second template is an Azure Storage Queue-triggered Azure Function

This type of function monitors a queue of messages built on the Azure Storage Queue feature.

When a message is placed on the queue, the Function is looking for it, grabs it (and removes from the queue) and then does its thing.

This is actually the first type of function I built, and I use it to kick off behind-the-scenes data exports so that my web application (and therefore the user who requested the export) aren't stuck waiting for a long-running web request to finish (or, more likely, fail because it takes longer than a reasonable timeout would allow).

**This is also the template that introduces dependency injection and the Options pattern for configuration.**

Of particular importance is the customized `Startup` class that you have to include to configure everything for DI/config. Take a look at the [Microsoft docs](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options?view=aspnetcore-3.1) for more details on how all of that works.

(And can I just say: holy crap how much have the MS docs improved over the years!?)

## Getting Started With the Templates

Running the templates locally and even deploying them to Azure are verry straightforward.

Rather than try to type it all out here, here are a couple of links to the "how to run it" parts of the video above.

[Running and testing the HTTP-triggered Function](https://youtu.be/nBMO4-TWeBA?t=480)

[Running and testing the Queue-triggered Function](https://youtu.be/nBMO4-TWeBA?t=1381)

## Wrapping Up

Azure Functions (and serverless computing in general) just aren't as scary as I thought, and I'm seriously excited to start using them more and more in my development.

If you have any questions (or feedback) about what I've built here, let me know! I'll do my best to help/incoporate suggestions.

Otherwise, have fun going serverless!

Until next time,  
\- Fitzy

### 💬 [Discuss it on Dev](https://dev.to/fitzycodesthings/azure-function-templates-with-http-storage-triggers-di-and-options-4a4a) 💬
