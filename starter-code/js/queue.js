const queueUl = document.querySelector(".list-queue");
const queueInput = document.querySelector(".queue-inputp");
const $warningTopQueue = document.querySelector(
  "#queue-container .warning-top"
);
const $warningBottomQueue = document.querySelector(
  "#queue-container .warning-bottom"
);

const clearQueueInput = () => {
  queueInput.value = "";
};
const addAndEnqueue = () => {
  if (queue.enqueue(queueInput.value) === -1) {
    generateWarningQueue("overflow");
  } else {
    clearQueueInput();
    generateDomlistQueue();
  }
  console.log(queue.display());
};
const takeAndDequeue = () => {
  if (queue.dequeue() === -1) {
    generateWarningQueue("underflow");
  } else {
    generateDomlistQueue();
  }
  console.log(queue.display());
};

const addQueue = document.querySelector(".btn-add-queue");
const dequeue = document.querySelector(".btn-take-dequeue");
const sizeStructure = 10;
const queue = new QueueDataStructure(sizeStructure);
addQueue.addEventListener("click", addAndEnqueue);
dequeue.addEventListener("click", takeAndDequeue);

const generateDomlistQueue = () => {
  $warningTopQueue.style.display = "none";
  $warningBottomQueue.style.display = "none";
  queueUl.innerHTML = "";
  let len = queue.display().length;
  let size = sizeStructure - len;
  queue.display().forEach(item => {
    let li = document.createElement("li");
    li.className = "active";
    li.innerText = item;
    queueUl.appendChild(li);
  });
  for (let i = 0; i < size; i++) {
    let li = document.createElement("li");
    li.className = "inactive";
    li.innerText = `${len + i}`;
    queueUl.appendChild(li);
  }
};
generateDomlistQueue();

// Generate warnings
function generateWarningQueue(type) {
  if (type === "underflow") {
    $warningBottomQueue.style.display = "block";
    $warningBottomQueue.innerText = type;
  } else if (type === "overflow") {
    $warningTopQueue.style.display = "block";
    $warningTopQueue.innerText = type;
  }
}
