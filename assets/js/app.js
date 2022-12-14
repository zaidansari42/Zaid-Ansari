'strict mode';

// Making the counter function
const countStart = function () {
  // 5 seconds
  const duration = 5000;

  const statsList = document.querySelectorAll('.stats-number');

  statsList.forEach((stat, index) => {
    // Grabbing the data-value attribute from HTML
    const num = parseInt(stat.getAttribute('data-val'), 10);

    //   Calculating Avrage Time for smooth time to cover
    const time = duration / num;

    //   Initializing count
    let count = 0;

    const countIncrement = setInterval(() => {
      // Only for the Lines of Code because of 'K'
      if (index === 0) {
        count++;
        stat.textContent = count + 'K+';
      } else {
        count++;
        stat.textContent = count.toLocaleString('en-us') + '+';
      }

      if (count === num) {
        clearInterval(countIncrement);
      }
    }, time);
  });
};

const statsObserver = function () {
  // Grabbing the Stats Section
  const stats = document.querySelector('#stats');

  // Creating the Observer API
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Starting the count
          countStart();

          // To not reoccur again after loading
          observer.unobserve(stats);
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-70px',
    }
  );

  // Observing the Stat
  observer.observe(stats);
};
statsObserver();
