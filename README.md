#OpenMAIC Operit挿件

在Operit AI侧边栏一键打开OpenMAIC多智能体互动课堂。

## 安装方式

###方式一：zip导入
1. 将此目录打包为 ZIP 文件
2.打开操作AI→沙盒包市场→导入插件
3. 选择 ZIP 文件导入

### 方式二：手动导入
1.将`openmaic.ts`和`openmaic.js`复制到Operit的`示例/` 目录
2.重启Operit AI即可使用

## 使用方法

在Operit AI对话中输入：
-“打开openmaic”
- "帮我打开互动课堂"
-"打开openmaic"

AI 会自动调用 `open_openmaic`工具，在侧边栏打开OpenMAIC网页。

## 编译

如果修改了`.ts` 文件，需要重新编译：

```猛击
CD OpenMAIC-Plugin
npx tsc openmaic。TS--outDir. -target ES2020--模块commonjs--esModuleInterop
```

## 注意事项

-首次使用需要输入访问代码（在open.maic.chat获取）
- 网页在应用内浏览器中打开，支持全功能交互
- 如果应用内打开失败，会自动回退到外部浏览器
