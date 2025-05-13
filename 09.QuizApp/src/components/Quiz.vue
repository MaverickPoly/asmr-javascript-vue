<script setup>

import {onMounted, ref} from "vue";

const quiz = [
  {
    question: "What is the capital of China?",
    options: ["Beijing", "Shanghai", "Guanjou", "Urumchi"],
    answer: 0,
  },
  {
    question: "Where Vue JS is Used?",
    options: ["Backend", "Frontend", "Game Dev", "Mobile Dev"],
    answer: 1,
  },
  {
    question: "Who is the founder of Vue JS",
    options: ["Bjarne Stroustrup", "Mark Zuck", "Evan You", "Guido Van Rossum"],
    answer: 2,
  },
  {
    question: "When Vue JS was founded?",
    options: ["2011", "2009", "2013", "2014"],
    answer: 3,
  },
]

const currentQuestion = ref(null);  // Index
const answeredQuestions = ref([]); // Store the indexes of choices

const startTime = ref(null); // Time when quiz started
const currentTime = ref(null); // Current Time: Date.now() - startTime
const timeInterval = ref(null); // Interval that updated currentTime

const quizStart = ref(true); // Has Quiz started?
const quizEnd = ref(false); // Has Quiz Ended?

const quizResult = ref(null); // Results after finishing the quiz

/*
{correct, timeSpent}
*/

const startQuiz = () => {
  currentQuestion.value = 0;
  startTime.value = Date.now();
  quizStart.value = false;
  quizEnd.value = false;
  answeredQuestions.value = [];
  timeInterval.value = setInterval(updateTimer, 1000);
}

const updateTimer = () => {
  currentTime.value = Date.now() - startTime.value;
}

const finishQuiz = () => {
  // Set current question to be null
  currentQuestion.value = null;
  // Clear Interval for timeUpdate
  clearInterval(timeInterval.value);
  // Set Quiz end
  quizEnd.value = true;

  // Calculate the total
  let correct = 0;
  for (let i = 0; i < quiz.length; i++) {
    if (quiz[i].answer === answeredQuestions.value[i]) {
      correct++;
    }
  }
  // Calculate the time spent on quiz
  const timeSpent = Math.floor((Date.now() - startTime.value) / 1000);
  // Set the quiz Results
  quizResult.value = {correct, timeSpent};

}

const nextQuestion = () => {
  if (answeredQuestions.value.length !== currentQuestion.value + 1) {
    alert("Please select a value!");
    return;
  }
  // There is a next question
  if (currentQuestion.value < quiz.length - 1) {
    currentQuestion.value++;
  }
  // The quiz has finished
  else {
    finishQuiz();
  }
}

</script>

<template>
  <div class="container">
    <!-- Quiz Start -->
    <div v-if="quizStart" class="start">
      <h2 class="heading">Welcome to this quiz!</h2>
      <p class="description">Answer the quiz questions and see the results at the end...</p>
      <button class="start-btn" @click="startQuiz">Start</button>
    </div>

    <!--  Quiz  -->
    <div v-if="currentQuestion !== null" class="quiz">
      <div class="top-info">
        <h4 class="currentQuestion">Question {{ currentQuestion + 1 }}/{{ quiz.length }}</h4>
        <h4 class="currentTime">{{ Math.floor(currentTime / 1000) }} seconds</h4>
      </div>

      <div class="question-container">
        <h3 class="question">
          {{ quiz[currentQuestion].question }}
        </h3>

        <div class="options">
          <div v-for="(option, index)  in quiz[currentQuestion].options" :key="index" class="option">
            <input
                :id="'option-' + index"
                v-model="answeredQuestions[currentQuestion]"
                :name="'question'-currentQuestion"
                :value="index" type="radio"
            />
            <label :for="'option-' + index">{{ option }}</label>
          </div>
        </div>

        <button class="next-btn" @click="nextQuestion">Next</button>
      </div>
    </div>

    <!--  Quiz End  -->
    <div v-if="quizEnd" class="end">
      <h3>Quiz finished!</h3>
      <div class="row">
        <h4>Correct answers: {{ quizResult.correct }}</h4>
        <h4>Time spent: {{ quizResult.timeSpent }} seconds</h4>
      </div>
      <button class="restart-btn" @click="startQuiz">Restart</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 700px;
  margin: 40px auto;
}

.start {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;

  h2 {
    font-size: 48px;
    font-weight: 800;
    background: linear-gradient(to right, blue, #bebe00);
    color: transparent;
    background-clip: text;
    margin: 0;
  }

  p {
    font-size: 18px;
    color: #333;
  }

  .start-btn {
    font-size: 18px;
    border: none;
    padding: 10px 28px;
    border-radius: 8px;
    background: #7f00dc;
    color: white;
  }

  .start-btn:hover {
    background: #5b009f;
  }
}

.quiz {
  .top-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .currentQuestion {
      font-size: 26px;
      padding: 4px 18px;
      border-radius: 90px;
      border: 1px solid #aaa;
    }

    .currentTime {
      font-size: 22px;
    }
  }

  .question-container {
    background: #f8f8f8;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;

    .question {
      font-size: 26px;
    }

    .options {
      display: flex;
      align-items: start;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 30px;

      .option {
        display: flex;
        gap: 10px;
        align-items: center;

        font-size: 24px;
      }
    }

    .next-btn {
      padding: 12px 30px;
      border: 1px solid #be5e1c;
      font-size: 18px;
      background: white;
      border-radius: 30px;
      transition: all 0.1s ease-in;
    }

    .next-btn:hover {
      background: #fff0e7;
    }
  }
}

.end {
  display: flex;
  background: #f1f1f1;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #bbb;

  h3 {
    font-size: 40px;
    font-weight: 700;
    color: darkgreen;
    margin-bottom: 20px;
  }

  .row {
    margin: 0;
    display: flex;
    gap: 22px;
    align-items: center;

    h4 {
      font-size: 20px;
    }
  }

  button {
    padding: 8px 24px;
    border-radius: 12px;
    font-size: 17px;
    border: 1px solid #999;
  }
}
</style>


<!--
JS: 95
HTML: 50
CSS: 140
-->