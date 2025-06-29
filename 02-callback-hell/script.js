function stepOne(cb) {
  console.log("Step 1");
  cb();
}

function stepTwo(cb) {
  console.log("Step 2");
  cb();
}

function stepThree(cb) {
  console.log("Step 3");
  cb();
}

//callback nesting — or callback hell
stepOne(() => {
  stepTwo(() => {
    stepThree(() => {
      console.log("All callback called");
    });
  });
});
