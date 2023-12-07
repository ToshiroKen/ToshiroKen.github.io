/*Bar Chart*/
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Year Level", "General Average", { role: "style" } ],
        ["Grade 7", 83, "#000c47"],
        ["Grade 8", 81, "#001370"],
        ["Grade 9", 82, "#001685"],
        ["Grade 10", 83, "#021b9c"],
        ["Grade 11", 90, "#001eb8"],
        ["Grade 12", 88, "#0027ed"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "My General Average since JHS and SHS days",
        legend: {position: "none"},
        hAxis: {gridlines: {color:'gray'}}
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart"));
      chart.draw(view, options);
  }

