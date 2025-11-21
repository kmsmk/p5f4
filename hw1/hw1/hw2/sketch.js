function setup() {
  createCanvas(600, 400); // 제출 규격
  noLoop();
}

function draw() {
  // 색 팔레트
  const SKY   = '#8fd0f1';
  const GRASS = '#7CFF00';
  const SUN   = '#FFD200';
  const CLOUD = '#FFFFFF';
  const SKIN  = '#F8D2BA';
  const HAIR  = '#2E3237';
  const EYE   = '#1A1A1A';
  const SHIRT = '#616971';
  const MOUTH = '#E4493D';

  // 하늘
  background(SKY);

  // 초록 들판 (지평선)
  noStroke();
  fill(GRASS);
  rect(0, 260, width, 140);

  // 해
  fill(SUN);
  circle(540, 60, 80);

  // 구름
  fill(CLOUD);
  ellipse(120, 60, 120, 70);
  ellipse(165, 75, 70, 45);
  ellipse(400, 78, 120, 60);

  // --- 캐릭터 중심 좌표 ---
  const cx = width / 2;

  // 얼굴(둥근 사각형)
  noStroke();
  fill(SKIN);
  rect(cx - 70, 150, 140, 110, 16);

  // 귀 (얼굴 옆)
  fill(SKIN);
  rect(cx - 92, 170, 26, 38, 8);
  rect(cx + 66, 170, 26, 38, 8);

  // 머리 (이제 얼굴 위에 덮이도록 순서 변경)
  fill(HAIR);
  rect(cx - 90, 115, 180, 52, 12); // y: 115
  // 앞머리 디테일
  stroke('#1f2327');
  strokeWeight(3);
  for (let x = cx - 70; x <= cx + 70; x += 16) {
    line(x, 133, x, 157);
  }

  // 눈
  noStroke();
  fill(EYE);
  rect(cx - 38, 182, 24, 18, 4);
  rect(cx + 14, 182, 24, 18, 4);

  // 입
  noFill();
  stroke(MOUTH);
  strokeWeight(5);
  arc(cx, 208, 36, 22, 0, PI);

  // 목
  noStroke();
  fill(SKIN);
  rect(cx - 18, 260, 36, 38);

  // 상의
  fill(SHIRT);
  rect(cx - 95, 290, 190, 90, 10);
}

// 클릭 시 PNG 저장
function mousePressed() {
  saveCanvas('pop_portrait_hair_front_600x400', 'png');
}
