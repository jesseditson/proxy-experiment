import proxy from './proxy'

var otherView = proxy({
  myProperty: 42
})

var viewModel = proxy({
  foo: 'bar',
  otherView: otherView
})

console.log(viewModel)
// { foo: 'bar', otherView: { myProperty: 42 } }

viewModel.foo = 'something'
// set foo to something

viewModel.newValue = 'anotherThing'
// set newValue to anotherThing

viewModel.arrayValue = []
// set arrayValue to

viewModel.arrayValue.push({ hello: 'world' })
// set 0 to [object Object]
// set length to 1

viewModel.arrayValue[0].hello = 'dude'
// set hello to dude

viewModel.arrayValue.push({ added: 'index' })
// set 1 to [object Object]
// set length to 2

viewModel.otherView.deepProperty = 'foo'
// set deepProperty to foo

otherView.new = 'another'
// set new to another

otherView.foo = {
  veryDeep: true
}
// set foo to [object Object]

otherView.foo.veryDeep = 'stillWorks'
// set veryDeep to stillWorks

viewModel.aFunction = function() {
  this.newProperty = 'value'
}
// set aFunction to function () {
//   this.newProperty = 'value';
// }

viewModel.aFunction()
// set newProperty to value

console.log(viewModel)
// { foo: 'something',
//   otherView:
//    { myProperty: 42,
//      deepProperty: 'foo',
//      new: 'another',
//      foo: { veryDeep: 'stillWorks' } },
//   newValue: 'anotherThing',
//   arrayValue: [ { hello: 'dude' }, { added: 'index' } ],
//   aFunction: [Function],
//   newProperty: 'value' }

console.log(JSON.stringify(viewModel, null, 2))
// {
//   "foo": "something",
//   "otherView": {
//     "myProperty": 42,
//     "deepProperty": "foo",
//     "new": "another",
//     "foo": {
//       "veryDeep": "stillWorks"
//     }
//   },
//   "newValue": "anotherThing",
//   "arrayValue": {
//     "0": {
//       "hello": "dude"
//     },
//     "1": {
//       "added": "index"
//     }
//   },
//   "newProperty": "value"
// }
