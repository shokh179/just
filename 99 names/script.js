const namesOfAllah = [
    { name: "Ar-Rohmān", meaning: "Mehribon — Ulugʻ neʼmatlarni beruvchi. Bu sifat faqat Allohga xos boʻlib, barchaga kofirga ham, moʻminga ham mehribon va neʼmat beruvchi maʼnosini anglatadi. Rahmon sifatini Alloh taolodan boshqa hech kimga nisbatan ishlatib boʻlmaydi." },
    { name: "Ar-Rohīm", meaning: "Rahmli — „Rohiym“ latif neʼmatlarni beruvchi. Bu sifat xosroq boʻlib, qiyomat kuni faqat moʻminlarga rahm qiluvchi maʼnosini anglatadi. Va Allohdan oʻzgalarga, jumladan Paygʻambar alayhissalomga nisbatan ham ishlatiladi." },
    { name: "Al-Malik", meaning: "Podsho — Barcha narsani egasi. Malik  haqiqiy egadir.Undan oʻzga ega yoqdir.Shuning uchun bandalar faqat unga qul boʻladilar. Hech vaqtda bir qulga ikki xoʻjayin boʻlmaydi.Shuning uchun insonlar oʻzlariga oʻxshagan insonlarga emas, balki yagona yaratganga, haqiqiy Malikka qul boʻlish lozim." },
    { name: "Al-Quddūs", meaning: "Muqaddas, nuqsonlardan holi — Barcha ayblardan xoli, noloyiq sifatlardan munazzah, mutlaq muqaddaslik va mutlaq poklik Allohning oʻzigagina hosdir." },
    { name: "As-Salām", meaning: "Ofat va balolardan salomat. Qutqarayotgan — „Salom“-barcha nuqsonlardan salomat. Shuningdek, tinchlik, xotirjamlik va rohat beruvchi degani. Alloh „Salom“ sifati ila bandalarga tinchlik, omonlik, xotirjamlik ato qiladi." },
    { name: "Al-Mu’min", meaning: "Moʻmin-iymon va omonlik beruvchi." },
    { name: "Al-Muhaymin", meaning: "Hamma narsani qamrab oluvchi.Alloh bandalarning barcha holatlariga guvoh boʻlib turadi.Undan hech narsa maxfiy qolmaydi." },
    { name: "Al-Aziz", meaning: "Izzat va qudrat sohibi. Ulugʻ — Barchaning ustidan gʻolib. Undan biror narsa gʻolib kelolmaydi." },
    { name: "Al-Jabbār", meaning: "	Bandalarini ishlarini isloh etuvchi. Jabbor — oliy qadar ulugʻ, Uning oldida hamma oʻzini xor tutadi." },
    { name: "Al-Mutakabbir", meaning: "Kattalik yarashuvchi zot. Mutakabbir — kibriyosi va ulugʻligi behad. Uning oldida boshqalar qul boʻlib turadi." },
    { name: "Al-Xoliq", meaning: "Yaratuvchi, vujudga keltiruvchi. Xoliq — Asli va oʻxshashi yoq narsaning oʻlchovini mos qilib yaratuvchi. Xoliq mutloq vujudga keltiruvchidir." },
    { name: "Al-Bāri'", meaning: "	Bori' — Yoʻqdan paydo qiluvchi, vujudga keltiruvchi, yaratuvchi. Bori’ning vujudga keltirishida tafovut yoqdir." },
    { name: "Al-Musovvir", meaning: "Maxluqot va mavjudotlarga suvrat va shakl beruvchi." },
    { name: "Al-Gʻoffār", meaning: "Gʻaffor — Koʻplab magʻfirat qilib, bandalarning aybini oʻz fazli ila kechib yuboruvchi. bandalarning aybu nuqsonlari va gunohu maʼsiyatlarini fosh qilmay yopib turuvchi." },
    { name: "Al-Qohhār", meaning: "Barcha maxluqotlarni qabzasida tutib, ularni oʻz hukmiga yuritib va qudrati ila boʻysundirib turuvchi." },
    { name: "Al-Vahhāb", meaning: "Oʻz neʼmatlarini tekin ato etuvchi." },
    { name: "Ar-Rozzāq", meaning: "Barcha tirik mavjudot rizqini yetkazib beruvchi." },
    { name: "Al-Fattāh", meaning: "Hukm etuvchi, rahmat hazinalarini ochuvchi." },
    { name: "Al-'Alīm", meaning: "Biluvchi, dono, ilm sohibi. Boʻlgan va boʻladigan, avvalgi va oxirgi, zohir va botin narsalarning barchasini biluvchi." },
    { name: "Al-Qobiz", meaning: "Kimlarningdir rizqini qiyuvchi, ruhlarni qabz etuvchi (oluvchi)." },
    { name: "Al-Bāsit", meaning: "Kimlargadir keng rizq beruvchi, ruh baxsh etuvchi." },
    { name: "Al-Xofiz", meaning: "Kofirlar martabasini tushiruvchi." },
    { name: "Ar-Rofi'", meaning: "Moʻminlar martabasini koʻtaruvchi." },
    { name: "Al-Mu’izz", meaning: "Kimlarnidir aziz, qadrli etuvchi." },
    { name: "Al-Muzill", meaning: "Kimlarnidur xoru zalil qiluvchi." },
    { name: "As-Samī", meaning: "Maxfiy va oshkora gap va sharpalarni, xatto dildan oʻtganini ham, eshituvchi." },
    { name: "Al-Basīr", meaning: "Hamma maxfiy va oshkora narsalarni koʻruvchi." },
    { name: "Al-Hakam", meaning: "Qatʼiy hukm etuvchi." },
    { name: "Al-`Adl", meaning: "Oʻta adolatli." },
    { name: "Al-Latīf", meaning: "Bandalariga sezdirmay oʻz lutfu ehsonini yetkasizb beruvchi." },
    { name: "Al-Xobīr", meaning: "Hamma maxfiy va oshkora ishlardan xabardor" },
    { name: "Al-Halīm", meaning: "Jazolashga shoshmaydigan, hilm bilan yaxshilik qilib turuvchi." },
    { name: "Al-'Azīm", meaning: "Azamatli va ulugʻ zot. Aql tasavvur qila olmaydigan darajada azamatli va ulugʻ." },
    { name: "Al-Gʻofūr", meaning: "Koʻp magʻfirat qiluvchi." },
    { name: "Ash-Shakūr", meaning: "Oʻz amaliga koʻp savob beruvchi." },
    { name: "Al-'Aliyy", meaning: "Martabasi oliylikda benihoya." },
    { name: "Al-Kabīr", meaning: "Hammadan ulugʻ." },
    { name: "Al-Hafīz", meaning: "Har bir narsani komil muhofaza qiluvchi." },
    { name: "Al-Muqīt", meaning: "Barcha moddiy va ruhiy rizqlarni yaratuvchi." },
    { name: "An-Hasīb", meaning: "Hisob qiluvchi, kifoya qiluvchi." },
    { name: "Al-Jalīl", meaning: "Sifatlarida ulugʻlikka ega." },
    { name: "Al-Karīm", meaning: "Saxovatli va karami keng. Birov soʻramasa ham, hech bir evaz olmasdan, narsalarni ato qiluvchi. Qarama-qarshilikdan pok. Karamli ishlar va xislatlar sohibi." },
    { name: "Ar-Roqīb", meaning: "Doimo kuzatib turuvchi. Raqiyb — hech bir zararni ham qoʻymay tekshirib turuvchi." },
    { name: "Al-Mujīb", meaning: "Duolarni ijobat qiluvchi." },
    { name: "Al-Vāsi'", meaning: "Keng va keng qamrovli zotdir" },
    { name: "Al-Hakīm", meaning: "Dono, Har bir narsani hikmat ila qiluvchi" },
    { name: "Al-Vadūd", meaning: "Barchaga yaxshilikni ravo ko'ruvchi, Bandalarini sevuvchi" },
    { name: "Al-Majīd", meaning: "Eng ulugʻvor" },
    { name: "Al-Bā'is", meaning: "Yuboruvchi. Xalqlarga payg'ambarlar, kishilarga himmat yuboruvchi" },
    { name: "Ash-Shahīd", meaning: "Har bir narsaga hoziru nozir. Barchaga shohidlik beruvchi." },
    { name:  "Al-Haqq", meaning: "Oʻzgarmas sobit zot. Haqni yuzaga chiqaruvchi zot." },
    { name:  "Al-Vakīl", meaning: "Barchaning ishi unga topshirilgan zot." },
    { name:  "Al-Qovviyy", meaning: "Quvvatli zot." },
    { name:  "Al-Matīn", meaning: "Matonatli zot." },
    { name:  "Al-Valiyy", meaning: "Himoya qiluvchi doʻst, homiy va yordamchi." },
    { name: "Al-Hamīd", meaning: "Barcha maqtovlar ila maqtalgan zot." },
    { name: "Al-Muhsi", meaning: "Barcha narsaning hisobini olgan zot." },
    { name: "Al-Mubdi", meaning: "Barcha narsalarni avval boshdan bor qilgan zot." },
    { name: "Al-Mu'īd", meaning: "Yoʻq boʻlgan narsalarni yana qaytadan bor qiluvchi." },
    { name: "Al-Muhyi", meaning: "Tiriltiruvchi. U zot oʻliklarni tiriltiruvchidir va bu ismga ularni tiriltirishdan oldin sazovordir. Uni ularni oʻlik boʻlganlaridan keyin jon kiritib tirik qilganidan keyin tiriltiruvchi, deb atalganidek, ularni xalq qilishdan oldin, ularga hayot berishidan oldin ham, tiriltiruvchi, deyilaveradi. Xuddi, xaloyiqni xalq qilishidan oldin Xoliq boʻlganidek." },
    { name: "Al-Mumīt", meaning: "Oʻldirivchi. Barcha jonzotlarning jonini oluvchi." },
    { name: "Al-Hayy", meaning: "Tirik. U tirikdir, oʻlmas. Yaʼni, Allohning hayoti abadiydir, oʻlim ila yoʻq boʻlmas. Shuningdek, Allohning hayoti azaliydir, oldindan yoʻq boʻlgan emas." },
    { name: "Al-Qoyyūm", meaning: "Oʻz oʻzidan qoim boʻlgan va boshqalarni qoim qilgan zot." },
    { name: "Al-Vājid", meaning: "Topuvchi. Xohlagan narsasini topuvchi. Bu ishda birov Uni toʻsa olmaydi." },
    { name: "Al-Mājid", meaning: "Majdu sharaf sohibi boʻlgan zot." },
    { name: "Al-Vāhid", meaning: "Yagona. Bita. Boʻlinmas. U zot oʻz zotida ham, sifatlarida ham va ishlarida ham birdir." },
    { name: "Al-Aḥad", meaning: "Yagona, Boʻlinmas." },
    { name: "As-Somad", meaning: "Somad sifati koʻp maʼnolarni oʻz ichiga oladi:- itoat qilingan ulugʻ-Usiz hech bir ish bitmaydi.- hech kimga hojati tushmaydi, barchaning hojati Unga tushadi.- butun maxluqot bitib tugasa ham, Oʻzi doim boqiydir va hokazo." },
    { name: "Al-Qodir", meaning: "Cheksiz qudrat sohibi. U zot har bir narsaga qodirdir. har bir ish unga osondir." },
    { name: "Al-Muqtadir", meaning: "Juda ham qudratli." },
    { name: "Al-Muqoddim", meaning: "Oldinga suruvchi. U zot xohlagan shaxs va narsani xohlaganidan oldinga suradi." },
    { name: "Al-Mu’axxir", meaning: "Orqaga suruvchi. U zot xohlagan shaxs va narsani xohlaganidan orqaga suradi." },
    { name: "Al-'Avval", meaning: "„Avval“ — U hamma narsadan avval, yaʼni, barcha mavjudotlar yoʻqligida Alloh bor edi. Mavjudotlarni „Avval“ sifatiga ega boʻlgan Alloh yaratdi. Yaʼni, Alloh vujudga kelishining boshlanishi yoʻqdir." },
    { name: "Al-'Axir", meaning: "„Oxir“ — U hamma narsa yoʻq boʻlib ketganda ham Oʻzi qoladi." },
    { name: "Az-Zohir", meaning: "„Zohir“ — Uning mavjudligi oshkor, ochiq-oydindir. U hamma narsadan zohir-ustundir." },
    { name: "Al-Bātin", meaning: "\"Botin\" — U koʻzga koʻrinmaydi. Hammadan pinhon-maxfiy narsalarni bilib turuvchidir." },
    { name: "Al-Vāli", meaning: "Har bir narsaga voliy — ega boʻlgan zot." },
    { name: "Al-Mutā'ali", meaning: "Nuqsonlardan yuqori turuvchi zot." },
    { name: "Al-Barr", meaning: "Ulugʻ yaxshilik qiluvchi." },
    { name: "At-Tavvāb", meaning: "Bandalarni tavbaga yoʻllovchi va ularning tavbasini koʻplab qabul qiluvchi zot." },
    { name: "Al-Muntaqim", meaning: "Zolim va osiylardan intiqom oluvchi." },
    { name: "Al-Afuvv", meaning: "Afv qiluvchi." },
    { name: "Ar-Roʻūf", meaning: "Oʻta shafqatli va mehribon." },
    { name: "Mālik-ul-Mulk", meaning: "Mulk egasi. Bu dunyodagi ishlarni oʻzi xohlaganicha qiladi. Uning qazosini qaytaradigan va hukmini oʻzgartiradigan yoʻq." },
    { name: "Zūl-Jalāli val’ikrom", meaning: "Sharaf va kamol egasi. Karam va ikrom egasi." },
    { name: "Al-Muqsiţ", meaning: "Oʻz adolati ila mazlumlarga nusrat va zolimlarga jazo beruvchi." },
    { name: "Al-Jāmi", meaning: "Jamlovchi. Barcha haqiqatlarni jamlovchi. Odamlarni qiyomat kuni jamlovchi." },
    { name: "Al-Gʻoni", meaning: "Behojat. Uning hech kim va hech narsaga hojati tushmaydi." },
    { name: "Al-Mugʻni", meaning: "Behojat qiluvchi. U zot Oʻz bandalaridan qay birini xohlasa behojat qilib qoʻyadi." },
    { name: "Al-Māni'", meaning: "Man qiluvchi." },
    { name: "Az-Zorr", meaning: "Zarar qiluvchi. Zararli narsalarni ham yaratuvchi." },
    { name: "An-Nāfi", meaning: "Manfaat beruvchi." },
    { name: "An-Nūr", meaning: "Oʻz-oʻzi ila zohir boʻlgan va oʻzgalarni zohir qilgan." },
    { name: "Al-Hādi", meaning: "Hidoyat qiluvchi. U zot Oʻz fazli ila xohlagan kimsani hidoyat qiladi. Yaʼni, Alloh kimni toʻgʻri yoʻlga hidoyat qilsa, albatta, Oʻz xohishi va fazli ila hidoyat qiladi." },
    { name: "Al-Badī", meaning: "Oʻxshashi yoʻq narsalarni keltiruvchi." },
    { name: "Al-Bāqi", meaning: "Boqiy qoluvchi. U doimiy bordir, unga foniylik oriz boʻlmas." },
    { name: "Al-Vāris", meaning: "Muvjudotlar yoʻq boʻlganda ham boqiy qoluvchi zot." },
    { name: "Ar-Roshīd", meaning: "Toʻgʻri yoʻlga irshod qiluvchi." },
    { name: "As-Sobur", meaning: "Oʻta sabrli. Osiylarni azoblashga shoshilmaydi." }

    // Add more names and meanings as needed
  ];
  
 
  
 
  const questionContainer = document.getElementById("question-container");
  const resultContainer = document.getElementById("result-container");
  const nextButton = document.getElementById("next-button");
  let currentIndex = 0;
  let score = 0;
  
  function showQuestion() {
    const { name, meaning } = namesOfAllah[currentIndex];
    document.getElementById("question").textContent = `What does "${name}" mean?`;
  
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
  
    // Shuffle the namesOfAllah array
    const shuffledNames = namesOfAllah.sort(() => Math.random() - 0.5);
  
    // Select the first three shuffled names and add the correct answer
    const options = shuffledNames.slice(0, 3).map(item => item.meaning);
    options.push(meaning); // Add the correct answer
  
    // Shuffle the options array again to randomize the order
    options.sort(() => Math.random() - 0.5);
  
    options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option, meaning));
      optionsContainer.appendChild(button);
    });
  }


  function checkAnswer(userAnswer, correctAnswer) {
    const buttons = document.querySelectorAll("#options-container button");
    buttons.forEach(button => {
      button.disabled = true; // Disable all buttons
      if (button.textContent === correctAnswer) {
        button.classList.add("correct"); // Add the correct class to the correct answer button
      } else{ button.classList.add("incorrect"); }
    });
    // Display result message
    if (userAnswer === correctAnswer) {
      score++;
      resultContainer.textContent = "Correct!";
    } else {
      resultContainer.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
    }
  }
  
  
  // function checkAnswer(userAnswer, correctAnswer) {
  //   if (userAnswer === correctAnswer) {
  //     score++;
  //     resultContainer.textContent = "Correct!";
  //   } else {
  //     resultContainer.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
  //   }
  //   // Disable buttons after answering
  //   document.querySelectorAll("#options-container button").forEach(button => {
  //     button.disabled = true;
  //   });
  // }



  
  function nextQuestion() {
    if (currentIndex < namesOfAllah.length - 1) {
      currentIndex++;
      showQuestion();
    } else {
      showResult();
      nextButton.disabled = true;
    }
  }
  
  function showResult() {
    resultContainer.textContent = `You scored ${score} out of ${namesOfAllah.length}.`;
  }
  
  nextButton.addEventListener("click", nextQuestion);
  
  // Display the first question
  showQuestion();
  