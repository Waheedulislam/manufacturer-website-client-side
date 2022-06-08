import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='flex py-2 justify-center items-center '>
                {/* q-1  */}
                <div class="card w-8/12 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-2xl text-primary">1) How will you improve the performance of a React Application?</h2>
                        <p className='font-bold'>Optimizing performance in a React application
                            Keeping component state local where necessary.
                            Memoizing React components to prevent unnecessary re-renders.
                            Code-splitting in React using dynamic import()
                            Windowing or list virtualization in React.
                            Lazy loading images in React.</p>

                    </div>
                </div>
            </div>
            <div className='flex py-2 justify-center items-center '>
                {/* q-2  */}
                <div class="card w-8/12 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-2xl text-primary">2)  What are the different ways to manage a state in a React application?</h2>
                        <p className='font-bold'>The Four Kinds of React State to Manage
                            1)Local state.
                            2)Global state.
                            3)Server state.
                            4)URL state.
                            <br />
                            <span className='font-bold text-xl text-secondary'>Local (UI) state </span> – Local state is data we manage in one or another component.

                            Local state is most often managed in React using the useState hook.
                            <br />
                            <span className='font-bold text-xl text-secondary'>Global (UI)  state</span> –  is data we manage across multiple components.
                            <br />
                            <span className='font-bold text-xl text-secondary'> Server state  </span> – Data that comes from an external server that must be integrated with our UI state.
                            <br />
                            <span className='font-bold text-xl text-secondary'>URL state </span> –  Data that exists on our URLs, including the pathname and query parameters.
                        </p>

                    </div>
                </div>
            </div>
            <div className='flex py-2 justify-center items-center '>
                {/* q-3  */}
                <div class="card w-8/12 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-2xl text-primary">3) How does prototypical inheritance work?</h2>
                        <p className='font-bold'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object .</p>

                    </div>
                </div>
            </div>
            <div className='flex py-2 justify-center items-center '>
                {/* q-4  */}
                <div class="card w-8/12 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-2xl text-primary">4) Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts ?</h2>
                        <p className='font-bold'>When we directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.
                            We can keep the value in a const (in the body of the component), or move outside of the component. setState is used when it's needed to be aware of the changes in the value stored in state. This way the component knows when to re-render.</p>

                    </div>
                </div>
            </div>
            <div className='flex py-2 justify-center items-center '>
                {/* q-5 */}
                <div class="card w-8/12 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-2xl text-primary">5) You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <p className='font-bold'><span className='font-bold text-xl'>
                            To find the product of elements of an array.
                        </span>
                            <br />
                            create an empty variable. ( product)
                            Initialize it with 1.
                            In a loop traverse through each element (or get each element from user) multiply each element to product.
                            Print the product.</p>

                    </div>
                </div>
            </div>
            <div className='flex py-2 justify-center items-center '>
                {/* q-6  */}
                <div class="card w-8/12 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-2xl text-primary">6) What is a unit test? Why should write unit tests ?</h2>
                        <p className='font-bold'>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;