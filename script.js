const card = document.querySelector('.container');

card.addEventListener("mousemove", cardEffect);
card.addEventListener("mouseleave", cardBack);
card.addEventListener("mouseenter", cardEnter);

function cardEffect(event)
{
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeighth;
  const centerX = card.offsetLeft + cardWidth/2;
  const centerY = card.offsetTop + cardHeight/2;
  const positionX = event.clientX - centerX;
  const positionY = event.clientY - centerY;
  
  const rotateX = ((+1)*25*positionY/(cardHeight/2)).toFixed2;
  const rotateY = ((+1)*25*positionX(cardWidth/2)).toFixed2;
  
  card.style.transform = 'rotateX(${RotateX}deg) rotate(${RotateY}deg)';
}

function cardBack(event)
{
  card.style.transform = 'perspective(500px) rotatX(0) rotateY(0)';
  cardTransition();
}

function cardTransition()
{
  clearInterval(card.transitionId);
  card.style.transition = "transform 400ms";
  card.tarnsitionId = setTimeout(() => {
    card.style.transition = '';
  },400);
}

function cardEnter(event)
{
  cardTransition();
}