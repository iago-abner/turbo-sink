export interface UserUseCase<I, O> {
  create(input: I): Promise<O>;
  delete(id: string): Promise<void>;
  list(): Promise<any>;
  update(id: string, input: I): Promise<void>;
}
