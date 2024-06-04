// 示例题库数据
const questions = [{
    status: '未完成',
    title: '在特殊网络中的统计订货策略',
    id: 3067,
    passRate: '67.8%',
    difficulty: '中等',
    frequency: '29'
  },
  {
    status: '完成',
    title: '两数之和',
    id: 24788,
    passRate: '53.7%',
    difficulty: '简单',
    frequency: '68'
  },
  {
    status: '未完成',
    title: '两数相加',
    id: 13762,
    passRate: '43.7%',
    difficulty: '中等',
    frequency: '48'
  },
  // 添加更多题目
];

// 获取表格主体
const questionTable = document.getElementById('question-table');

// 动态生成问题数据
const renderQuestions = (questions) => {
  questionTable.innerHTML = '';
  questions.forEach(question => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${question.status}</td>
      <td>${question.title}</td>
      <td>${question.id}</td>
      <td>${question.passRate}</td>
      <td>${question.difficulty}</td>
      <td>${question.frequency}</td>
    `;
    questionTable.appendChild(row);
  });
};

// 页面加载时渲染题库数据
document.addEventListener('DOMContentLoaded', () => {
  renderQuestions(questions);
});