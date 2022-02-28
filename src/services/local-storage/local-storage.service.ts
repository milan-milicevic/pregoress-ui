export class LocalStorageService {
  public static get(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  public static put(data: any, key: string) {
    return localStorage.setItem(key, JSON.stringify(data));
  }
}
