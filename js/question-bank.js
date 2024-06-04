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
  {
    status: '未完成',
    title: '机器学习基础',
    id: 4012,
    passRate: '70.2%',
    difficulty: '简单',
    frequency: '35'
  },
  {
    status: '完成',
    title: '深度学习框架使用',
    id: 5023,
    passRate: '60.5%',
    difficulty: '中等',
    frequency: '50'
  },
  {
    status: '未完成',
    title: '自然语言处理基础',
    id: 6024,
    passRate: '55.1%',
    difficulty: '中等',
    frequency: '45'
  },
  {
    status: '完成',
    title: '计算机视觉应用',
    id: 7035,
    passRate: '65.3%',
    difficulty: '简单',
    frequency: '60'
  },
  {
    status: '未完成',
    title: '强化学习概述',
    id: 8046,
    passRate: '50.8%',
    difficulty: '难',
    frequency: '20'
  },
  {
    status: '未完成',
    title: '图像识别技术',
    id: 9057,
    passRate: '58.2%',
    difficulty: '中等',
    frequency: '40'
  },
  {
    status: '完成',
    title: '语音识别基础',
    id: 10068,
    passRate: '62.5%',
    difficulty: '简单',
    frequency: '55'
  },
  {
    status: '未完成',
    title: '神经网络优化',
    id: 11079,
    passRate: '47.3%',
    difficulty: '难',
    frequency: '30'
  },
  {
    status: '完成',
    title: '数据预处理技术',
    id: 12080,
    passRate: '73.9%',
    difficulty: '简单',
    frequency: '65'
  },
  {
    status: '未完成',
    title: '卷积神经网络',
    id: 13091,
    passRate: '52.6%',
    difficulty: '中等',
    frequency: '42'
  },
  {
    status: '完成',
    title: 'RNN与LSTM',
    id: 14092,
    passRate: '68.4%',
    difficulty: '中等',
    frequency: '58'
  },
  {
    status: '未完成',
    title: '集成学习方法',
    id: 15093,
    passRate: '49.9%',
    difficulty: '难',
    frequency: '25'
  },
  {
    status: '完成',
    title: '监督学习与无监督学习',
    id: 16094,
    passRate: '75.2%',
    difficulty: '简单',
    frequency: '70'
  },
  {
    status: '未完成',
    title: '贝叶斯分类器',
    id: 17095,
    passRate: '54.7%',
    difficulty: '中等',
    frequency: '36'
  },
  {
    status: '完成',
    title: 'SVM原理与应用',
    id: 18096,
    passRate: '66.8%',
    difficulty: '中等',
    frequency: '50'
  },
  {
    status: '未完成',
    title: '高斯混合模型',
    id: 19097,
    passRate: '42.9%',
    difficulty: '难',
    frequency: '22'
  },
  {
    status: '完成',
    title: 'K均值聚类算法',
    id: 20098,
    passRate: '71.4%',
    difficulty: '简单',
    frequency: '63'
  }
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