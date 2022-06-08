const bar = () => console.log('bar')

const baz = () =>  setTimeout(() => {console.log('baz')},5000,console.log("he"))

const foo = () => {
  console.log('foo')
  setTimeout(bar, 200)
  baz()
 
}

foo()