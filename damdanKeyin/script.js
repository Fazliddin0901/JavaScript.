// const Person = function(ismi, yoshi){
//   this.ismi = ismi;
//   this.yoshi = yoshi;

// }

// Person.prototype.hisobla = function(){
//     return 2022 - this.yoshi;
// }

// console.log(Person.prototype)

// const umid = new Person("UMID", 20);

//// 2 -USUL

// class Person {
//   constructor(ism, yosh){
//     this.ism = ism;
//     this.yosh = yosh;
//   }

//   hisobla(){
//     return 2022 - this.yosh;
//   }

// }

// const umid = new Person("Umid", 20);

// umid.hisobla();

// 3 - USUL

// const me = {
//   hisobla(){
//   return 2022 - this.yosh;
//   }
//   boshla(ism, yosh){
//   this.ism = ism;
//   this.yosh = yosh;
//   }
// }
// let umid = Object.create(me);
// umid.yosh = 22;
// umid.hisobla();

// class Person {
//   constructor(ism, yosh) {
//     this.ism = ism;
//     this.yosh = yosh;
//   }
//   hisobla() {
//     return 2022 - this.yosh;
//   }
// }

// class Talaba extends Person {
//   constructor(ism, yosh, fakultet, guruh) {
//     super(ism, yosh);
//     this.fakultet = fakultet;
//     this.guruh = guruh;
//   }
// }

// const men = new Talaba("Fazliddin", "20", "AX", "721-20");
// console.log(men.hisobla());

// const Person = {
//   hisobla() {
//     return 2022 - this.yosh;
//   },
//   qosh(ism, yosh) {
//     this.ism = ism;
//     this.yosh = yosh;
//   },
// };
// const bala = Object.create(Person);
// bala.qosh = function (ism, yosh, fakultet) {
//   Person.qosh.call(this, ism, yosh, fakultet);
//   this.fakultet = fakultet;
// };
// const fazliddin = Object.create(bala);
// fazliddin.qosh("Fazliddin", 20, "AX");
// console.log(fazliddin);

// class Univercity {
//   #nomi;
//   constructor(nomi, soni) {
//     this.#nomi = nomi;
//     this.soni = soni;
//     this.pinCode = 1111;
//   }
//   _parolUzgar(val) {
//     this._pinCode = "1" + val + "1";
//   }
//   _parolUchun(val) {
//     let a = "5" + val + "5";
//     this._parolUzgar(a);
//   }
//   #nomiUzgar(val) {
//     this.#nomi = val;
//   }
//   nomiUzgarniUzgartir(val) {
//     this.#nomiUzgar(val);
//   }
// }
// const tatu = new Univercity("TATU", 10000);
// tatu.nomiUzgarniUzgartir(2222);
// console.log(tatu);

// class Fakultet extends Univercity {
//   constructor(nomi, soni, dekani) {
//     super(nomi, soni);
//     this.dekani = dekani;
//   }
// }
// const ax = new Fakultet("AX", 9, "AKANG");
// ax.nomiUzgarniUzgartir("TIF");
// console.log(ax);
