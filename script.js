function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var destinationList = event.target;
  
    // Check if the drop target is a list
    if (destinationList.classList.contains("list")) {
      destinationList.appendChild(draggedElement);
    }
  }
  