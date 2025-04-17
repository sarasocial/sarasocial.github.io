---
title: 'on botany'
header: '🌱 thoughts on botany & managing digital gardens'
layout: 'default.njk'
permalink: '/botany-idea/'
---

---

### there's a lot of ways to cook eggs

one thought that i've been toying with over the past few days is how one tends to a digital garden, and furthermore, how *i* want to tend to my own digital garden. i'm into the idea of creating an eleventy plugin to help accomplish this, and *if* i were to do that, i'd want to release it publicly.

**this thought has been a big can of worms!**

if you've read any stuff on digital gardens *(for the 1000th time, [this piece](https://maggieappleton.com/garden-history) is a great start)*, you'd probably know that the designs people come up with are varied and range in complexity. there wrongs ways, but no *right* ways, to build a digital garden. that's part of their beauty. a tool designed to help people build their own should account for this sort of design variance, and not just what i *personally* want for my own.

while i've seen digital gardens approach pathing more traditionally, the main commonality between designs is **hyperlinks**. many people *(including me!)* see the weaving of hyperlink paths as an integral part of **what makes a garden a garden**.

> you plant ideas, and these ideas live, grow, change, and die. new ideas are birthed from old ones. thought from thought, life from life. the garden itself is ever-changing--and naturally, so are the paths upon which one traverses it.

this is how i interpreted digital gardens when i first learned about them, and it's what made me fall in love with them.

---

### so much reading

i've been doing more reading now that i'm finally building one. i've been checking out [quartz](https://github.com/jackyzha0/quartz) which led me down a rabbit hole of readings. [this article](https://hapgood.us/2015/10/17/the-garden-and-the-stream-a-technopastoral/) is fascinating. among other things, it led me to the [garden of forking paths](https://en.wikipedia.org/wiki/The_Garden_of_Forking_Paths) *(text [here](https://archive.org/stream/TheGardenOfForkingPathsJorgeLuisBorges1941/The-Garden-of-Forking-Paths-Jorge-Luis-Borges-1941_djvu.txt)!)*, which in turn reminded me of [hypertext literature](https://en.wikipedia.org/wiki/Hypertext_fiction) and led me to read up a bit on its history. there are lots of fun little articles about it--a couple i enjoyed are [here](https://berkeleyfictionreview.org/2021/08/02/hypertext-fiction-the-literary-genre-that-was-theorized-before-it-was-written/) and [here](https://writingcooperative.com/hypertext-fiction-the-past-and-future-of-the-internets-own-tales-c8173322cae4).

everything is so interesting and there's much more to it than i thought when i first stumbled across these types of projects. i *love* thinking about this stuff.

**but! there was a point to be made here,**

this section isn't meant to just be me dropping a reading list. i'm fully, wholly convinced that these winding, often-changing hypertext paths are **the defining characteristic** of what makes a digital garden. and that's given me some direction as i start planning out a mini development project.

---

### botany is a cute word!

and gardens themselves are like botany, applied.

with a bit of newfound direction for where i want to take this project-within-a-project, i created something a couple hours ago:

> [🌱 botanty!](https://github.com/sarasocial/botanty)

> **i'm sorry. i know the wordplay sucks. it's so awful that i love it.**

okay that's anticlimactic. at least right now, as i'm typing this, it is *embarrasingly* empty. again, though, it's a nice start :)

for now, botanty *(fucking kill me if i leave this title lmao)* would simply be a hyperlink manager. other features (if any) could come later--i don't need quartz-level dynamic site graphs lol. the early-stage idea i have is:

1. its purpose would be to, using some set of global rules and individual front matter, run term recognition and automatically insert hyperlinks into text
> so if you have a page on burnout, and you've assigned the phrase "burnout" to it, and on another page you write "i've been struggling with **burnout** again lately", botanty would catch that and insert the corresponding term-based link
2. global rules would be fully customizable, and front matter could be used to override global rules
> a folder marked "tag me!" could contain an article that says "wait, but not me!" and botanty would respect the individual
3. it would probably run two sweeps: one sweep to grab front matter rules, then a second sweep to implement those paths into text before eleventy builds page files

and... that's about all i have for now! i'm brainstorming how these rules will work and i do have notes, but certainly nothing even close to final.

i'll probably take a crack at this over the weekend. before that, i need to do pds stuff and get my new fancy bsky account all set up. that's exciting, too :)


---


>   first written: 12.20.24

>   latest update: 12.20.24

*i am adding these dates manually!! i haven't added that part yet! and obvs i know i don't have to but it's funny to me. documenting this silly project is so much fun :))*