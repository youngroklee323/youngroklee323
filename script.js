const catControllers = document.querySelectorAll("#catController");

const uxuiTab = document.querySelector("#uxui");
const industrialTab = document.querySelector("#industrial");

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
    console.log(catController);

    // 탭선택 액티브 부여
    // uxui 컨트롤
    if (catController.classList.contains("uxui")) {
      uxuiTab.classList.add("active");
    } else {
      uxuiTab.classList.remove("active");
    }
    // industrial 컨트롤
    if (catController.classList.contains("industrial")) {
      industrialTab.classList.add("active");
    } else {
      industrialTab.classList.remove("active");
    }
  });
});
