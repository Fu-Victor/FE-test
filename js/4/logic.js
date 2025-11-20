const manager = createGradeManager();
document.getElementById("add").onclick = () => {
  manager.addStudent({
    name: $("name").value,
    math: Number($("math").value),
    english: Number($("english").value)
  });

  render.show(manager.getAll());
};

$("show-math-avg").onclick = () => {
  render.show(manager.getAverage("math"));
};

$("show-eng-avg").onclick = () => {
  render.show(manager.getAverage("english"));
};

$("show-eng-rank").onclick = () => {
  render.show(manager.getRankList("english"));
};

$("search").oninput = (e) => {
  render.show(manager.search(e.target.value));
};