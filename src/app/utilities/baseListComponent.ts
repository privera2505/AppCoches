export abstract class BaseListComponent<T> {
  items: Array<T> = [];

  abstract getCoches(): void;
}
