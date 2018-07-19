// 3 Play with CSV and object

const csv = 
`NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`;
 
const items = csv.split('\n')
// console.log(items.shift()) 
items.shift();
const output = items.map(item => {

  const i = item.split(/,[\s]+/)
  console.log(i)
  return {
    name: i[0],
    price: i[2],
    category: i[1],
  }
})

console.log(output)