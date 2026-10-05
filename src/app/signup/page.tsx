import React from 'react';

const SignUpPage = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-5'>

            <h2 className='text-2xl font-bold text-red-700'>সাইন আপ</h2>

             <form>
            <fieldset className="fieldset rounded-box w-md">
  

  <label className="label">নাম</label>
  <input name="name" type="text" className="input w-md" placeholder="Name" />

  <label className="label">ImageURL</label>
  <input name="image" type="url" className="input w-md" placeholder="Image" />

  <label className="label">ইমেইল</label>
  <input name="email" type="email" className="input w-md" placeholder="Email" />

  <label className="label">পাসওয়ার্ড</label>
  <input name="password" type="password" className="input w-md" placeholder="Password" />

  <button className="btn bg-red-700 text-white mt-4">সাইন আপ করুন</button>
</fieldset>
           </form>
        </div>
    );
};

export default SignUpPage;