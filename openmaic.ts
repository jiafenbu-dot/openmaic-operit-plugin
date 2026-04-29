/*
METADATA
{
  "name": "OpenMAIC",
  "description": "在侧边栏打开 OpenMAIC 多智能体互动课堂网页，一键进入AI学习体验。",
  "category": "EDUCATION",
  "tools": [
    {
      "name": "open_openmaic",
      "description": "在侧边栏打开 OpenMAIC 网页，可直接使用互动课堂功能。",
      "parameters": []
    }
  ]
}
*/
/// <reference path="./types/index.d.ts" />

const OpenMAICPlugin = (function () {

  const OPENMAIC_URL = "https://open.maic.chat";

  async function wrap(func: (params: any) => Promise<any>, params: any) {
    try {
      const result = await func(params);
      complete(result);
    } catch (error: any) {
      complete({ success: false, message: `执行失败: ${error.message}` });
    }
  }

  /**
   * 打开 OpenMAIC 网页
   */
  async function open_openmaic(params: {}): Promise<any> {
    try {
      // 使用 visit_web 在应用内打开网页
      await Tools.Web.visitWeb({ url: OPENMAIC_URL });
      return {
        success: true,
        message: "已打开 OpenMAIC 互动课堂，请使用 Access Code 登录后开始学习。",
        url: OPENMAIC_URL
      };
    } catch (error: any) {
      // 如果 visit_web 不可用，尝试用 open_url
      try {
        await Tools.System.openUrl({ url: OPENMAIC_URL });
        return {
          success: true,
          message: "已在外部浏览器打开 OpenMAIC 互动课堂。",
          url: OPENMAIC_URL
        };
      } catch (e: any) {
        return {
          success: false,
          message: `无法打开网页: ${e.message}。请手动访问 ${OPENMAIC_URL}`
        };
      }
    }
  }

  return {
    open_openmaic: (params: any) => wrap(open_openmaic, params),
  };
})();

(module as any).exports = { open_openmaic: OpenMAICPlugin.open_openmaic };
