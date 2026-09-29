---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

[Download CV (PDF)](/fmh_cv.pdf)

## Research Summary

Ph.D. student at Renmin University of China researching **scalable data synthesis for agent training**. I develop methods for **task generation, interaction-trajectory synthesis, and execution-based data verification**, and use the resulting data for curriculum learning and multi-turn reinforcement learning. My work connects data construction to measurable improvements in agent capability and generalization. I am extending this research to **embodied data curation, action-conditioned world models, and evaluation-driven data evolution**.

I am seeking a **Summer 2027 U.S. research internship** in embodied AI data, world models, and multimodal agents.

## Education

- **Renmin University of China**, Beijing, China — Sept 2023 – Expected June 2028
  - Ph.D. in Computer Application Technology; advisors: Prof. Ju Fan and Prof. Xiaoyong Du.
  - National Scholarship (2025): the college's only second-year Ph.D. recipient.
- **Chongqing Jiaotong University**, Chongqing, China — Sept 2019 – June 2023
  - B.S. in Computer Science and Technology; GPA: 4.31/5.00.
  - National Scholarship (2023): the college's only recipient; Mingde Scholarship Nomination Award (university top 20).

## Research Experience

- **EvoPhys**, Beijing, China — Research Intern, World Models — Sept 2026 – Present
  - Lead research on world model training, spanning interactive-memory evaluation, scalable multimodal data annotation, and evaluation-driven recursive self-improvement (RSI).
- **ByteDance**, Beijing, China — Research Intern, LLM Agent Systems & Reinforcement Learning — March 2025 – June 2026
  - Led DeepPrep, covering synthetic training tasks, an executable data-preparation environment, and progressive SFT/RL; led research on agent harness self-evolution from execution trajectories.
- **Renmin University of China**, Beijing, China — Research Assistant — Sept 2023 – March 2025
  - Led AutoPrep and BATCHER research on task-aware data preparation, multi-agent orchestration, demonstration selection, and cost-efficient LLM inference.

## Research Projects

### DeepAnalyze: Scalable Training-Trajectory Synthesis

**ICML 2026** · Project Lead | Synthetic data, quality filtering, curriculum learning, agentic RL

- Developed **data-grounded trajectory synthesis** for DeepAnalyze-8B, combining teacher-distilled reasoning and environment-generated interactions in the **DataScience-Instruct-500K** training corpus.
- Built a **questioner–solver–inspector** pipeline: generate tasks and acceptance criteria from real data, execute multi-turn solutions, and filter trajectories using interaction checks and resulting environment changes.
- Implemented a curriculum from single-skill SFT to multi-skill cold-start training and **GRPO**, using approximately 470K, 20K, and 15K samples, respectively.
- Evaluated on **12 benchmarks**; achieved **38.88% on DABStep** and **61.7% on DS-1000**, versus 15.34% and 54.8% for the single-ability training variant.

### DeepPrep: Verifiable Task Synthesis for Agent Training

**VLDB 2026** · Project Lead; First Author | Executable supervision, reversible corruption, multi-turn RL

- Designed a synthesis method that converts SQL workloads into **source tables, target specifications, and executable pipelines**; adds **reversible noise** and verifies recovery to preserve task solvability.
- Constructed **6,788 training tasks**, with pipelines spanning **31 operator types** and up to **28 steps**; trained agents through operator-level SFT, verified reasoning trajectories, and GRPO with hybrid rewards.
- Synthetic training data improved **out-of-domain accuracy by 37.0 percentage points** over Parrot training on Synth-Bird (Qwen3-8B, data ablation); tree-based execution supports backtracking and pipeline repair.

### Interactive Memory & Recursive Self-Improvement (RSI) for World Models

**Ongoing** · Project Lead | World model evaluation, scalable data curation, training, self-improvement

- Proposed an **interactive-memory benchmark for action-conditioned world models**, formalizing memory through **Encoding, Maintain, Update, and Read** and evaluating reactive response, memory persistence, and memory plasticity across temporal-retention and interference settings.
- Built an automated **Isaac Sim** evaluation pipeline with programmatically generated cases and ground-truth state supervision; reproduced and evaluated **nine representative world models**, including Ctrl-World, WorldMem, iVideoGPT, HyDRA, and Oasis, under a unified evaluation protocol.
- Built a **fully automated multimodal annotation system** for world-model training, covering atomic action segmentation, semantic and object-interaction labels, object-state changes, camera pose, and 3D hand motion; supports **100+ videos concurrently** at approximately **$40 API cost per raw video hour**, with annotation quality validated through manual audits.
- Developing a **Recursive Self-Improvement** pipeline linking data annotation, training-recipe construction, distributed training, evaluation, and recipe refinement; uses model weaknesses to drive hard-example mining, curriculum construction, active data selection, and data-mixture optimization.

### CoDA-Bench & TACO: Scalable, Verifiable Task Construction

**ICML / VLDB 2026** · Co-author | Task synthesis, execution verification, difficulty refinement

- **CoDA-Bench:** Co-authored a benchmark of **1,009 tasks across 31 data communities**, built from executable notebook solutions through task reconstruction, adversarial refinement, and human verification.
- **TACO:** Co-authored a benchmark combining **1,500 expert-annotated** and **13,000 synthetic** NL–SQL pairs, using query-structure sampling, schema-constrained generation, and quality checks.

### EvoCost & SkillAdam: Agent Self-Evolution

**ICLR 2027 submissions** · EvoCost: Lead, First Author | SkillAdam: Co-author

- **EvoCost:** Developed harness evolution that mines avoidable interactions from trajectory dependency graphs and validates updates to instructions, skills, tools, and executor logic with a fixed backbone model.
- **SkillAdam:** Co-authored skill optimization with persistent issue memory and adaptive edit budgets; reduced optimization tokens by **67.3%** versus SkillOpt on DeepPlanning, with test accuracy improving from 21.7% to 28.3%.

### AutoPrep & BATCHER: Task-Aware Data Preparation

**VLDB 2025 / ICDE 2024** · Project Lead; First Author | Data transformation, demonstration selection, inference efficiency

- **AutoPrep:** Developed Chain-of-Clauses planning and tool-augmented execution; improved NL2SQL accuracy by **12.22 / 13.23 points** on WikiTQ / TabFact, averaged across evaluated backbones.
- **BATCHER:** Developed coverage-based demonstration selection and token-aware batch allocation; batch prompting reduced API cost by **4–7×** versus standard prompting across eight ER datasets.

## Publications

- **Meihao Fan**, Ju Fan, Yuxin Zhang, Shaolei Zhang, Xiaoyong Du, Jie Song, Peng Li, Fuxin Jiang, Tieying Zhang, Jianjun Chen. DeepPrep: An LLM-Powered Agentic System for Autonomous Data Preparation **VLDB 2026**. [Paper](https://www.vldb.org/pvldb/vol19/p3371-fan.pdf)

- **Meihao Fan**, Ju Fan, Nan Tang, Lei Cao, Guoliang Li, Xiaoyong Du. AutoPrep: Natural Language Question-Aware Data Preparation with a Multi-Agent Framework **VLDB 2025**. [Paper](https://www.vldb.org/pvldb/vol18/p3504-fan.pdf)

- **Meihao Fan**, Xiaoyue Han, Ju Fan, Chengliang Chai, Nan Tang, Guoliang Li, Xiaoyong Du. Cost-Effective In-Context Learning for Entity Resolution: A Design Space Exploration **ICDE 2024**. [Paper](https://fmh1art.github.io/files/BatchER-ICDE2024.pdf)

- Shaolei Zhang, Ju Fan, **Meihao Fan**, Guoliang Li, Xiaoyong Du. DeepAnalyze: Agentic Large Language Models for Autonomous Data Science **ICML 2026**. [Paper](https://arxiv.org/abs/2510.16872) | [Code](https://github.com/ruc-datalab/DeepAnalyze)

- Yuxin Zhang, **Meihao Fan**, Ju Fan, Mingyang Yi, Yuyu Luo, Jian Tan, Guoliang Li. Reward-SQL: Boosting Text-to-SQL via Stepwise Execution-Aware Reasoning and Process-Supervised Rewards **SIGMOD 2026**. [Paper](https://arxiv.org/abs/2505.04671)

- Yuxin Zhang, Ju Fan, **Meihao Fan**, Shaolei Zhang, Xiaoyong Du. CoDA-Bench: Can Code Agents Handle Data-Intensive Tasks? **ICML 2026**. [Paper](https://arxiv.org/abs/2606.15300)

- Chao Deng, Ju Fan, Yuyu Luo, Qinliang Xue, **Meihao Fan**, Yuxin Zhang, Min Zhang, Xiaofeng Jia, Jing Zhang, Xiaoyong Du. TACO: A Benchmark for Open-Domain Text-to-SQL with Ambiguous and Cross-Database Queries **VLDB 2026**. [Paper](https://arxiv.org/abs/2606.14201)

## Manuscripts

- **Meihao Fan**, Shaolei Zhang, Ju Fan, Peng Li, Jie Song, Jianjun Chen. EvoCost: Harness Self-Evolution for Cost-Efficient LLM Agents **Under Review at ICLR 2027**.

- Gaoyuan Li, **Meihao Fan**, Yizhe Liu, Shaolei Zhang, Ju Fan, Siyi Wang, Jiaheng Hou, Xudong Weng, Honghan Tian, Zang Li. SkillAdam: Stable and Efficient Skill Evolution for Agents **Under Review at ICLR 2027**. [Preprint](https://arxiv.org/abs/2609.08944) | [Code](https://github.com/ruc-datalab/SkillAdam)

- Yuxin Zhang, Ju Fan, **Meihao Fan**, Shaolei Zhang, ... Multi-Agent World: Scaling Multi-Agent Orchestration Training via Recursive Environment Improvement **Under Review at ICLR 2027**.

## Technical Skills & Research Interests

- **Data:** Task and trajectory synthesis, execution-based verification, quality filtering, demonstration selection.
- **Training:** Supervised fine-tuning, GRPO, multi-turn RL, curriculum learning, reward modeling.
- **Tools:** Python, PyTorch, Transformers, vLLM.
- **Languages:** Chinese (native), English (professional).
- **Research interests:** Synthetic data for agents; embodied data; world models; multimodal agents; self-improving systems.
