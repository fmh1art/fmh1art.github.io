---
collection: projects
title: 'DeepAnalyze: Scalable Training-Trajectory Synthesis'
excerpt: Project Lead · Synthetic data, quality filtering, curriculum learning, agentic RL. ICML 2026.
---

## DeepAnalyze: Scalable Training-Trajectory Synthesis

**ICML 2026**

Project Lead · Synthetic data, quality filtering, curriculum learning, agentic RL

- Developed **data-grounded trajectory synthesis** for DeepAnalyze-8B, combining teacher-distilled reasoning and environment-generated interactions in the **DataScience-Instruct-500K** training corpus.
- Built a **questioner–solver–inspector** pipeline: generate tasks and acceptance criteria from real data, execute multi-turn solutions, and filter trajectories using interaction checks and resulting environment changes.
- Implemented a curriculum from single-skill SFT to multi-skill cold-start training and **GRPO**, using approximately 470K, 20K, and 15K samples, respectively.
- Evaluated on **12 benchmarks**; achieved **38.88% on DABStep** and **61.7% on DS-1000**, versus 15.34% and 54.8% for the single-ability training variant.

[ruc-datalab/DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze) — **4,662 GitHub stars**, checked 2026-09-29.
