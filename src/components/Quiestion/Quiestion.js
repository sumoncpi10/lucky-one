import React from 'react';

const Quiestion = () => {
    return (
        <div className='container'>
            {/* How React Works */}
            <div className='m-3 '>
                <h2 className='m-3'>QSN-1. How React Works</h2>
                <p>React is a Very Much Component Based library. React basically maintains a tree for you. That Allow one Way Data Flow. React works in declarative code. you picture could look like the screen showing now, with a navbar, a header, a filter, and a list. That's because each line of code declares what each element of the app is.</p>
            </div>
            {/* Difference Between Props & State */}
            <div className='m-3'>
                <h1>QSN-2. Difference Between Props & State</h1>
                <div className='d-flex container'>
                    <div className="col">
                        <div className="card h-100">
                            <h1 className='border-1'>props</h1>
                            <li>Props are read-only.</li>
                            <li>Props are immutable.</li>
                            <li>Props allow you to pass data from one component to other components as an argument.</li>
                            <li>Props can be accessed by the child component.</li>
                            <li>Stateless component can have Props.</li>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card h-100">
                            <h1>State</h1>
                            <li>State changes can be asynchronous.</li>
                            <li>State is mutable.</li>
                            <li>States can be used for rendering dynamic changes with the component.</li>
                            <li>State cannot be accessed by child components.</li>
                            <li>Stateless components cannot have State.</li>
                        </div>
                    </div>
                </div>
            </div>
            {/* How useStates Works */}
            <div className='m-3 '>
                <h2 className='m-3'>QSN-3. How useStates Works</h2>
                <p>Use States is hook That Allow you variable in components. You can set initial states. you use two variable here. one variable is functional here. it updates the states value. </p>
            </div>


        </div>
    );
};

export default Quiestion;