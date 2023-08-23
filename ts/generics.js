function testGenerics(arr) {
    //logic
    console.log("function test is getting executed");
}
testGenerics([10, 20, 30]);
testGenerics(["cbit", "mgit", "bvrit"]);
//test<string>(["cbit","mgit",10]);--error: Type 'number' is not assignable to type 'string'.
testGenerics([true, true, false]);
