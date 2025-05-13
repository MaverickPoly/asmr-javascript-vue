<script setup>

import {ref} from "vue";

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
      <h3>hi</h3>
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
      <button @click="startQuiz">Restart</button>
    </div>
  </div>
</template>

<style scoped>


</style>
