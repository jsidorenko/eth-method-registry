declare module '@smartwallet/eth-method-registry' {
  class MethodRegistry {
    static parse(signature: string): MethodRegistry.IParseResults

    constructor(opts: object)

    lookup(bytes: string): Promise<string>
    parse(signature: string): MethodRegistry.IParseResults
  }

  namespace MethodRegistry {
    export interface IParseResults {
      name: string
      rawName: string
      args: Array<{ type: string }>
    }
  }

  export = MethodRegistry
}
