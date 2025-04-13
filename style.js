
setTimeout(() => {
    Swal.fire({
        title: "مرحبا بك !",
        text: "❤️نتمنى لك جولة سعيدة",
        icon: "success"
      });
}, 4800);  


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = +counter.getAttribute("data-target"); // target number
  let count = 0;

  const increment = Math.ceil(target / 200); // smooth speed
  const interval = setInterval(() => {
    count += increment;

    if (count >= target) {
      counter.innerText = target;
      clearInterval(interval);
    } else {
      counter.innerText = count;
    }
  }, 20); 
});


    