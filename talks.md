---
title: "Awards and invited talks"
permalink: /talks
layout: single-math
# Publish after November 6 has passed in America/New_York.
weinberg_award_visible_after: "2026-11-07T00:00:00-05:00"
header:
   overlay_image: "/assets/images/sun_on_arc.jpg"
---

<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}">

{% comment %}
Edit honors and talks here. Copy an article block to add another entry.
The scheduled award is omitted from the generated page until its release date.
{% endcomment %}
<div id="talks" class="research-list" markdown="1">
<section class="pubs__group" aria-labelledby="honors" markdown="1">

# Awards
{: #awards}

{% assign build_time = site.time | date: '%s' | plus: 0 %}
{% assign award_release_time = page.weinberg_award_visible_after | date: '%s' | plus: 0 %}
{% if build_time >= award_release_time %}

<article class="pub" aria-labelledby="honor-weinberg" markdown="1">
<div class="pub__year">2026</div>
<div class="pub__body" markdown="1">

### Steven Weinberg Research Award
{: .pub__title #honor-weinberg}

Texas, Arkansas, Oklahoma Section of APS
{: .pub__venue}

</div>
</article>

<article class="pub" aria-labelledby="honor-outstanding-graduate" markdown="1">
<div class="pub__year">2020</div>
<div class="pub__body" markdown="1">

### Outstanding Graduate of Class 2020
{: .pub__title #honor-outstanding-graduate}

Fudan University
{: .pub__venue}

</div>
</article>

{% endif %}

</section>

<section class="pubs__group" aria-labelledby="honor-society" markdown="1">

# Honor society
{: #honor-society}

<article class="pub pub--undated" aria-labelledby="honor-sigma-xi" markdown="1">
<div class="pub__body" markdown="1">

### Member nomination
{: .pub__title #honor-sigma-xi}

Sigma Xi
{: .pub__venue}

</div>
</article>

</section>

<section class="pubs__group" aria-labelledby="invited-talks" markdown="1">

# Invited Talks
{: #invited-talks}

<article class="pub" aria-labelledby="talk-hadfs" markdown="1">
<div class="pub__year">2026</div>
<div class="pub__body" markdown="1">

### A universal and efficient hybrid analog-digital fermionic quantum simulator
{: .pub__title #talk-hadfs}

- University of Rochester, Rochester, NY (June 2026)
- Virginia Tech, Blacksburg, VA (May 2026)
- IFF-CSIC (online), Madrid, Spain (April 2026)
{: .pub__venue}

</div>
</article>

</section>
</div>
