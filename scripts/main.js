const lyConts = document.querySelectorAll(".ly_cont");
console.log(lyConts);
const cb = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("入った！");
      // observer.unobserve(entry.target);
      entry.target.classList.add("inview");
    } else {
      console.log("出た！");
      entry.target.classList.remove("inview");
    }
  });

  // console.log(entries);
  // console.log('Intersection')
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const io = new IntersectionObserver(cb, options);
lyConts.forEach((lyCont) => io.observe(lyCont));

// heroHeadingのアニメーション

TweenMax.set(".char", {
  x: "-500px",
  opacity: "0",
  rotation: "-45",
});

TweenMax.set(".el_arrow", {
  opacity: "0",
});

const arrowAnimate = () => {
	TweenMax.to(
		".el_arrow",
		0.5,
		{
			rotation: '360',
			opacity: '1'
		}
	)
};

const stagger = () => {
	TweenMax.staggerTo(
		".char",
		0.5,
		{
			opacity: "1",
			x: 0,
			rotation: 0,
			// onComplete: arrowAnimate
		},
		0.2
		);
	}

	setTimeout(stagger,1000)
	setTimeout(arrowAnimate,2500)
