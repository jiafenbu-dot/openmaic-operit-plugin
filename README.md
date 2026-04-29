# OpenMAIC Operit 插件

在 Operit AI 侧边栏一键打开 OpenMAIC 多智能体互动课堂。

## 安装方式

### 方式一：ZIP 导入
1. 将此目录打包为 ZIP 文件
2. 打开 Operit AI → MCP市场 → 导入插件
3. 选择 ZIP 文件导入

### 方式二：手动导入
1. 将 `openmaic.ts` 和 `openmaic.js` 复制到 Operit 的 `examples/` 目录
2. 重启 Operit AI 即可使用

## 使用方法

在 Operit AI 对话中输入：
- "打开 OpenMAIC"
- "帮我打开互动课堂"
- "open openmaic"

AI 会自动调用 `open_openmaic` 工具，在侧边栏打开 OpenMAIC 网页。

## 编译

如果修改了 `.ts` 文件，需要重新编译：

```bash
cd OpenMAIC-Plugin
npx tsc openmaic.ts --outDir . --target ES2020 --module commonjs --esModuleInterop
```

## 注意事项

- 首次使用需要输入 Access Code（在 open.maic.chat 获取）
- 网页在应用内浏览器中打开，支持全功能交互
- 如果应用内打开失败，会自动回退到外部浏览器
