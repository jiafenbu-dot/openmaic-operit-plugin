// Operit AI 脚本类型声明

declare function complete(result: any): void;

declare namespace Tools {
  namespace Web {
    function visitWeb(params: { url: string }): Promise<any>;
  }
  namespace System {
    function openUrl(params: { url: string }): Promise<any>;
    function sleep(ms: number): Promise<void>;
  }
}
