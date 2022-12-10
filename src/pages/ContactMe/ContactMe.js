import React from 'react';

const ContactMe = () => {
    return (
        <div className='mt-20'>

            <div className="card bg-sky-800 text-neutral-content lg:w-1/2 mx-auto">
                <div className="card-body items-center text-center">
                    <h1 className='text-center text-3xl text-white'>Send me your query. I will reply you</h1>
                    <form action="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered w-full md:w-96" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Query</span>
                            </label>
                            <textarea className='h-28 rounded' name="description" id="" cols="30" rows="10"></textarea>
                        </div>
                        <input type="submit" className='btn btn-primary btn-lg mt-3'/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactMe;