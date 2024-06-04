// 课程数据示例
const courses = [{
    title: "人工智能入门",
    img: "./img/e1.jpg",
    description: "适合小学学生的人工智能基础课程",
    category: "primary"
  },
  {
    title: "机器学习基础",
    img: "./img/e2.jpg",
    description: "适合小学学生的机器学习入门课程",
    category: "primary"
  },
  {
    title: "Python编程",
    img: "./img/e3.jpg",
    description: "适合小学学生的Python编程课程",
    category: "primary"
  },
  {
    title: "数据科学基础",
    img: "https://via.placeholder.com/150",
    description: "适合初中学生的数据科学入门课程",
    category: "middle"
  },
  {
    title: "深度学习基础",
    img: "https://via.placeholder.com/150",
    description: "适合高中学生的深度学习基础课程",
    category: "high"
  },
  {
    title: "高级机器学习",
    img: "https://via.placeholder.com/150",
    description: "适合大学学生的高级机器学习课程",
    category: "university"
  },
  // 添加更多课程项
];

// 获取课程容器
const courseContainer = document.getElementById('course-container');

// 显示默认分类的小学课程
const showCourses = (category) => {
  courseContainer.innerHTML = '';
  const filteredCourses = courses.filter(course => course.category === category);
  filteredCourses.forEach(course => {
    const courseElement = document.createElement('div');
    courseElement.classList.add('course');
    courseElement.innerHTML = `
          <img src="${course.img}" alt="${course.title}">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
        `;
    courseContainer.appendChild(courseElement);
  });
};

// 默认显示小学课程
showCourses('primary');

// 添加导航栏点击事件
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // 检查是否是题库链接
    if (link.getAttribute('href') === './html/question-bank.html' || link.getAttribute('href') === './html/llm.html') {
      return;
    }
    e.preventDefault();
    // 移除其他链接的active类
    navbarLinks.forEach(navLink => navLink.classList.remove('active'));
    // 为当前点击的链接添加active类
    e.target.classList.add('active');
    // 显示相应的课程
    const category = e.target.getAttribute('href').substring(1);
    showCourses(category);
  });
});