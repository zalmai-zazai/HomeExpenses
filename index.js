// 4 peoples each of them spending money and then want to divide that money equally that each one have equal share

// let Zalmai = 10;
// let Akhtar = 20;
// let Alam = 200;
// let Malik = 200;
const zalmaiValue = document.querySelector('#zalmai');
const akhtarValue = document.querySelector('#akhtar');
const alamValue = document.querySelector('#alam');
const malikValue = document.querySelector('#malik');
const zalmaiLabel = document.querySelector('.zalmaiBalance');
const akhtarLabel = document.querySelector('.akhtarBalance');
const alamLabel = document.querySelector('.alamBalance');
const malikLable = document.querySelector('.malikBalance');
const grandTotal = document.querySelector('.total');
const perPerson = document.querySelector('.perPerson');
const calBtn = document.querySelector('.calculate');
const rentBtn = document.querySelector('.rentCalculator');
const perPersonRent = document.querySelector('.perPerson1');
const totalExp = document.querySelector('.total1');
const rentInput = document.querySelector('#rent');
const electricityInput = document.querySelector('#electricity');
const mobileInput = document.querySelector('#mobile');
const otherInput = document.querySelector('#other');

function calculateAll() {
  // console.log(Number(Zalmai.value) + Number(Akhtar.value));
  const Zalmai = Number(zalmaiValue.value);
  const Akhtar = Number(akhtarValue.value);
  const Alam = Number(alamValue.value);
  const Malik = Number(malikValue.value);
  function computeShare(zalmai, akhtar, alam, malik) {
    let total = zalmai + akhtar + alam + malik;
    grandTotal.innerHTML = total + `$`;
    const perPersonShare = total / 4;
    perPerson.innerHTML = perPersonShare + `$`;
    return perPersonShare;
  }

  const perPersonShare = computeShare(Zalmai, Akhtar, Alam, Malik);

  function balance(perPersonShare, person) {
    return perPersonShare - person;
  }
  let ZalmaiBalance = balance(perPersonShare, Zalmai);
  let AkhtarBalance = balance(perPersonShare, Akhtar);
  let AlamBalance = balance(perPersonShare, Alam);
  let MalikBalance = balance(perPersonShare, Malik);

  function balanceIdintifier(personBalance) {
    return personBalance > 0
      ? ` ${personBalance}$ ډالر قرضدار شو `
      : personBalance < 0
      ? ` ${personBalance}$ ډالر پاتی شول `
      : 'Khlas pa Khlas';
  }
  console.log('Zalmai :', balanceIdintifier(ZalmaiBalance));
  console.log('Akhtar :', balanceIdintifier(AkhtarBalance));
  console.log('Alam :', balanceIdintifier(AlamBalance));
  console.log('Malik :', balanceIdintifier(MalikBalance));
  zalmaiLabel.innerHTML = ` زلمی :  ` + balanceIdintifier(ZalmaiBalance);
  akhtarLabel.innerHTML = ` اختر :  ` + balanceIdintifier(AkhtarBalance);
  alamLabel.innerHTML = ` عالم :  ` + balanceIdintifier(AlamBalance);
  malikLable.innerHTML = ` مالک :  ` + balanceIdintifier(MalikBalance);
}

calBtn.addEventListener('click', (e) => {
  calculateAll();
  e.preventDefault();
});

// // all home expenses

function calcul() {
  const homeRent = Number(rentInput.value);
  const mobileBill = Number(mobileInput.value);
  const electricity = Number(electricityInput.value);
  // const rentInput = document.querySelector('#rent');
  // const rentInputNumber = Number(rentInput.value);
  function rentCalculator(homeRent, mobileBill, electricity) {
    const totalExpenses = homeRent + mobileBill + electricity;
    const perPersonRentExp = totalExpenses / 4;
    perPersonRent.innerHTML = perPersonRentExp + `$`;
    totalExp.innerHTML = totalExpenses + `$`;

    return perPersonRentExp;
  }

  rentCalculator(homeRent, mobileBill, electricity);
}

rentBtn.addEventListener('click', (e) => {
  calcul();
});

// console.log(perPersonRentt);
// const today = new Date().getDay();
// const date = today == 0 ? 'Sunday' : today == 1 ? 'Monday' : 'not a day';
// console.log(date);
