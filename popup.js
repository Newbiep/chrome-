const changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', data => {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
})

changeColor.onclick = (element) => {
  const color = element.target.value;
  console.log(color);
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: `document.body.style.backgroundColor = "${color}";` }
    )
  })
}
