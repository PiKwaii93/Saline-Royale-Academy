import React, { useState, useEffect } from "react";
import axios from "axios";
import '../forum.scss';
import { Link } from "react-router-dom";
import "./forum.scss"; // Importez les styles SCSS ici

export default function Forum() {
  const [forumData, setForumData] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const [newQuestion, setNewQuestion] = useState("");

  useEffect(() => {
    axios.get("/api/forum").then((response) => {
      setForumData(response.data);
    });
  }, []);

  const handleSubmit = (newQuestionOrAnswer) => {
    axios.post("/api/forum", newQuestionOrAnswer).then((response) => {
      // Mettez à jour l'état avec les données mises à jour si nécessaire
    });
  };

  return (
    <div className="forum-container">
      <h1 className="forum-title">Forum</h1>
      <ul className="question-list">
        {forumData.map((question) => (
          <li key={question.id} className="question-item">
            <h2 className="question-title">{question.title}</h2>
            <ul className="answer-list">
              {question.answers.map((answer) => (
                <li key={answer.id} className="answer-item">
                  {/* Contenu des réponses */}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleSubmit(newAnswer)}
              className="submit-answer-button"
            >
              Submit Answer
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleSubmit(newQuestion)} className="ask-question-button">
        Ask Question
      </button>
    </div>
  );
}
