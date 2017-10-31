'use strict'

const fs = require('fs')

const buffer2json = (buffer) => JSON.parse(buffer.toString())
const p = require('path')


class Employee {
  constructor ( name, title, salary ) {
    this._name = name
    this._title = title
    this._salary = salary
  }

  get name () {
    return this._name
  }

  set name (name) {
    this._name = name
  }

  get title () {
    return this._title
  }

  set title (title) {
    this._title = title
  }
  
  get salary () {
    return this._salary
  }

  set salary (salary) {
    this._salary = salary
  }

  promote (title , salary) {
    this._title = title
    this._salary = salary
    return this
  }

  cb(err, data) {
    if (err) console.log(err)
    obj = buffer2json(data)
  }
  
static parseFromFilePath (fp) {
    
  let data = fs.readFileSync('employee.json')
  let e = JSON.parse(data)
  const output = Object.keys(e).map(function(key){return e[key]})
 
  /*let output
  fs.readFile(fp, (err, data) => {
     if(err){
    console.log("file not found")
  }else{
    const e = buffer2json(data)
    //console.log(Object.entries(e).map(([k, v]) => ({ [k]: v })).reduce((a, b) => Object.assign(a, b), {}))
    output = Object.keys(e).map(function(key){return e[key]})
  
    //output = new Employee(output[0], output[1], output[2])
    /* if(err){
       console.log("file not found")
     }else{
        const e = buffer2json(data)
        console.log(entries(e))
       /*const e = JSON.parse(data.toString)
       //console.log(e)
       /*output =
       Object
        entries(e)
        //.filter(([k, v]) => k.includes('babel'))
        .map(([k, v]) => ({ [k]: v }))
        .reduce((a, b) => Object.assign(a, b), {})
     }
   }) */
   return new Employee(output[0], output[1], output[2]) 
  /* writeFile(writePath, JSON.stringify(o), (err) => {
           if (err) {
            console.log(err)
            } else {
              cb()
            }
          })*/
        
         
}
 
}

let data = fs.readFileSync('employee.json')
let e = JSON.parse(data)
const o = Object.keys(e).map(function(key){return e[key]})
console.log(o)




   

module.exports = {
  Employee
}
