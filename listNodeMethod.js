/**
 * 链表数据结构定义
 * @param val
 * @constructor
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 打印链表
 * @param head
 */
function printListNode (head) {
  let list = []
  while (head) {
    list.push(head.val)
    head = head.next
  }
  console.log(list.join('->'))
}

function listNodeToArray (head) {
  let array = []
  while (head) {
    array.push(head.val)
    head = head.next
  }
  return array
}

function  arrayToListNode(array) {
  if(!array || !array.length) {
    return null
  }
  
  let node
  let head = new ListNode(array[0])
  let pnode = head  //pnode变量用来保存前一个节点
  
  for(let i = 1; i < array.length; i++) {
    node = new ListNode(array[i])
    pnode.next = node   //将前一个节点的next指向当前节点
    pnode = node   //将node赋值给pnode
  }
  
  return head
}

function makeListNode (...list) {
  let listTmp = list.map(val => (new ListNode(val)))
  listTmp.forEach((node, index) => {
    node.next = listTmp[index+1] || null
  })
  return listTmp[0]
}

module.exports = {
  ListNode,
  printListNode,
  listNodeToArray,
  arrayToListNode,
  makeListNode
}