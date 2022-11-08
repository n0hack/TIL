export default interface HttpRepository {
  get(url: string): Promise<Object>;
  post(): null;
  update(): null;
  delete(): null;
}
