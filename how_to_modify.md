# 个人主页修改流程

## 信息来源与范围

- 以用户指定的最新简历为依据；简历仓库为 `fmh1art/fmh_cv_ei`，入口为 `main.tex`。
- 本次同步依据提交 `909f7dcc22e60300b55e9b9e5ac5fb69756ff724`（2026-09-29）。
- 默认只读取本文件、目标页面及直接依赖；不要扫描整个项目或进行无关重构。
- 保留简历中的作者顺序、成果指标、工作日期和投稿状态，不把 Under Review 写成已录用。
- 简历未列出的历史论文可保留；不根据缺失信息推断其已撤回或无效。

## 文件位置

- `_pages/about.md`：主页简介、经历、精选论文与在审稿件。
- `_pages/cv.md`：网页 CV；`cv.tex` 与 `fmh_cv.pdf`：同步的简历源码与下载版。
- `_projects/*.md`：项目介绍；`_publications/*.md`：已发表/录用论文。
- `_pages/publications.md`：论文列表和单独列出的 Manuscripts，避免模板把在审稿件标成 Published。
- `_config.yml`：侧栏简介、联系信息和社交链接。
- `_data/navigation.yml`：导航，CV 当前指向 `/fmh_cv.pdf`。

## 页面模板

当前主页面使用本地适配的 Minimal Light 模板。布局为 `_layouts/academic.html`，样式为 `assets/css/academic.css`，列表组件为 `_includes/academic-item.html`，来源见 `THEME.md`。修改样式时检查桌面与手机宽度下的截图、横向溢出、导航、图片和链接；保留页面 URL 与现有 Markdown 资料。

## 更新与验证

1. 在独立临时目录克隆主页和简历仓库，记录来源提交；读取相关说明。
2. 按简历核对简介、教育、经历、项目、论文与联系方式，保持各页面一致。
3. 对 GitHub stars 等实时数字，查询对应仓库的 GitHub API；写明精确值和查询日期。查询失败时不要猜测。
4. 保留现有页面 URL。新增项目若没有可靠时间，不编造项目日期。
5. 将简历 `main.tex` 复制为 `cv.tex`，使用本地 LaTeX 工具生成 `fmh_cv.pdf`，不把私有源码上传到第三方编译服务。可用 `tectonic --outdir <临时输出目录> cv.tex`，或 `pdflatex -interaction=nonstopmode -halt-on-error -output-directory=<临时输出目录> cv.tex`。
6. 检查 PDF 页数、文字完整性和页面渲染，确保没有模板残留、溢出或缺失字符。仅提交 PDF 和源码，不提交编译中间文件。
7. 检查 YAML front matter、相关链接及 `git diff --check`；有 Jekyll 环境时构建一次。不要为无关的既有问题扩大修改范围。
   - 正文与 excerpt 中的行内分隔使用 `·` 或句号，不使用裸 `|`；当前渲染器可能将其解析为表格。真实 Markdown 表格、Liquid 过滤器与 YAML 多行语法中的 `|` 不要机械替换。
   - 检查最终 HTML：普通简介、论文与项目页面不应意外出现 `<table>`、`<th>`、`<td>`；同时核对正文、列表及链接保留，不能仅以构建成功或关键字存在判断渲染正确。
8. 提交并推送当前 Pages 发布分支（目前为 `main`），确认远端提交和 Pages 构建成功，再检查在线页面及 PDF。
9. 在私有维护仓库 `fmh1art/my_home` 记录来源、变更、验证与待办。
10. 仅在推送成功且没有未保存文件后，删除本次创建的临时克隆目录。失败时保留现场。

## LinkedIn 与 Overleaf

- LinkedIn 更新指令保存在私有维护仓库，由用户的浏览器 agent 执行；无法读取当前页面时应如实标记，执行前先核对，避免重复条目。
- 如果只读取简历作为同步来源，不修改简历仓库，也无需在 Overleaf pull。
