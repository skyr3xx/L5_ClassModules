import { PracticalHomework } from './prhw.js';

const homeworks = [
  new PracticalHomework('JavaScript (Модули и Классы)', 5, true, true),
  new PracticalHomework('Базы данных', 2, false, false)
];

homeworks.forEach((hw) => hw.show());
