const catControllers = document.querySelectorAll("#catController");

catControllers.forEach((catController) => {
  catController.addEventListener("click", (e) => {
    // 클래스 초기화
    catControllers.forEach((c) => {
      c.classList.remove("active");
    });
    // // 클래스 부여
    if (!catController.classList.contains("active")) {
      catController.classList.add("active");
    }
  });
});
