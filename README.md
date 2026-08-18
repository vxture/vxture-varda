# vxture-varda

Varda——Vxture 平台智能助手,独立产品仓。

## 出身与现状(2026-08-18)

本仓内容自 `vxture-platform` 单体仓整体迁出(owner 判:varda 构建耦合过深,
迁出后重构;迁出时**允许暂不可构建**,一段时间无应用价值可接受)。完整前史
见 platform 仓 git 历史(迁出提交前的 `agent-studio/varda`、
`agent-server/varda`、`packages/ai/model-runtime-client`)。

| 目录 | 原址(vxture-platform) | 包名变更 |
| --- | --- | --- |
| `varda/` | `agent-studio/varda` | `@vxture/agent-studio-varda` → **`@vxture/varda`**(owner 判:前端就叫 varda) |
| `varda-bff/` | `bff/varda-bff` | `@vxture/bff-varda` → **`@vxture/varda-bff`**(真正的 BFF,初版遗漏后补入) |
| `varda-server/` | `agent-server/varda` | `@vxture/agent-server-varda` → **`@vxture/varda-server`**(agent 逻辑服务) |
| `packages/model-runtime-client/` | `packages/ai/model-runtime-client` | 不变(Atlas API 客户端;Atlas 已重大重构,**需按新 Atlas 重写**) |
| `deploy/` | `deploy/worker-02/` | worker-02 宿主部署(compose + env 样例 + 镜像源引导) |
| `deploy/docker/Dockerfile.nestjs-prisma` | `deploy/docker/`(平台仓该文件仅 varda/旧模型平台消费,随迁) |
| `.github/workflows/deploy.yml` | `.github/workflows/deploy-varda.yml` | tag `varda-*` 触发;**secrets 需在本仓重新配置**(ACR 凭据、worker-02 SSH) |
| `docs/spec`、`docs/impl` | `docs/20-specs/001-varda`、`docs/40-implementation/packages/agents/varda` | — |

## ⚠ 已知破损(重构清单,按序)

1. **varda-server 依赖 7 个平台内部工作区包**(varda-bff 另依赖 core-auth/core-config),本仓不存在,`pnpm install` 即失败:
   `@vxture/core-auth`、`@vxture/core-config`、`@vxture/service-billing`、
   `@vxture/service-organization`、`@vxture/service-subscription`、
   `@vxture/service-ticket`(+ 本仓自带的 `model-runtime-client`)。
   **重构方向(owner 判)**:不再链接平台内部包——计费/组织/订阅/工单一律改走
   平台 HTTP API;这是本仓重构的核心工作。
2. **model-runtime-client 对着旧 Atlas API**:Atlas 已重大重构,客户端需按新
   Atlas 契约重写(或改由 Atlas 仓发布官方 SDK,本仓消费)。
3. **varda 前端依赖** `@vxture/design-system` / `@vxture/shared` /
   `@vxture/platform-browser`:前两者已发布 GitHub Packages
   (design-system 6.0.0 / shared 1.6.0),`platform-browser` 尚未发包——
   重构时改为发布版依赖(platform 仓需先发 platform-browser)。
4. 前端包名改为 `@vxture/varda` 后,styles 导出路径(`styles/chat.css` 等)的
   消费方(platform 仓 console/admin)已随迁出解耦;重构完成重新发包后,
   平台侧按新包名重新接入。

## 运行时现状

worker-02 上**已部署的 varda 容器继续运行**(部署产物独立于源码仓);
在本仓完成重构并配好 CI secrets 之前,不做新的部署。
