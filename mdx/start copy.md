---
title: Defining Routes 2
description: Learn how to create your first route in Next.js2.
coverImage: https://github.com/devshahoriar.png
tags: Nextjs,Mdx2
---


## Creating Routes

<Image
  alt="Route segments to path segments"
  src='https://github.com/devshahoriar.png'
  width="500"
  height="500"
  
/>

A special [`page.js` file](/docs/app/building-your-application/routing/pages) is used to make route segments publicly accessible.

<Image
  alt="Defining Routes"
  src='https://github.com/devshahoriar.png'
  width="500"
  height="500"
/>

In this example, the `/dashboard/analytics` URL path is _not_ publicly accessible because it does not have a corresponding `page.js` file. This folder could be used to store components, stylesheets, images, or other colocated files.

> **Good to know**: `.js`, `.jsx`, `.ts`, or `.tsx` file extensions can be used for special files.

## Creating UI

[Special file conventions](/docs/app/building-your-application/routing#file-conventions) are used to create UI for each route segment. The most common are [pages](/docs/app/building-your-application/routing/pages) to show UI unique to a route, and [layouts](/docs/app/building-your-application/routing/layouts-and-templates#layouts) to show UI that is shared across multiple routes.

