---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}


## Manuscripts

- **Meihao Fan**, Shaolei Zhang, Ju Fan, Peng Li, Jie Song, Jianjun Chen. EvoCost: Harness Self-Evolution for Cost-Efficient LLM Agents **Under Review at ICLR 2027**.

- Gaoyuan Li, **Meihao Fan**, Yizhe Liu, Shaolei Zhang, Ju Fan, Siyi Wang, Jiaheng Hou, Xudong Weng, Honghan Tian, Zang Li. SkillAdam: Stable and Efficient Skill Evolution for Agents **Under Review at ICLR 2027**. [Preprint](https://arxiv.org/abs/2609.08944) · [Code](https://github.com/ruc-datalab/SkillAdam)

- Yuxin Zhang, Ju Fan, **Meihao Fan**, Shaolei Zhang, ... Multi-Agent World: Scaling Multi-Agent Orchestration Training via Recursive Environment Improvement **Under Review at ICLR 2027**.
