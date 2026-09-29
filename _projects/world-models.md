---
collection: projects
title: Interactive Memory & Recursive Self-Improvement (RSI) for World Models
excerpt: Project Lead · World model evaluation, scalable data curation, training, self-improvement. Ongoing.
---

## Interactive Memory & Recursive Self-Improvement (RSI) for World Models

**Ongoing**

Project Lead · World model evaluation, scalable data curation, training, self-improvement

- Proposed an **interactive-memory benchmark for action-conditioned world models**, formalizing memory through **Encoding, Maintain, Update, and Read** and evaluating reactive response, memory persistence, and memory plasticity across temporal-retention and interference settings.
- Built an automated **Isaac Sim** evaluation pipeline with programmatically generated cases and ground-truth state supervision; reproduced and evaluated **nine representative world models**, including Ctrl-World, WorldMem, iVideoGPT, HyDRA, and Oasis, under a unified evaluation protocol.
- Built a **fully automated multimodal annotation system** for world-model training, covering atomic action segmentation, semantic and object-interaction labels, object-state changes, camera pose, and 3D hand motion; supports **100+ videos concurrently** at approximately **$40 API cost per raw video hour**, with annotation quality validated through manual audits.
- Developing a **Recursive Self-Improvement** pipeline linking data annotation, training-recipe construction, distributed training, evaluation, and recipe refinement; uses model weaknesses to drive hard-example mining, curriculum construction, active data selection, and data-mixture optimization.
