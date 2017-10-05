const Nod = require('./node.js');

const Linked List = function(){
  let root = new Node (undefined,null);
  let length = 0;
  let lastnode = root;

  function has(node){
    let start = root;
    for(let r=0; r<length;r++){
      if(start.getValue()==node.getValue()){
        return true;
      }
      else{
        start.getNext();
      }
    }
    return false;
  }

  function add(node){
    lastnode.setNext(node);
    lastnode = node;
  }

  function remove(node){
    let temp = new Node(undefined,null);
    let start = root;
    let last;

    while(start.getValue() !node.getVaue()){
        last = start;
        start = start.getNext();
    }
    temp.setValue(start.getNext().getValue());
  }
}
