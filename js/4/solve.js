/**
 *
 * student 的格式为：
 * {
 *   name: "张三",
 *   math: 100,
 *   english: 90
 * }
 */

function createGradeManager() {
  const students = [];

  return {
    /**
     * 添加学生
     * @param {Object} student
     */
    addStudent(student) {
    },

    /**
     * 获取某一科目的平均分
     * @param {"math"|"english"} subject
     */
    getAverage(subject) {
    },

    /**
     * 获取成绩排名（从高到低）
     * @param {"math"|"english"} subject
     * @returns {Array} 排序后的新数组
     */
    getRankList(subject) {
    },

    /**
     * 搜索学生（按姓名包含）
     * @param {string} keyword
     */
    search(keyword) {
    },

    /**
     * 获取全部学生（返回副本）
     */
    getAll() {
      
    },
  };
}