import router from "./index";

const whitelist = ["/login"];

router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem("isLogined") == "true") {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    if (whitelist.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});
