function setup() {
  createCanvas(600, 400); // ✅ 600x400 캔버스
  noLoop();
}

function draw() {
  background(200, 230, 255); // 하늘색
  noStroke();

  // X축에 +100 이동 (400→600 중심 맞추기)
  let shift = 100;

  // 몸통 (큰 삼각형)
  fill(255, 180, 200); // 분홍
  triangle(200 + shift, 60, 100 + shift, 300, 300 + shift, 300);

  // 팔 (양쪽에 원)
  fill(255, 180, 200);
  circle(80 + shift, 200, 60);
  circle(320 + shift, 200, 60);

  // 다리 (아래 원 두 개)
  circle(150 + shift, 320, 50);
  circle(250 + shift, 320, 50);

  // 반바지 (연두 사각형)
  fill(150, 220, 120);
  rect(100 + shift, 250, 200, 50);

  // 얼굴 - 눈
  fill(255);
  circle(170 + shift, 160, 40);
  circle(230 + shift, 160, 40);

  // 눈동자
  fill(0);
  circle(170 + shift, 160, 15);
  circle(230 + shift, 160, 15);

  // 입 (직선)
  stroke(150, 0, 0);
  strokeWeight(3);
  line(170 + shift, 190, 230 + shift, 190);
}

// 클릭 시 PNG 저장
function mousePressed() {
  saveCanvas('patrick_centered_600x400', 'png');
}
