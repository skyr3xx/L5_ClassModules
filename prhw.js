import { Homework } from './hw.js';

export class PracticalHomework extends Homework {
  #hasCodeRepository;

  constructor(subject, taskNumber, isCompleted, hasCodeRepository = false) {
    super(subject, taskNumber, isCompleted);
    this.#hasCodeRepository = hasCodeRepository;
  }

  get hasCodeRepository() {
    return this.#hasCodeRepository;
  }
  set hasCodeRepository(value) {
    this.#hasCodeRepository = Boolean(value);
  }

  show() {
    console.log('--- Практическое домашнее задание ---');
    console.log(`Предмет: ${this.subject}`);
    console.log(`Номер задания: ${this.taskNumber}`);
    console.log(`Выполнено: ${this.isCompleted}`);
    console.log(`Есть репозиторий с кодом: ${this.#hasCodeRepository}`);
  }

  delete() {
    this.#hasCodeRepository = undefined;
    super.delete();
  }

  static clone(instance) {
    return new PracticalHomework(
      instance.subject,
      instance.taskNumber,
      instance.isCompleted,
      instance.hasCodeRepository
    );
  }
}
