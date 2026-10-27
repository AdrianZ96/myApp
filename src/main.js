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

const epDbz = 291;
let watchedDbz = 0;

const addEp = document.querySelector("#adddbz");
const undoEp = document.querySelector("#redbz");
const watchedZ = document.querySelector("#wdbz");
const lastsZ = document.querySelector("#ldbz");

addEp.addEventListener("click", () =>{
  if(watchedDbz >= epDbz){
    return
  }
  const suma = watchedDbz + 1;
  watchedDbz = suma;
  const lastsEp = epDbz - suma;
  watchedZ.textContent = suma;
  lastsZ.textContent = lastsEp;
})

undoEp.addEventListener("click" , () =>{
  if( watchedDbz <=0){
    return
  }
  const wynik = watchedDbz - 1;
  watchedDbz = wynik;
  const lasts = epDbz - wynik;
  watchedZ.textContent = wynik;
  lastsZ.textContent = lasts;

})
const epDbgt = 64;
let watchedDbgt = 0;

const addGT = document.querySelector("#adddbgt");
const undoGT = document.querySelector("#redbgt");
const watchedGT = document.querySelector("#wdbgt");
const lastsGT = document.querySelector("#ldbgt");

addGT.addEventListener("click", () =>{
  if(watchedDbgt >= epDbgt){
    return
  }
  const suma = watchedDbgt + 1;
  watchedDbgt = suma;
  const lastsEp = epDbgt - suma;
  watchedGT.textContent = suma;
  lastsGT.textContent = lastsEp;
})

undoGT.addEventListener("click" , () =>{
  if( watchedDbgt <=0){
    return
  }
  const wynik = watchedDbgt - 1;
  watchedDbgt = wynik;
  const lasts = epDbgt - wynik;
  watchedGT.textContent = wynik;
  lastsGT.textContent = lasts;
  
})