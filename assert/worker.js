let d
let hrefList = []
let infoTable = []

function getName(doc){
  return doc.querySelector('#w4 .kv-child-table td').innerText
}

function getPhone(doc) {
  var phone = doc.querySelectorAll('.kv-attribute');
  var [td] = Array.from(phone).filter(d => d.innerText.length === 11 && /\d/g.test(d.innerText));
  return td.innerText
}

function run(iframe) {
  infoTable.push({
      '姓名': getPhone(iframe.contentDocument),
      '电话': getName(iframe.contentDocument)
    }
  )
}

function print () {
  console.table(infoTable)
}

function createIframe (href) {
  document.body.removeChild(d)
  d = document.createElement('iframe');
  d.src = href;
  d.onload = function() {
    run(d)
    if (hrefList.length) {
      createIframe(hrefList.shift())
    } else {
      print()
    }
  }
  document.body.appendChild(d)
}

function queryUrlList () {
  const aList = document.querySelectorAll('tr>td a')
  hrefList = Array.from(aList).filter(doc => /view\?id=/.test(doc.href)).map(doc => doc.href)
  createIframe(hrefList.shift())
}