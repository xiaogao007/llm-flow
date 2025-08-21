# EasyFlow 智能平台

一个基于 React + TypeScript + Vite 构建的现代化 AI 智能平台前端项目，采用午夜玻璃风设计主题。

## 🎨 设计特色

- **午夜玻璃风主题**：深色背景配合玻璃拟态效果
- **现代化 UI**：使用 Inter 字体和 Font Awesome 图标
- **响应式布局**：适配不同屏幕尺寸
- **流畅交互**：React Router 路由 + 组件化架构

## 🛠️ 技术栈

- **框架**: React 19.1.0 + TypeScript
- **构建工具**: Vite 7.0.4
- **路由**: React Router DOM 6.x
- **样式**: CSS3 (CSS Variables + Grid/Flexbox)
- **字体**: Inter (Google Fonts)
- **图标**: Font Awesome 6.5.0

## 📦 项目结构

```
llm-flow/
├── public/                 # 静态资源
├── src/
│   ├── components/         # 通用组件
│   │   ├── Navbar.tsx      # 顶部导航栏
│   │   ├── LeftSidebar.tsx # 左侧边栏
│   │   └── Main.tsx        # 主内容区
│   ├── layouts/            # 布局组件
│   │   └── AppLayout.tsx   # 应用主布局
│   ├── pages/              # 页面组件
│   │   ├── Home.tsx        # 首页
│   │   ├── Chat.tsx        # 聊天页面
│   │   ├── Flow.tsx        # 流程编排
│   │   ├── Datasets.tsx    # 数据集管理
│   │   ├── Files.tsx       # 文件管理
│   │   ├── Knowledge.tsx   # 知识库
│   │   ├── Agents.tsx      # Agent 管理
│   │   ├── Search.tsx      # 搜索功能
│   │   ├── Settings.tsx    # 系统设置
│   │   ├── Profile.tsx     # 个人资料
│   │   ├── Api.tsx         # API 管理
│   │   └── NotFound.tsx    # 404 页面
│   ├── App.tsx             # 应用入口（路由配置）
│   ├── main.tsx            # 应用启动
│   ├── index.css           # 全局样式
│   └── vite-env.d.ts       # Vite 类型声明
├── package.json            # 项目配置
├── tsconfig.json           # TypeScript 配置
├── vite.config.ts          # Vite 配置
└── README.md               # 项目说明
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 http://localhost:5173 (或 Vite 分配的端口)

### 构建生产版本

```bash
pnpm build
```

### 预览生产版本

```bash
pnpm preview
```

## 📱 功能模块

### 🏠 首页
- 数据概览仪表板
- KPI 指标展示
- 使用趋势图表
- 最近运行记录

### 💬 聊天
- 实时对话界面
- 消息历史记录
- 上下文管理
- 引用来源显示

### 🔄 流程编排
- 可视化工作流设计
- 节点拖拽配置
- 流程导入导出
- 实时运行监控

### 📊 数据集管理
- 文档集合管理
- 数据源配置
- 批量操作支持

### 📁 文件管理
- 文件上传下载
- 格式预览支持
- 权限管理

### 📚 知识库
- 知识源连接
- 文档索引
- 检索优化

### 🤖 Agent 管理
- Agent 模板配置
- 角色定义
- 行为规则设置

### 🔍 搜索
- 全局搜索
- 多类型过滤
- 结果高亮

### ⚙️ 系统设置
- 模型参数配置
- 系统提示词
- 主题切换

### 👤 个人资料
- 用户信息管理
- 偏好设置
- 语言切换

### 🔑 API 管理
- API 密钥管理
- 权限控制
- 使用统计

## 🎨 主题定制

项目使用 CSS 变量定义主题色彩：

```css
:root {
  --bg-1: #0f172a;        /* 主背景 */
  --bg-2: #1e293b;        /* 次背景 */
  --glass: rgba(255,255,255,0.08);  /* 玻璃效果 */
  --text: #e5e7eb;        /* 主文本 */
  --muted: #94a3b8;       /* 次要文本 */
  --accent: #22d3ee;      /* 主色调 */
  --accent-2: #a78bfa;    /* 次色调 */
  --accent-3: #f472b6;    /* 强调色 */
  --ok: #34d399;          /* 成功色 */
  --warn: #f59e0b;        /* 警告色 */
  --err: #ef4444;         /* 错误色 */
}
```

## 🔧 开发指南

### 添加新页面

1. 在 `src/pages/` 创建新页面组件
2. 在 `src/App.tsx` 中添加路由配置
3. 在 `src/components/Navbar.tsx` 中添加导航链接

### 组件开发规范

- 使用 TypeScript 严格模式
- 组件采用函数式写法
- 样式使用 CSS 变量
- 图标使用 Font Awesome

### 路由配置

项目使用 React Router v6 嵌套路由：

```tsx
<Route element={<AppLayout />}>
  <Route index element={<Home />} />
  <Route path="chat" element={<Chat />} />
  {/* 更多路由... */}
</Route>
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- 项目地址: https://github.com/xiaogao007/llm-flow
- 问题反馈: 请通过 GitHub Issues 提交

---

**EasyFlow 智能平台** - 让 AI 更智能，让工作更高效 🚀 