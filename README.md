# Dominion Documentations

The Site is generated using [vuepress](https://vuepress.vuejs.org/)
and [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume)

## 环境要求

### Node.js 版本要求

- **Node.js**: ^18.20.0 或 >=20.0.0
- **npm**: 建议使用最新版本

### 检查当前环境

在开始之前，请检查您的环境是否满足要求：

```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version
```

## 安装步骤

### 1. 克隆项目（如果还未克隆）

```bash
git clone https://github.com/your-repo/Dominion.git
cd Dominion
```

### 2. 进入文档目录

```bash
cd docs
```

### 3. 安装依赖

```bash
# 使用 npm 安装依赖
npm install

# 或者使用 yarn（如果您偏好 yarn）
yarn install

# 或者使用 pnpm（推荐，更快更节省空间）
pnpm install
```

## 本地开发运行

### 启动开发服务器

```bash
# 启动开发服务器
npm run docs:dev

# 或者清理缓存后启动（推荐）
npm run docs:dev-clean
```

开发服务器启动后，您可以在浏览器中访问：

- **本地地址**: <http://localhost:8080>
- **网络地址**: <http://192.168.x.x:8080> （用于其他设备访问）

### 开发模式特性

- **热重载**: 修改文件后页面会自动刷新
- **实时预览**: 可以实时查看修改效果
- **调试友好**: 包含详细的错误信息和调试工具

## 构建生产版本

### 构建静态文件

```bash
# 构建生产版本
npm run docs:build
```

构建完成后，静态文件将生成在 `src/.vuepress/dist` 目录中。

### 本地预览生产版本

```bash
# 预览构建后的静态文件
npm run docs:preview
```

预览服务器将在 <http://localhost:8080> 启动。

## 项目结构说明

```
docs/
├── package.json          # 项目配置和依赖
├── src/                  # 源文件目录
│   ├── .vuepress/        # VuePress 配置目录
│   │   ├── config.ts     # 主配置文件
│   │   ├── theme.ts      # 主题配置
│   │   └── dist/         # 构建输出目录
│   ├── README.md         # 首页
│   ├── en/              # 英文文档
│   ├── jp/              # 日文文档
│   └── ...              # 其他语言文档
└── reference/           # 参考文档
```

## 常用命令

| 命令                       | 说明              |
|--------------------------|-----------------|
| `npm run docs:dev`       | 启动开发服务器         |
| `npm run docs:dev-clean` | 清理缓存后启动开发服务器    |
| `npm run docs:build`     | 构建生产版本          |
| `npm run docs:preview`   | 预览构建后的网站        |
| `npm run vp-update`      | 更新 VuePress 相关包 |

## 故障排除

### 常见问题及解决方案

#### 1. Node.js 版本不兼容

**问题**: 出现 "engines" 相关错误
**解决方案**:

- 使用 Node Version Manager (nvm) 切换到支持的版本
- Windows: 下载并安装 Node.js 18.20.0+ 或 20.0.0+

#### 2. 依赖安装失败

**问题**: npm install 过程中出现错误
**解决方案**:

```bash
# 清理 npm 缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

#### 3. 端口被占用

**问题**: 默认端口 8080 被占用
**解决方案**: VuePress 会自动寻找可用端口，或手动指定端口：

```bash
npm run docs:dev -- --port 3000
```

#### 4. 热重载不工作

**问题**: 修改文件后页面不自动刷新
**解决方案**:

```bash
# 使用清理缓存的启动命令
npm run docs:dev-clean
```

#### 5. 构建失败

**问题**: 构建过程中出现错误
**解决方案**:

```bash
# 清理缓存和临时文件后重新构建
npm run docs:build
```

### 调试技巧

#### 1. 启用详细日志

```bash
# 启用调试模式
DEBUG=vuepress:* npm run docs:dev
```

#### 2. 检查配置文件

确保 `src/.vuepress/config.ts` 配置正确：

- 检查语法错误
- 验证插件配置
- 确认主题设置

#### 3. 清理缓存

```bash
# 清理 VuePress 缓存
npx vuepress dev src --clean-cache --clean-temp
```

## 部署到生产环境

### 1. 静态文件部署

构建完成后，将 `src/.vuepress/dist` 目录下的文件部署到您的 Web 服务器。

### 2. GitHub Pages 部署

如果使用 GitHub Pages，可以创建 GitHub Actions 工作流自动部署。

### 3. Netlify 部署

- 构建命令: `npm run docs:build`
- 发布目录: `src/.vuepress/dist`

## 技术栈信息

- **VuePress**: 2.0.0-rc.19
- **主题**: vuepress-theme-plume 1.0.0-rc.124
- **构建工具**: @vuepress/bundler-vite
- **预览服务器**: http-server

## 获取帮助

如果您在部署过程中遇到问题，可以：

1. 查看 [VuePress 官方文档](https://vuepress.vuejs.org/)
2. 查看 [vuepress-theme-plume 文档](https://theme-plume.vuejs.press/)
3. 检查项目的 Issue 页面
4. 联系项目维护者

## 更新文档

### 修改文档内容

1. 编辑 `src` 目录下的 Markdown 文件
2. 开发服务器会自动重载显示更改
3. 测试无误后提交更改

### 更新依赖

```bash
# 更新 VuePress 相关包
npm run vp-update

# 更新所有依赖
npm update
```

---

**注意**: 本教程基于当前项目配置编写，如果项目配置发生变化，请相应更新此文档。
