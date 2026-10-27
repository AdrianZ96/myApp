import './style.css'


const countDbEp = document.querySelector("#ldb");
const watchedDbEp = document.querySelector("#wdb");
const countbtn = document.querySelector("#adddb")
const revWatchEp = document.querySelector("#redb")

const dbEp = 153;
let watchedDb = 144;
countDbEp.textContent = dbEp - watchedDb;
watchedDbEp.textContent = watchedDb;

countbtn.addEventListener(("click"), () => {
  if(watchedDb >= dbEp){
    return
  }
  const suma = watchedDb + 1;
  watchedDb = suma;
  const lastEp = dbEp - suma;

  watchedDbEp.textContent = suma;
  countDbEp.textContent = lastEp;
  console.log(suma)
} )
revWatchEp.addEventListener(("click"),() => {
  if(watchedDb <= 0){
  return 
}
const wynik = watchedDb - 1;
watchedDb = wynik;
const lastEp = dbEp - wynik;
watchedDbEp.textContent = wynik;
countDbEp.textContent = lastEp;

}) 