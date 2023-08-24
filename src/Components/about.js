import React from 'react'

function about() {
  return (
    <>
    <center><h1 class="title-font lg:text-4xl text-3xl mb-4 font-medium text-black-900"><b>ABOUT OUR SHOP</b></h1></center>
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="object-cover object-center rounded" alt="hero" src="coffee2.jpg"/>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Coffee distribution</h1>
          <p class="mb-8 leading-relaxed">A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee of various types, notably espresso, latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee and iced tea, as well as other non-caffeinated beverages. In continental Europe, cafés serve alcoholic drinks. A coffeehouse may also serve food, such as light snacks, sandwiches, muffins, fruit, or pastries. Coffeehouses range from owner-operated small businesses to large multinational corporations. Some coffeehouse chains operate on a franchise business model, with numerous branches across various countries around the world.</p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Read More</button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default about