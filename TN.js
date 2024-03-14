function* generateTriangularNumbers() {
    let n = 1;
    let triangularNumber = 0;
    
    while (true) {
      triangularNumber += n;
      yield triangularNumber;
      n++;
    }
  }
  
  const triangularGenerator = generateTriangularNumbers();
  
  console.log(triangularGenerator.next().value); // 1
  console.log(triangularGenerator.next().value); // 3
  console.log(triangularGenerator.next().value); // 6
  console.log(triangularGenerator.next().value); // 10
  