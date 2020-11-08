// import {
//   animationEnter,
//   animationLeave,
//   revealProject,
//   leaveToProject,
//   leaveFromProject
// } from "./animations";
export const pageTransition = () => {
  barba.use(barbaCss);

  // global hook (after every entry for example)
  // barba.hooks.enter(() => {
  //   console.log("enter");
  //   window.scrollTo(0, 0);
  // });
  // end //

  barba.init({
    transitions: [
      {
        name: "home",
        sync: true,
        to: {
          namespace: ["home"]
        },
        //   once() {},
        leave() {},
        enter() {}
      },
      {
        name: "page",
        sync: true,
        from: {
          namespace: ["home"]
        },
        //   once() {},
        leave() {},
        enter() {}
      }
    ]
  });
};
