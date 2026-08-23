# 📚 1000 Anesthesia Questions | Active Recall Suite

An interactive, multi-device web application designed for anesthesia residents and board candidates. The platform delivers all **1,002 questions and rationales** structured across 21 chapters from standard post-graduate review curricula, featuring integrated clinical diagrams and real-time cloud synchronization.

🌐 **Live Deployment:** [1000qs.ketofoldoc.com](https://1000qs.ketofoldoc.com)  
🏥 **Part of the Suite:** [KetofolDoc Educational Platforms](https://ketofoldoc.com)

---

### ✨ Key Features

* **Complete 21-Chapter Curriculum:** Comprehensive coverage of 1,002 multiple-choice questions spanning all primary anesthesia subspecialties, basic sciences, and clinical management.
* **Integrated Clinical Imaging:** Dynamic rendering of high-yield clinical diagrams, flow-volume loops, capnography waveforms, and echocardiography figures in both question stems and rationale breakdowns.
* **Multi-Device Cloud Synchronization:** Real-time synchronization of question progress, accuracy metrics, and bookmarked questions across iOS, iPadOS, and desktop browsers via Cloud Firestore (`users_1000q`).
* **Authentication Options:** 1-Click Google Sign-In and native Email/Password authentication with password reset support.
* **Flexible Study Modes:** Toggle between sequential chapter review and randomized (Fisher-Yates) question delivery, complete with instantaneous answer reveals and bookmarking.
* **Zero-Build ES6 Architecture:** Native modular JavaScript (`import`/`export`) paired with Tailwind CSS and Lucide icons—requiring no local bundler or build step.

---

### 🗂️ Curriculum Coverage

| Chapter | Topic | Questions |
|---|---|:---:|
| **Ch 01** | Perioperative Evaluation and Management | 102 |
| **Ch 02** | Airway Management *(with Figures)* | 30 |
| **Ch 03** | Anesthesia Equipment & Physics *(with Figures)* | 26 |
| **Ch 04** | Patient Monitoring *(with Figures)* | 50 |
| **Ch 05** | Inhalation Anesthetics *(with Figures)* | 30 |
| **Ch 06** | Intravenous Anesthetics & Sedatives | 101 |
| **Ch 07** | Neuromuscular Blockade | 33 |
| **Ch 08** | Local Anesthetics | 47 |
| **Ch 09** | Autonomic Nervous System & Autonomic Drugs | 30 |
| **Ch 10** | Pain Management | 21 |
| **Ch 11** | Cardiovascular Anesthesia | 76 |
| **Ch 12** | Thoracic Anesthesia | 41 |
| **Ch 13** | Neuroanesthesia | 50 |
| **Ch 14** | Regional Anesthesia | 57 |
| **Ch 15** | Pediatric Anesthesia | 25 |
| **Ch 16** | Obstetric Anesthesia | 47 |
| **Ch 17** | Critical Care & Resuscitation | 58 |
| **Ch 18** | Endocrine & Metabolic Disease | 50 |
| **Ch 19** | Renal & Genitourinary Anesthesia | 50 |
| **Ch 20** | Postoperative Recovery & Complications | 50 |
| **Ch 21** | Special Techniques & Environmental Hazards | 28 |
| **Total** | | **1,002** |

---

### 🛠️ Tech Stack

* **Frontend:** HTML5, Tailwind CSS (via CDN), Vanilla JavaScript (ES6 Modules)
* **Icons:** Lucide Icons
* **Backend & Database:** Firebase Authentication (v9 Compat), Cloud Firestore
* **Domain & DNS:** Porkbun DNS (`1000qs.ketofoldoc.com`)
* **Hosting:** GitHub Pages with Automated SSL/TLS

---

### 📁 Directory Structure

```text
├── index.html                   # Main application shell & ES6 runtime
├── privacy.html                 # Data privacy policy
├── terms.html                   # Educational & medical disclaimer terms
├── logo.svg                     # Vector application glyph
├── decks/
│   ├── index.js                 # Master aggregator exporting allChapters
│   ├── chapter_01.js
│   ├── chapter_02.js
│   └── ... through chapter_21.js
└── images/
    ├── ch02/                    # Flow-volume loops & airway figures
    ├── ch03/                    # Vaporizer & circuit physics schematics
    ├── ch04/                    # Monitoring & capnogram traces
    └── ch05/                    # MAC curves & agent uptake graphs
