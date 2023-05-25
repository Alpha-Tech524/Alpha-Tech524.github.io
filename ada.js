const URL = "https://teachablemachine.withgoogle.com/models/H2oD61ZYa/";
// cont URL = "https://teachablemachine.withgoogle.com/models/RsTNo8Rqa/";

const resultContainer = document.getElementById("result");
const startButton = document.getElementById("start-button");

let noCar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rqixlU9EuewzpdjB7HkYlG0uUJKZtnI3kg&usqp=CAU"

let sev23 = "https://cdn3.iconfinder.com/data/icons/online-and-web-filled-1/64/number_count_track_twenty_three-512.png"

let sev14 = "https://pro2-bar-s3-cdn-cf6.myportfolio.com/08664089978e60a61d69850b82f112b0/a9d4e99c-31db-406d-aa90-de855e8c20f6_rw_1200.gif?h=2f177b1d58c8882d9a7d769858cef638"

let normalImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMskXkkfqnxFn8slrtQdsEOqknsxsMbAM6Q&usqp=CAU"

let badBatter = "https://www.lifewire.com/thmb/8PsT7ySAKdDMlXZaYdj3GibykLk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/why-car-battery-keeps-dying-4125506-a2fbb3e180be4fcfb8bdf42bd8ae1bb6.png";

let waterPump = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzr2k57z2uQ3vJ0V7vq05kP4Z49PUhTkUpDI5o8cYWdQ&s";

let brakePad = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAugMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAEDBQYCB//EADwQAAEDAwIEAwUFBwMFAAAAAAEAAgMEERIFIRMxUWEGQXEUIoGRoSMyUrHBFUJigtHh8AdDcjNTc5Lx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABgRAQEBAQEAAAAAAAAAAAAAAAABEQIh/9oADAMBAAIRAxEAPwD7ihCEAhCEAhCEAhCEAhCrmmjhblK9jG9XOsEFiEmdQi5xtllHWOMkH0PI/BK1utspY83Q4tHN00gYGjqeZ+immNZC5en8Vl9Qxj4mSNLw13ADnYg/vA23A89h1XSxSNlaHMc1zSLgtN7ppj2hCFQIQhAIQhAIQhAIQhBF0XCryRkEFl1K52r8TMpp6iB1HMXwPs7fYtu25B9HsNv4h3XmTxhpohL4OLI7HJrTGWgiwPM+o/zdB0iFzs/iyhp3VUczXtmgkcwN8nm5aLHuQfRaumV8Wo0MVXAHBkl7BwsQQSD9Qd0DqS1XUqTSaKStr52wwRjdx8z0HUnomXPDWlznBrQLkk7AL51q1OfFOoCs1Jr/ANmxG1JRuNg4f9x/c+Q8hz8wg57XP9SvEGtVMlL4WpJKenBx4jIeJN6k7tb6WPqt7wnBqWleH3ajq9TUVeqVTuMPaZXP4TTsxgy+7e+RA69k46OKmoXshjEcTGGzIm2sAOQAUztmqJY2SEh7/wDa2xj8x/6tHpeyz0sacc1bqcTpXVTmU9y0CEXc63M9AL8uarbR0zDlwhI7nnN9o7132HwAXhtKaYtdQP4Lmj7l/cd6/wBUTV+LLcAmqJtw72Hnvfpt/wDFls1vyuV7bqvsJcDLEGu3xeeR62Hl1/y/OahPqrmfeZCwmxs6wHrbe3xWcaeqiJeJw6Qb4YgNPYnmPVB2nhWrfU1uocSSQlha3Eklpte7h69fP5Lfq6ymo4TNVzxwxj96RwAv09V8soKzWZ66VuluFPFYWew3eLDdtr2BBBtldu/y7Lws6nnnlFZFI/VIQCZqglzy09L/AHfRoA81uVixptr6yte39n0bmQ33nrAYwR/Cz7xPriPVJVegV00UsUeqvYyV0pkcWlzpGvysCb7Y5WFgNmt6LoBZTdVHPRaNrDaqU/th0VMHgxMjAJLcRe9xt71+V7j6bdFDJBSxRTTOmka0B0jubz5lXXUoBCEIBCEIFMkZJcP7qc0DGfQqQ89UtmpzQMZnqsqv/aNHUur6J0lXCWgS0JIvt+9ETydbm07G21jzdzUh10GPqGsQahRRNoJhJFNcyOAIIANsSDuDe4IO4sQeaz/PulNWppZNTqtR05zY6l7sXxuP2c7W+6A7odtnDcX8wLLzDqlO+mmmmvA6nblURS7Oi9evnYjY+SB0i9wfPms/Ua8BsNTBKC+FjqWd7DljctLSfg0/ElcXqh8ReK3H2KB8Wmm+AdIGMd6nm4ntcBedH0TW/DFSaoQtnpnswqKdouyRnS4JII5h2OylmrK7lusTxUv2ojdKMvfcbNDR5m3ne426JbTJHSl3tLAKiR187/8AU/UEf5ZJacaSva72SqkxbYiKTEFgvsHeZFze9/PfveWSMmDbljw9tiB9032Kw23YGOqYnDKMkbOJ3PxH90M0iiBBkiMxHISuJaP5eXzuvcjTQiOamaS2LZzL/ebff4p6QMxZLCbxSNyYeygrYxrGhsbWtaOTWiwCyakt0XWBqEJcyOoYWktI9117nn3sfT0Wu73WZvIaz8TjYfNZ9bqdFCGk4SuY67biwB63P6AqjrNOqjV0FNUkYmWNr7dLhM5LnfDerx1VKyB9myDZg7bkN35ED5/NbmS3HNddTdUZKclRdkpyVOSMkF2SMlTkpyQZeakPS2aOIgZzUh6WzQHoGs1IfuB3SuakP3G/mgxITlE134hl891heKtMOrez09Ng2rAc5r3G1wOTXbbtvYkH8PkbFblOC2Bg/CMflsqXwR1FRKZMrsLWjFxHlf8AUILaaKanp4IKosM7IWZuYQWk2sbW7gqzIZBvNx5NG5PoEnV1EenxtbEz33nZo8+5WJ+1XjUmS+0vifjgXRkfdPlewtz/AC5oYc13RHulNdp7XU2ownK2OPE28x1sfjexUU+ow1unR1YbhMwgOZa9nC3u/MtI/hPYrYpwzhZxue4O3Lnm7ie5K56tZT6Zrz/ancGjr27yj/Zlbyf6bkHqHOvtdSxZXV6dUmroxJKAHC7Xg/n8kmytqYmOotNa6YB5c12N+GOlzsN1WWzU9E2Csu2njBfJ7IHPdPve4NrBpv1P0Tunsjq42ulia2it9nCw2Dh+J3X47LDbM9lmqpS6rq3yyciym+1cOxefdb8wU1Bo/vZNa2Dq4fayEd3O2HwB9U3NXwwnCkhDmj7pedh6ALJ1eqqaulfA+uNJxCGsfHZtj2B2ugprC6hr2NMrpXFwY9zpN3sN/kQb7i3JdrpUkztPhNS4ulsQSebhc2J7kWPxWFp8dPproY9WpoBUhrWR11smSHpkd2Hsed9iSSugz6rUjFpjNGaWzU5rSGc0ZpfNGaBnNGaXzRkgyOIpzSnEU8Tugb4iM+6VzU5oGs1PESvERxEFDRZ8jPNshHz3H0IVYc1lRLk5rQ5rXbm3UfoF7ebVN/KRv1H9vyVDjU0j3Sw1Aja54yeGAvaOxPIDb4BBjeJnA1lKMiGSRkNcLEE5A232Pl6hZGoztlvG1sbHxREkMFmi1uQHZ359l1Wq6Y2uoRCSDLGcmOdtc+d/W65U6cYAYZPaRK4i+ZBc7mLA8yFmyunHc5jovDczpaRzH/eZYH13H6BK+NIg/TS+28T2uHxOP6q7QOHQMfHXcdrn2LWxR5Pd6k7Dmf7KrxTJnpM4s5uT2hrXncDMEX72H0WmK5bwd4r1LSNX/ZWYqKCWUgQTEnh339w+XpyXeV+tCZuFNBIxh3dmQLnptcr5f4fh4/jmlYG5ATEu9GsN/wAl9ZZTQMdk2JoPVTDXI+Ia3UqdrOHJwY3t5sbY/Mrh6zWJ6mpa6KSUsg3sSbyO2Bcd79h/cr6H44/6EF+/6L5TA61RMR5Xt8wpZMNfZPAmtzatp40/UaeMiOLH3veyb5BwPy9At4R1WnEGkzqqTzp3OvJF/wCNx+8P4XH0PILgv9OqsO1aSPisceAcgxpte+255nY7L6NxE4ts9LMqt+tUMfs5kn4ftIJiza4XAte9xta4vey9DWdPMjGNrIHZhxDg8EWFr3PIcx9eirqqalrC01VPHMWghvEbe17f0HyCpl0vTZpDJNQUz3nm50YJO1j9NlpDztUoW2yracXYJBeVu7TyPp3XulroKsy+zyB4ik4byOWVgdj57EclnS6Xp88hfPSxSXibFi8XaGtJIAH8xTNLBT0jXNpYWRNc7JwYLXPL8gEGhmjNLZozQY3EU8RKZqeIga4nVSHrGrmahJUxSUVQyNjWkPY+9nGxtyHkbFVNbrQa4e00pcXXu5psPd5Dbrf6/AN/iI4iwKyLVJHOFPUxtbckFxLf3QANh1yJ9QrGDVTIeJPT24jS0suLDK7gbjf3dvj8g2Zi4s9z77Tdt+v+bfFWNc2WPIC7Xi1nfkfyWa6aqY84QRyR+REmLvkRb6qIdRbA+08M8cbzzLMg138t7A/n6oHmyCmBZK4hrb4OPmB5ev58+qsMzQyMl0Y4lsY87uIPYbfVVwz0uoQytieyeIExyAbgEWuD33Cyp6fUtLu/TIYayE/7chxmH8/73x39UG08tYMiBe3zXIeKtTigjJkIc2E5EfjkPIf19eyV1HxFrT3GNunvpjyN2PLvhtss+k8MarrtQ19aJIKcc3yMxsOjW9e/1QXf6YadJLW1WrTi4aDE134nu3cfy+a+jJfT6KDTqKKjpWBkMQs0fqe6YQcd49qAzAE7RxF5+v8ARfMaBr5JMGsyfJZoANrm97BdZ491IVEsrWEniOxb/wARz/T5pHwBp5rNdie4XjpvtHHyuOX1t9UHa+ENBr6GeOqr8KdkTXCOmZY7uFi5xHn6m/puuw4iV4nRGakmQNZqeIleIjNUN8Tujid0rmp4iBrPup4ndK8RHEQY3ERxEsHqc0DOfdSH7WSuanNA1n3QH90tmgPQNB6C4EEO3BFiOqWzRmg0KSqbF9lKbNJ92Tr/AMu/fz9eeh2WBncWVtPVy04DWEOjG2Djy9D5enL0QbVyhZztZpY2ZVAkiHmcC4fMX+tkrP4t0CFhc7UojbyaC4/IBBtrnvFutxabRvhbIBK8e9bm0Hy9T5D4rn9Y/wBR43Aw6JTPLjsJ5xa3drf6/JYNHoera9OKjUnSQwudcvlvkf8Ai39T9UGO8VesVpNNBJK93utYwXxH+eZ2X0rwhpH7F0zGYD2qY5ykG9ujfh+qZ0+lp9Opm09JGGMHTm7uT5lNZoGs+6nid0pmpD0DXE7qeIlM1PEQNcRTxErxFPEQNZozSuaM0GTmjNUXKkEoL80Zqi5UglBfmpzS9ypBKC/NTml7lTcoGM0Zpe5U5FAxxO6plp6ac3np4ZD1ewFeQ4qblB6hp6aA3hp4oz1YwBXcRUXKLlAxmpzS9ypBKC/NTml7lSCUDMZLnhtxubC6kh7bEg2PI2SzXuY9rmmzhuCr3Vc5JPEI5bDyQXxQSysc5o2BtubdP6ry1r3BxtiGi5LtgqG1MwcRxXdea9e11F78V1+qD3dwNiCD3CnIjmD8l4FVUc+M9VcRx3PMoP/Z";

let oil = "data:image/jpeg;base64,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";

let img = document.getElementById("img");

startButton.addEventListener("click", () => {
  console.log("Button was clicked")
  startButton.innerHTML = "loading..."
  init();
})

const classes = {

}

async function createModel() {
  const checkpointURL = URL + "model.json"; // model topology
  const metadataURL = URL + "metadata.json"; // model metadata

  const recognizer = speechCommands.create(
    "BROWSER_FFT", // fourier transform type, not useful to change
    undefined, // speech commands vocabulary feature, not useful for your models
    checkpointURL,
    metadataURL);

  // check that model and metadata are loaded via HTTPS requests.
  await recognizer.ensureModelLoaded();

  return recognizer;
}

async function init() {
  const recognizer = await createModel();
  const classLabels = recognizer.wordLabels(); // get class labels
  const labelContainer = document.getElementById("label-container");
  for (let i = 0; i < 6; i++) {
    labelContainer.appendChild(document.createElement("div"))
  }

  startButton.style.display = "none"

  // listen() takes two arguments:
  // 1. A callback function that is invoked anytime a word is recognized.
  // 2. A configuration object with adjustable fields
  recognizer.listen(result => {
    const scores = result.scores; // probability of prediction for each class
    // render the probability scores per class

    const maxScore = Math.max(...scores);
    const maxIndex = scores.indexOf(maxScore);
    resultContainer.classList.remove(...resultContainer.classList);
    classLabels[0] = "Normal"

    resultContainer.innerHTML = classLabels[maxIndex] + "(" + maxScore.toFixed(2) + ")"

    resultContainer.classList.add(classes[classLabels[maxIndex]]);

    for (let i = 0; i < 6; i++) {
      const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);

      let currentNode = labelContainer.childNodes[i]
      currentNode.innerHTML = classPrediction;
      currentNode.style.background = "transparent"
//       console.log(classLabels[maxIndex])

      if (scores[i] === maxScore) {
        currentNode.style.background = "maroon"
      }
      if (classLabels[maxIndex] == 'Cannot find car') {
        img.src = noCar
      } else if (classLabels[maxIndex] === "Spark Plug 1, 4") {
        img.src = sev14
      } else if (classLabels[maxIndex] === 'Spark Plug 2, 3') {
        img.src = sev23
      } else if(classLabels[maxIndex] === 'Bad battery') {
        img.src = badBatter
      } else if(classLabels[maxIndex] === 'Brake pad') {
        img.src = brakePad
      } else if(classLabels[maxIndex] === 'Engine without Oil') {
        img.src = oil
      } else if(classLabels[maxIndex] === 'Water pump'){
        img.src = waterPump
      } else {
        img.src = normalImg
      }
    }
  }, {
    includeSpectrogram: true, // in case listen should return result.spectrogram
    probabilityThreshold: 0.75,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
  })
};

  // Stop the recognition in 5 seconds.
  // setTimeout(() => recognizer.stopListening(), 5000);
