const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (idx < 5 && e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      console.log(codes[idx].value);
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (idx > 0 && e.key === "Backspace") {
      setTimeout(() => codes[idx - 1].focus(), 10);
    } else if (idx === 5 && e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      setTimeout(() => codes[idx].focus(), 10);
    }
  });
});

// With this logic we keep entering the last digit, which isn't the expected behavior,  we should trigger code submission when we reach the last digit but this is not the point to focus on at the moment...

// Another thing which I find curious if the setTimeout here really works under any circumstance, the duration seems a bit random to me (what about slow speeds for instance).

// I think this mainly involves the event loop, data entry is instantaneous, I would guess that the time we set is adequate for most systems, anyway setting it to 100 does not alter the user experience much...

// To check if you are backspacing an already empty input it will delete the previous input.
// Just feels a bit smoother.

//   else if (e.key === "Backspace") {
//     if (idx > 0 && !codes[idx].value.length > 0) {
//       codes[idx - 1].value = "";
//     }
//     setTimeout(() => codes[idx - 1].focus(), 10);
//   }

// Also if you want to combine the inputs, maybe to auto-submit when all inputs are filled you could use something like this.

// function concatCode (codes) {
//   const codeArr = codes.map(code => code.value);
//   const codeStr = codeArr.toString();
 
//   return codeStr.split(",").join("");
// }
     
// Then just check if the concatenated code equals codes.length.