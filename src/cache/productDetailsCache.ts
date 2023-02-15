export default class ProductDetailsCache {
  private static limit = 50;

  private static cache: {[key: string]: any} = {};

  public static setLimit(limit: number) {
    this.limit = limit;
  }

  public static get(key:string): any {
    if (this.cache[key]) {
      return this.cache[key];
    }
    return {};
  }

  public static set(key: string, data: any) {
    this.cache[key] = { ...data };
  }

  public static remove(key: string) {
    delete this.cache[key];
  }

  public static clear() {
    this.cache = {};
  }
}
