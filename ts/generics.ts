function testGenerics<T>(arr: T[]) {
  //logic
  console.log("function test is getting executed");
}

testGenerics<number>([10, 20, 30]);
testGenerics<string>(["cbit", "mgit", "bvrit"]);
//test<string>(["cbit","mgit",10]);--error: Type 'number' is not assignable to type 'string'.
testGenerics<boolean>([true, true, false]);
