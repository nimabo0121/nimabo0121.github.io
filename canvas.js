const ctx = document.getElementById("radarChart").getContext("2d");

const isMobile = window.matchMedia("(max-width: 375px)").matches;

const radarChart = new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["HTML", "CSS/SCSS", "JavaScript", "MySQL", "PHP", "Node.js", "React"],
    datasets: [
      {
        label: "技能掌握程度",
        data: [80, 85, 70, 70, 75, 65, 70], // 掌握度 1-100
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        pointLabels: {
          color: "#fff",
          font: {
            size: isMobile ? 10 : 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#fff",
          font: {
            size: isMobile ? 12 : 16,
          },
        },
      },
    },
  },
});
