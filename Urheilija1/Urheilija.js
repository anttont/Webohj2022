"use strict"; 

class Person {
    constructor(firstNames,lastName,nickName,yearOfBirth) {
        
        this._firstNames = firstNames;
        this._lastName = lastName;
        this._nickName = nickName;
        this._yearOfBirth = yearOfBirth;
        //console.log("new Person created", this);
    }

    //_firstNames;
    get firstNames() {
        return this._firstNames;
    }
    set firstNames(value) {
        this._firstNames = value;
    }

    //_lastName;
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }

    //_nickName;
    get nickName() {
        return this._nickName;
    }
    set nickName(value) {
        this._nickName = value;
    }

    //_yearOfBirth;
    get yearOfBirth() {
        return this._yearOfBirth;
    }
    set yearOfBirth(value) {
        this._yearOfBirth = value;
    }

}


class  Urheilija extends Person {
    constructor(linkki,paino,laji,saavutukset, firstNames,lastName,nickName,yearOfBirth) {
                super(firstNames,lastName,nickName,yearOfBirth);
                this._linkki = linkki;              
                this._paino = paino; 
                this._laji = laji;
                this._saavutukset = saavutukset;
                //console.log("Uusi urheilija", this);
        
    }

    
     get linkki() {
         return this._linkki;
    }
     set linkki(value) {
         this._linkki = value;
    }

    
     get paino() {
         return this._paino;
    }
     set paino(value) {
         this._paino = value;
    }
 
 

     get laji() {
         return this._laji;
    }
     set laji(value) {
         this._laji = value;
    }
 
  
     get saavutukset() {
         return this._saavutukset;
    }
     set saavutukset(value) {
         this._saavutukset = value;
    }
 
 
 } 
 
 var urheilija3 = new Urheilija(
    "kuvasivusto.net",
    "44kg",
    "seiväshyppy",
    "1 kulta",
    "Henri",
    "Hyppääjä",
    "Heki",
    new Date("2001") 
  );
  console.log(urheilija3);
