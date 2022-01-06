$("#cutSizeCalc").submit(function (event) {
  event.preventDefault();

  let dividerSize = $("#dividerSize").val();
  let retainerSize = $("#retainerSize").val();
  let voHeight = $("#voHeight").val();
  let voWidth = $("#voWidth").val();

  let topLabel = $("#topLabel option:selected").text();
  let rightLabel = $("#rightLabel option:selected").text();
  let bottomLabel = $("#bottomLabel option:selected").text();
  let leftLabel = $("#leftLabel option:selected").text();

  let topValue = topLabel == "Divider" ? dividerSize / 2 : retainerSize;
  let rightValue = rightLabel == "Divider" ? dividerSize / 2 : retainerSize;
  let bottomValue = bottomLabel == "Divider" ? dividerSize / 2 : retainerSize;
  let leftValue = leftLabel == "Divider" ? dividerSize / 2 : retainerSize;

  $("#widthCutSize").text(
    parseFloat(voWidth) +
      parseFloat(rightValue) +
      parseFloat(leftValue) -
      0.25 +
      '"'
  );
  $("#heightCutSize").text(
    parseFloat(voHeight) +
      parseFloat(topValue) +
      parseFloat(bottomValue) -
      0.25 +
      '"'
  );
});
