import React, { useState, useEffect } from 'react';
import { allChapters, allQuestions } from './data';
import { CheckCircle2, XCircle, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

export default function App() {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(() => JSON.parse(localStorage.getItem('qbank_1000_answers') || '{}'));
  const [bookmarks, setBookmarks] = useState(() => JSON.parse(localStorage.getItem('qbank_1000_bookmarks') || '[]'));
  const [showExplanation, setShowExplanation] = useState(false);

  const activePool = selectedChapter === 0 
    ? allQuestions 
    : allChapters.find(c => c.id === selectedChapter)?.questions || [];

  const currentQ = activePool[currentIndex] || activePool[0];

  useEffect(() => {
    localStorage.setItem('qbank_1000_answers', JSON.stringify(userAnswers));
  }, [userAnswers]);

  useEffect(() => {
    localStorage.setItem('qbank_1000_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const handleSelectOption = (key) => {
    if (!currentQ) return;
    const qKey = `${currentQ.chapter}_${currentQ.id}`;
    if (userAnswers[qKey]) return;

    setUserAnswers(prev => ({
      ...prev,
      [qKey]: {
        selected: key,
        isCorrect: key === currentQ.correctAnswer
      }
    }));
    setShowExplanation(true);
  };

  const toggleBookmark = () => {
    if (!currentQ) return;
    const qKey = `${currentQ.chapter}_${currentQ.id}`;
    setBookmarks(prev => 
      prev.includes(qKey) ? prev.filter(k => k !== qKey) : [...prev, qKey]
    );
  };

  const qKey = currentQ ? `${currentQ.chapter}_${currentQ.id}` : '';
  const currentAnswer = userAnswers[qKey];
  const isBookmarked = bookmarks.includes(qKey);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="bg-blue-600 text-white font-black text-sm px-2.5 py-1 rounded">1000 Qs</span>
          <h1 className="text-lg font-bold tracking-tight">Anesthesia Review Question Bank</h1>
        </div>
        
        <select 
          value={selectedChapter} 
          onChange={(e) => {
            setSelectedChapter(Number(e.target.value));
            setCurrentIndex(0);
            setShowExplanation(false);
          }}
          className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value={0}>All Chapters (1,002 Qs)</option>
          {allChapters.map(ch => (
            <option key={ch.id} value={ch.id}>Chapter {ch.id}: {ch.title} ({ch.questions.length} Qs)</option>
          ))}
        </select>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-6 flex flex-col justify-between">
        {currentQ ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 border-b border-slate-800 pb-3">
              <span>Chapter {currentQ.chapter}: {currentQ.chapterTitle}</span>
              <div className="flex items-center gap-4">
                <span>Question {currentIndex + 1} of {activePool.length}</span>
                <button onClick={toggleBookmark} className="hover:text-amber-400 transition-colors">
                  <Bookmark className={clsx("w-4 h-4", isBookmarked && "fill-amber-400 text-amber-400")} />
                </button>
              </div>
            </div>

            <div className="text-lg font-medium leading-relaxed text-slate-100">
              {currentQ.id}. {currentQ.stem}
            </div>

            {currentQ.image && (
              <div className="my-4 p-2 bg-slate-950 rounded-xl border border-slate-800 flex justify-center">
                <img src={currentQ.image} alt="Question figure" className="max-h-80 object-contain rounded" />
              </div>
            )}

            <div className="space-y-3 pt-2">
              {Object.entries(currentQ.options).map(([key, val]) => {
                const isSelected = currentAnswer?.selected === key;
                const isTarget = currentQ.correctAnswer === key;
                
                let btnStyle = "bg-slate-800/80 border-slate-700 hover:bg-slate-800 text-slate-200";
                if (currentAnswer) {
                  if (isTarget) btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200";
                  else if (isSelected) btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200";
                  else btnStyle = "bg-slate-900/40 border-slate-800 text-slate-500 opacity-60";
                }

                return (
                  <button
                    key={key}
                    disabled={!!currentAnswer}
                    onClick={() => handleSelectOption(key)}
                    className={clsx(
                      "w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4",
                      btnStyle
                    )}
                  >
                    <span className="font-bold text-sm px-2 py-0.5 rounded bg-slate-700/50 border border-slate-600/40">
                      {key}
                    </span>
                    <span className="text-sm font-normal flex-1 pt-0.5">{val}</span>
                  </button>
                );
              })}
            </div>

            {(currentAnswer || showExplanation) && (
              <div className="mt-6 p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 font-bold text-sm">
                  {currentAnswer?.isCorrect ? (
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-5 h-5" /> Correct: Option {currentQ.correctAnswer}
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1.5">
                      <XCircle className="w-5 h-5" /> Incorrect. Correct Answer: Option {currentQ.correctAnswer}
                    </span>
                  )}
                </div>
                <div className="text-sm leading-relaxed text-slate-300">
                  {currentQ.explanation}
                </div>

                {currentQ.explanationImages && (
                  <div className="space-y-3 pt-2">
                    {currentQ.explanationImages.map((imgSrc, idx) => (
                      <div key={idx} className="p-2 bg-slate-900 rounded-lg border border-slate-800 flex justify-center">
                        <img src={imgSrc} alt="Explanation figure" className="max-h-72 object-contain rounded" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : null}

        <footer className="flex items-center justify-between border-t border-slate-800 pt-6 mt-8">
          <button
            disabled={currentIndex === 0}
            onClick={() => {
              setCurrentIndex(prev => prev - 1);
              setShowExplanation(false);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <button
            disabled={currentIndex === activePool.length - 1}
            onClick={() => {
              setCurrentIndex(prev => prev + 1);
              setShowExplanation(false);
            }}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold transition-colors"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </footer>
      </main>
    </div>
  );
}