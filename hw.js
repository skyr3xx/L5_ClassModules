export class Homework {
  #subject;
  #taskNumber;
  #isCompleted;

  constructor(subject = 'Без предмета', taskNumber = 1, isCompleted = false) {
    this.#subject = subject;
    this.#taskNumber = taskNumber;
    this.#isCompleted = isCompleted;
  }

  get subject() {
    return this.#subject;
  }
  set subject(value) {
    this.#subject = String(value);
  }

  get taskNumber() {
    return this.#taskNumber;
  }
  set taskNumber(value) {
    this.#taskNumber = Number(value);
  }

  get isCompleted() {
    return this.#isCompleted;
  }
  set isCompleted(value) {
    this.#isCompleted = Boolean(value);
  }

  #markAsCompleted() {
    this.#isCompleted = true;
  }

  completeTask() {
    this.#markAsCompleted();
  }

  show() {
    console.log('Домашнее задание:');
    console.log(`Предмет: ${this.#subject}`);
    console.log(`Номер задания: ${this.#taskNumber}`);
    console.log(`Выполнено: ${this.#isCompleted}`);
  }

  delete() {
    this.#subject = undefined;
    this.#taskNumber = undefined;
    this.#isCompleted = undefined;
    Object.setPrototypeOf(this, null);
    console.log('Экземпляр Homework удален.');
  }

  copy() {
    return this;
  }

  static clone(instance) {
    return new Homework(instance.subject, instance.taskNumber, instance.isCompleted);
  }
}
