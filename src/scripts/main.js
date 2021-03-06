const color = () => {
  let result = "#";
  let HexNum = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += HexNum[Math.floor(Math.random() * 16)];
  }
  console.log(result);
  return result;
};

const toDoList = () => {
  let userInput = document.querySelector("#userText").value;
  console.log(userInput);

  if (userInput == "") {
    return alert("Write something please");
  }

  let newList = document.createElement("li");
  let text = document.createTextNode(userInput);
  newList.appendChild(text);
  document.querySelector(".result").appendChild(newList);
  document.querySelector("#userText").value = "";

  let oddItems = document.querySelectorAll("li:nth-child(odd)");
  console.log(oddItems);
  oddItems.forEach(({ style: item }) => {
    item.color = color();
  });

  let span = document.createElement("span");
  let text2 = document.createTextNode(
    dateStart.getFullYear(),
    dateStart.getMonth(),
    dateStart.getDate()
  );
  span.className = "close";
  span.appendChild(text2);
  document.body.appendChild(span);

  // let listAll = document.querySelectorAll("li");
  // listAll.forEach((item) => {
  //   item.appendChild(span);
  // });
};
