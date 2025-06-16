function triangle_1(n) {
  let pattern = "";
  for (i = 0; i < n; i++) {
    for (let s = 0; s < n - i - 1; s++) {
      pattern += " ";
    }
    for (let j = 0; j < i; j++) {
      pattern += "*";
    }

    pattern += "\n";
  }

  return pattern;
}

function triAnglePatternStraight_2(n) {
  let pattern = "";
  for (i = 0; i < n; i++) {
    for (let s = 0; s < n - i - 1; s++) {
      pattern += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += "*";
    }
    for (let s = 0; s < n - i - 1; s++) {
      pattern += " ";
    }
    pattern += "\n";
  }

  return pattern;
}

function triAnglePatternReverse_3(n) {
  let pattern = "";
  for (i = 0; i < n; i++) {
    for (s = 0; s < i; s++) {
      pattern += " ";
    }
    for (j = 0; j < 2 * n - (2 * i + 1); j++) {
      pattern += "*";
    }
    for (s = 0; s < i; s++) {
      pattern += " ";
    }

    pattern += "\n";
  }
  return pattern;
}

function bothTriAngleRev_4(n) {
  let pattern = "";
  for (i = 1; i <= n - 1; i++) {
    for (s = 0; s < i; s++) {
      pattern += " ";
    }

    for (j = 0; j < 2 * n - (2 * i - 1); j++) {
      pattern += "*";
    }

    pattern += "\n";
  }
  for (i = 0; i < n; i++) {
    for (let s = 0; s < n - i; s++) {
      pattern += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  return pattern;
}

function binaryTriangle_5(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    let start;
    if(i%2  === 0) {
      start = 0;
    } else {
      start = 1;
    }
    
    for(j =0 ;j <= i; j++) {
      pattern+=start;
      start = Math.abs(start-1);
      
    }
    pattern+="\n"
  }
  
  return pattern;
}


function print() {
  console.log(triAnglePatternReverse_3(20));
}

print();
