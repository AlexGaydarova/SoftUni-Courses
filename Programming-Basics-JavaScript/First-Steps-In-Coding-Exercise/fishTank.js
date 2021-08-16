function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);
    let obem = lenght * width * height;
    let litri = obem * 0.001;
    let totalLitri = litri * (1 - procent * 0.01);
    console.log(totalLitri);
}
////value of aqarium = 85*75*47=299625 см3
//Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/. 
//1 Литра = 1000 Кубичен сантиметър =>  obem/1000 или obem * 0.001
//общо литри, които ще събере: 299625 * 0.001=299.625литра
//процент:17*0.01=0.17
//литрите, които реално ще трябват : 299.625*(1-0.17) = 248.68875 литра
fishTank(["85","75","47","17"]);
fishTank(["105","77","89","18.5"]);
