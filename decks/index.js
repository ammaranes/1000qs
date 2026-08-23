import { chapter01 } from './chapter_01.js';
import { chapter02 } from './chapter_02.js';
import { chapter03 } from './chapter_03.js';
import { chapter04 } from './chapter_04.js';
import { chapter05 } from './chapter_05.js';
import { chapter06 } from './chapter_06.js';
import { chapter07 } from './chapter_07.js';
import { chapter08 } from './chapter_08.js';
import { chapter09 } from './chapter_09.js';
import { chapter10 } from './chapter_10.js';
import { chapter11 } from './chapter_11.js';
import { chapter12 } from './chapter_12.js';
import { chapter13 } from './chapter_13.js';
import { chapter14 } from './chapter_14.js';
import { chapter15 } from './chapter_15.js';
import { chapter16 } from './chapter_16.js';
import { chapter17 } from './chapter_17.js';
import { chapter18 } from './chapter_18.js';
import { chapter19 } from './chapter_19.js';
import { chapter20 } from './chapter_20.js';
import { chapter21 } from './chapter_21.js';

export const allChapters = [
  { id: 1, title: "Perioperative Evaluation and Management", questions: chapter01 },
  { id: 2, title: "Airway Management", questions: chapter02 },
  { id: 3, title: "Anesthesia Machine", questions: chapter03 },
  { id: 4, title: "Patient Monitoring", questions: chapter04 },
  { id: 5, title: "Fluid Management and Blood Transfusion", questions: chapter05 },
  { id: 6, title: "Anesthetic Pharmacology", questions: chapter06 },
  { id: 7, title: "Spinal and Epidural Anesthesia", questions: chapter07 },
  { id: 8, title: "Peripheral Nerve Blocks", questions: chapter08 },
  { id: 9, title: "Pain Management", questions: chapter09 },
  { id: 10, title: "Orthopedic Anesthesia", questions: chapter10 },
  { id: 11, title: "Cardiovascular Anesthesia", questions: chapter11 },
  { id: 12, title: "Thoracic Anesthesia", questions: chapter12 },
  { id: 13, title: "Neuroanesthesia", questions: chapter13 },
  { id: 14, title: "Gastrointestinal, Liver, and Renal Diseases", questions: chapter14 },
  { id: 15, title: "Endocrine Diseases", questions: chapter15 },
  { id: 16, title: "Ophthalmic, Ear, Nose, and Throat Surgery", questions: chapter16 },
  { id: 17, title: "Obstetric Anesthesia", questions: chapter17 },
  { id: 18, title: "Pediatric Anesthesia", questions: chapter18 },
  { id: 19, title: "Critical Care", questions: chapter19 },
  { id: 20, title: "Postoperative Anesthesia Care", questions: chapter20 },
  { id: 21, title: "Miscellaneous Topics", questions: chapter21 }
];

export const allQuestions = allChapters.flatMap(ch => ch.questions);