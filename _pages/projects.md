---
layout: academic
title: "Projects"
permalink: /projects/
author_profile: true
---

{% include base_path %}

<div class="academic-list">
{% for post in site.projects reversed %}
  {% include academic-item.html %}
{% endfor %}
</div>