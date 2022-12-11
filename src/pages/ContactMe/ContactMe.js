import React from 'react';

const ContactMe = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const description = form.description.value;
        console.log(name, email, description);
    }
    return (
        <div className='my-10'>

            <div className="card bg-sky-800 text-neutral-content lg:w-1/2 mx-auto">
                <div className="card-body items-center text-center">
                    <h1 className='text-center text-3xl text-white'>Send me your query. I will reply you</h1>
                    <form onSubmit={handleSubmit} action="https://form.jotform.com/223435543167456">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered w-full md:w-96" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Query</span>
                            </label>
                            <textarea className='h-28 rounded p-3 text-white' name="description" id="" cols="30" rows="10"></textarea>
                        </div>
                        <input type="submit" className='btn btn-primary btn-lg mt-3'/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactMe;